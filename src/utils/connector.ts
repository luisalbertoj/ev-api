import amplifyconfig from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

export interface PayloadQuery {
  query: any;
  variables?: any;
  authToken?: string;
}

Amplify.configure(amplifyconfig);

const client = generateClient();

const graphql = (
  { authToken, query, variables }: PayloadQuery,
  isNewClient = false,
) => {
  if (isNewClient) {
    return generateClient().graphql({ query, variables, authToken }) as any;
  }
  return client.graphql({
    query,
    variables,
    authToken,
  }) as any;
};

export const Connector = {
  graphql,
};
