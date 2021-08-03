export default {
    components: true,
    head: {
        titleTemplate: "Build Clone AirBnB on Nuxt.js",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: [
                "my-style"
            ]
        },
        meta: [{
            charset: "uft-8"
        }],
    },
    router: {
        prefetchLinks: false
    },
    plugins: [
        '~/plugins/maps.client',
        '~/plugins/dataApi',
        '~/plugins/auth.client'
    ],
    modules: [
        '~/modules/auth',
        '~/modules/algolia',
    ],
    buildModules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '~assets/sass/app.scss'
    ],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    },
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '448467644899-1120fsp32mv4cb42mdbdmp6oaqn3254j.apps.googleusercontent.com'
        },
        algolia: {
            appId: 'H2AOMFZD4O',
            key: '94ed5d49fba20e6f8744ceb96dddb33a',
        }
    },
    privateRuntimeConfig: {
        algolia: {
            key: '235afafb39cc868a33bcfbed0d9a8e3e',
            appId: 'H2AOMFZD4O',
        }
    }
}
