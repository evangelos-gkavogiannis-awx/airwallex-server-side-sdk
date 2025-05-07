import { Airwallex } from '@airwallex/node-sdk';

// Initialize the client
const client = new Airwallex({
    clientId: '-SGVMBpwSdOfMw7Jxgt58g',     // replace with your actual Client ID
    apiKey: '107a5c39a1b60c5a7671bd797355ff8994dd9ed5bc2fbca57d48c298927c467aabcd4f34651cae902798d5a0bca9dedf',         // replace with your actual API Key
    env: 'demo',                    // or 'prod'
    apiVersion: '2025-02-14',
    timeout: 30000,
    retry: 3,
});

async function main() {
    try {
        const paymentIntentRequest = {
            amount: 10000,
            currency: 'USD',
            merchant_order_id: 'order_xyz_123',
            request_id: 'req_id_abc3',
            return_url: 'https://yourapp.com/payment-success',
        };

        console.log(Object.keys(client)); //gives the supported modules
        const response = await client.issuing.cards.getCards({ card_status: 'ACTIVE' });
        const PaResponse = await client.paymentAcceptance.paymentIntents.createPaymentIntent(paymentIntentRequest);
        const PaResponse2 = await client.payouts.transfers
        console.log('Global accounts:', response);
        console.log(PaResponse)
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
