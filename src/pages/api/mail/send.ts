import {
  EvolinciteMailStates,
  type EvolinciteMailConfiguration,
  type ModelEvolinciteMailConfigurationFilterInput,
  type UpdateEvolinciteMailInput,
} from '@/API';
import { sendMail } from '@/core/mail/send-mail.service';
import { updateEvolinciteMail } from '@/graphql/mutations';
import { evolinciteMailConfigurationsByEvolinciteUserID } from '@/graphql/queries';
import { GetCors } from '@/midelwares/cors';
import { Connector } from '@/utils/connector';
import { getHeaders } from '@/utils/headers';
import type { APIRoute } from 'astro';
import { getUrl } from 'aws-amplify/storage';
import type { Attachment } from 'nodemailer/lib/mailer';

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  const body = await request.json();
  let inputUpdateMails: UpdateEvolinciteMailInput = {
    id: body.registryId,
  };
  try {
    const filter: ModelEvolinciteMailConfigurationFilterInput = {
      evolinciteCompanyID: {
        eq: body.companyId,
      },
    };
    const mailConfigDto = await Connector.graphql({
      query: evolinciteMailConfigurationsByEvolinciteUserID,
      variables: {
        evolinciteUserID: body.userId,
        filter,
      },
    });
    const mailConfig = mailConfigDto?.data
      ?.evolinciteMailConfigurationsByEvolinciteUserID
      ?.items?.[0] as EvolinciteMailConfiguration;
    if (!mailConfig) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Mail config not found',
        }),
        {
          headers,
          status: 500,
        },
      );
    }
    const files = await getDocuments(body.attachments);

    const attachments = files.map((file): Attachment => {
      return {
        filename: file.name,
        path: file.url,
      };
    });

    const result = await sendMail(
      {
        host: mailConfig.SMTP ?? '',
        port: '465',
        user: mailConfig.email ?? '',
        pass: mailConfig.password ?? '',
      },
      {
        from: mailConfig.email ?? '',
        to: body.to ?? [],
        subject: body.subject ?? '',
        html: body.content ?? '',
        text: body.content ?? '',
        attachments: attachments ?? [],
      },
    );
    if (!result) {
      inputUpdateMails.response = JSON.stringify(result);
      throw new Error('Error al enviar el correo');
    }
    inputUpdateMails.response = JSON.stringify(result);
    inputUpdateMails.submissionStatus = EvolinciteMailStates.SENT;
    await Connector.graphql({
      query: updateEvolinciteMail,
      variables: { input: inputUpdateMails },
    });

    return new Response(
      JSON.stringify({
        result,
        body,
      }),
      {
        headers,
        status: 200,
      },
    );
  } catch (error) {
    console.log({ error });
    inputUpdateMails.submissionStatus = EvolinciteMailStates.REJECTED;
    await Connector.graphql({
      query: updateEvolinciteMail,
      variables: { input: inputUpdateMails },
    });
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al enviar el correo',
        error,
      }),
      {
        headers,
        status: 500,
      },
    );
  }
};

async function getDocuments(
  keys: string[],
): Promise<{ name: string; url: string }[]> {
  const rest: { name: string; url: string }[] = [];
  if (!keys) return rest;
  for (const key of keys) {
    const res = await getUrl({
      key,
      options: {
        expiresIn: 3600,
      },
    });
    const urlResource = res.url.href;

    const documentName = key.split('/').pop() as string;
    const extension = documentName.split('.').pop();
    const name = `${documentName + new Date().toLocaleDateString()}.${extension}`;

    rest.push({ name, url: urlResource });
  }
  return rest;
}

export const ALL = GetCors;
