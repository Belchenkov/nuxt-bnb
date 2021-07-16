export default function (context, inject) {
    const appId = 'H2AOMFZD4O';
    const apiKey = '94ed5d49fba20e6f8744ceb96dddb33a';
    const headers = {
        'X-Algolia-API-key': apiKey,
            'X-Algolia-Application-Id': appId
    };

    inject('dataApi', {
        getHome,
        getReviewsByHomeId,
        getUserByHomeId,
        getHomesByLocation
    });

    async function getHome(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                headers
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function getReviewsByHomeId(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    filters: `homeId:${homeId}`,
                    hitsPerPage: 6,
                    attributesToHighlight: []
                })
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function getUserByHomeId(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    filters: `homeId:${homeId}`,
                    attributesToHighlight: []
                })
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function getHomesByLocation(lat, lng, radiusInMeters = 1500) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    aroundLatLng: `${lat}${lng}`,
                    aroundRadius: radiusInMeters,
                    hitsPerPage: 10,
                    attributesToHighlight: []
                })
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function unWrap(response) {
        try {
            const data = await response.json();
            const { ok, status, statusText } = data;

            return {
                data,
                ok,
                status,
                statusText,
            };
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async function getErrorResponse(error) {
        return {
          ok: false,
          status: 500,
          statusText: error.message,
          data: {}
        };
    }
}
