import fetch from 'node-fetch';

import { unWrap, getErrorResponse } from "../utils/fetchUtils";

export default function () {
    const algoliaConfig = this.options.privateRuntimeConfig.algolia;
    const headers = {
        'X-Algolia-API-key': algoliaConfig.key,
        'X-Algolia-Application-Id': algoliaConfig.appId
    };

    this.nuxt.hook('render:setupMiddleware', app => {
        app.use('/api/user', getUserRoute);
    });

    async function getUserRoute(req, res) {
        const identity = req.identity;
        const userData = await getUserById(identity);

        if (userData.status === 200) {
            sendJSON(userData.json, res);
            return;
        }

        await createUser(req.identity);
        sendJSON(makeUserPayload(identity), res);
    }

    async function createUser(identity) {
        try {
            return unWrap(await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
                headers,
                method: 'PUT',
                body: JSON.stringify(makeUserPayload(identity))
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    async function getUserById(identity) {
        try {
            return unWrap(await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
                headers
            }));
        } catch (err) {
            console.log(err);
            return getErrorResponse(err);
        }
    }

    function sendJSON(data, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }

    function makeUserPayload({ name, email, image }) {
        return {
            name,
            email,
            image,
            homeId: [],
            reviewCount: 0,
            description: '',
            joined: new Date().toISOString()
        }
    }
}