import { unWrap, getErrorResponse } from "../utils/fetchUtils";

export default function ({ $config }, inject) {
    const headers = {
        'X-Algolia-API-key': $config.algolia.key,
        'X-Algolia-Application-Id': $config.algolia.appId
    };

    inject('dataApi', {
        getHome,
        getReviewsByHomeId,
        getUserByHomeId,
        getHomesByLocation
    });

    async function getHome(homeId) {
        try {
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                headers
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function getReviewsByHomeId(homeId) {
        try {
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`, {
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
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`, {
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

    async function getHomesByLocation(lat, lng, start, end, radiusInMeters = 1500 * 15){
        try {
            const days = []
            for(let day = start; day <= end; day += 86400){
                days.push(`availability:${day}`)
            }
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    aroundLatLng: `${lat},${lng}`,
                    aroundRadius: radiusInMeters,
                    hitsPerPage: 10,
                    filters: days.join(' AND '),
                    attributesToHighlight: [],
                })
            }))
        } catch(error){
            return getErrorResponse(error)
        }
    }
}
