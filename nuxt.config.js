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
        '~/plugins/dataApi'
    ],
    modules: [],
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
    }
}
