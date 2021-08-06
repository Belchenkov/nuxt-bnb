import cookie from 'cookie';
import { OAuth2Client } from 'google-auth-library';

export default function () {
    const authConfig = this.options.publicRuntimeConfig.auth;

    this.nuxt.hook('render:setupMiddleware', app => {
        app.use('/api', handler);
    });

    async function handler(req, res, next) {
        const idToken = cookie.parse(req.headers.cookie)[authConfig.cookieName];
        if (!idToken) return rejectHit(res);

        const ticket = await getUser(idToken);
        if (!idToken) return rejectHit(res);

        const { sub, email, name, picture } = ticket;
        req.identity = {
          id: sub,
          email,
          name,
          image: picture
        };
        next();
    }

    async function getUser(idToken) {
        const client = new OAuth2Client(authConfig.clientId);

        try {
            const ticket = await client.verifyIdToken({
                idToken,
                audience: authConfig.clientId,
            });

            return ticket.getPayload();
        } catch (err) {
            console.error(err);
        }
    }

    function rejectHit(res) {
        console.log('rejectHit')
        res.statusCode = 401;
        res.end();
    }
}
