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
        '~/modules/auth'
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
    },
    privateRuntimeConfig: {

    }
}
