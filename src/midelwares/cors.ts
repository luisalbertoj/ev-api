import { getHeaders } from '@/utils/headers';
import type { APIRoute } from 'astro';

export const GetCors: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  return new Response(JSON.stringify({}), {
    status: 200,
    headers,
  });
};
