// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    typescript: { shim: false },
    app: {
        head: {
            title: 'Nuxt PoC',
            titleTemplate: '%s - Nuxt PoC',
            link: [
                {
                    href: 'https://fonts.googleapis.com',
                    rel: 'preconnect',
                },
                {
                    href: 'https://fonts.gstatic.com',
                    rel: 'preconnect',
                    crossorigin: 'anonymous',
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
                    rel: 'stylesheet',
                },
            ],
        },
    },
    css: ['~/assets/sass/main.scss'],
});
