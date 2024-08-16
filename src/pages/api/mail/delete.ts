import type {
  EvolinciteMailConfiguration,
  ModelEvolinciteMailConfigurationFilterInput,
} from '@/API';
import { deleteMail } from '@/core/mail/fetch-mails';
import { evolinciteMailConfigurationsByEvolinciteUserID } from '@/graphql/queries';
import { GetCors } from '@/midelwares/cors';
import { Connector } from '@/utils/connector';
import { getHeaders } from '@/utils/headers';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  try {
    const { userId, companyId, ids } = await request.json();
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

    const res = await deleteMail(mailConfig, ids);

    return new Response(
      JSON.stringify({
        success: true,
        data: res,
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
