import { createClient } from 'urql';

export const subgraphGetterFunction = async (
  tokensQuery: string,
  variables: any,
  url: string
): Promise<any> => {
  try {
    const client = createClient({
      url,
      requestPolicy: 'network-only',
    });
    const data = await client.query(tokensQuery, variables).toPromise();
    return data;
  } catch (error) {
    console.log('Error fetching data: ', error);
    throw error;
  }
};
