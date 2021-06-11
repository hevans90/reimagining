module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/_scss/body.scss";
        @import "@/_scss/_base.scss";
        @import "@/_scss/_mixins.scss";
        @import "@/_scss/_variables.scss";
        `,
      },
    },
  },
};
