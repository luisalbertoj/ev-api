import { ControlCrmState } from "@/core/automation/control-crm-state";
import { getHeaders } from "@/utils/headers";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  try {
    const res =await ControlCrmState.run();
    return new Response(JSON.stringify({res}), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response(JSON.stringify({error}), {
      status: 500,
      headers,
    });
  }

};

export const ALL: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = getHeaders(origin);
  return new Response(JSON.stringify({}), {
    status: 200,
    headers,
  });
};
