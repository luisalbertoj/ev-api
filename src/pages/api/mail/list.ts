import type {
  EvolinciteMailConfiguration,
  ModelEvolinciteMailConfigurationFilterInput,
} from '@/API';
import { fetchEmails, listMailboxes } from '@/core/mail/fetch-mails';
import { evolinciteMailConfigurationsByEvolinciteUserID } from '@/graphql/queries';
import { GetCors } from '@/midelwares/cors';
import { Connector } from '@/utils/connector';
import { getHeaders } from '@/utils/headers';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  try {
    const { userId, companyId } = await request.json();
    if (!userId || !companyId) {
      throw new Error('Missing userId or companyId');
    }

    const filter: ModelEvolinciteMailConfigurationFilterInput = {
      evolinciteCompanyID: {
        eq: companyId,
      },
    };

    const mailConfigDto = await Connector.graphql({
      query: evolinciteMailConfigurationsByEvolinciteUserID,
      variables: {
        evolinciteUserID: userId,
        filter,
      },
    });

    const mailConfig = mailConfigDto?.data
      ?.evolinciteMailConfigurationsByEvolinciteUserID
      ?.items?.[0] as EvolinciteMailConfiguration;

    if (!mailConfig || !mailConfig.email || !mailConfig.password) {
      throw new Error('Mail config not found');
    }

    const resFolders = await listMailboxes(mailConfig);
    const folders = ['INBOX'];
    console.log(folders);

    // Obtener los correos de cada bandeja en paralelo
    const folderPromises = [];
    for await (const folder of folders) {
      const emails = await fetchEmails(folder, mailConfig);
      folderPromises.push({
        [folder.toLowerCase().replace('inbox.', '')]: emails,
      });
    }
    /* const folderPromises = folders.map((folder) => {
      const emails = await fetchEmails(folder, mailConfig);
      return { [folder.toLowerCase().replace('inbox.', '')]: emails };
    }); */

    // Esperar a que todas las promesas se resuelvan
    const results = await Promise.all(folderPromises);

    // Combinar los resultados en un solo objeto
    const mails = results.reduce((acc, result) => {
      return { ...acc, ...result };
    }, {});

    return new Response(
      JSON.stringify({
        success: true,
        data: mails,
      }),
      {
        headers,
        status: 200,
      },
    );
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Something went wrong' + JSON.stringify(e),
      }),
      {
        headers,
        status: 500,
      },
    );
  }
};

export const ALL = GetCors;
