import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: awsAmplify(),
  integrations: [tailwind()],
  server: {
    OutgoingHttpHeaders: {
      'access-control-allow-origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      allow: 'GET, POST, OPTIONS',
      accept: '*',
    },
    headers: {
      'access-control-allow-origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      allow: 'GET, POST, OPTIONS',
      accept: '*',
    },
  },
});
