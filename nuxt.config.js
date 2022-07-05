export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "finds",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/app.scss",

    //fonts
    "~/assets/fonts/text/roboto.css",
    "~/assets/fonts/text/rubik.css",

    // sass from node_modules
    "animate.css/animate.min.css",
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "vue-form-wizard/dist/vue-form-wizard.min.css",
    "vue-tour/dist/vue-tour.css",
    "vue-slider-component/lib/theme/default.scss",
    "sweetalert2/src/sweetalert2",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-feather", mode: "client" },
    { src: "~/plugins/apexchart", mode: "client" },
    { src: "~/plugins/chartist", mode: "client" },
    { src: "~/plugins/functional-calendar", mode: "client" },
    { src: "~/plugins/components", mode: "client" },
    { src: "~/plugins/vue-formwizard", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    credentials: true, // this says that in the request the httponly cookie should be sent
    proxy: false,
  },

  auth: {
    // redirect: {
    //   login: '/login',
    //   logout: '/',
    //   // callback: '/login',
    //   home: '/dashboard'
    // },
    strategies: {
      // 'local' : {
      //   provider: 'laravel/sanctum',
      //   url: 'http://localhost:3232',
      //   endpoints: {
      //     login: {
      //       // url: '/api/login',
      //       url: '/api/v1/staff/auth/login'
      //     }
      //   }
      // }

      local: {
        endpoints: {
          login: {
            url: process.env.API_URL + "api/v1/staff/auth/login",
            method: "post",
          },
          logout: {
            url: process.env.API_URL + "api/v1/staff/auth/logout",
            method: "post",
          },
          user: {
            url: process.env.API_URL + "api/v1/staff/auth/user",
            method: "get",
            propertyName: false,
          },
        },
        tokenRequired: false,
        tokenType: false,
      },
    },
    // cookie: {
    //   prefix: 'auth.'
    // }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-feather"],
  },

  // linkActiveClass custom
  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "active",
  },
};
