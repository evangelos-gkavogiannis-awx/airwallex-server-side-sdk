import { Airwallex } from '@airwallex/node-sdk';

// Initialize the client
const client = new Airwallex({
  clientId: '',     // replace with your actual Client ID
  apiKey: '',         // replace with your actual API Key
  env: 'demo',                    // or 'prod'
  apiVersion: '2025-02-14',
  timeout: 30000,
  retry: 3,
});

async function main() {
  try {
    console.log(Object.keys(client)); //gives the supported modules
    const response = await client.issuing.cards.getCards({card_status: 'ACTIVE'});
    console.log('Global accounts:', response);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
