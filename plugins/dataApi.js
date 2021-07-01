export default function (context, inject) {
    const appId = 'H2AOMFZD4O';
    const apiKey = '94ed5d49fba20e6f8744ceb96dddb33a';

    inject('dataApi', {
        getHome
    });

    async function getHome(homeId) {
        try {
            const res = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                headers: {
                    'X-Algolia-API-key': apiKey,
                    'X-Algolia-Application-Id': appId
                }
            });

            return await res.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
