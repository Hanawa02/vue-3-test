import WCL from "web-component-library";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WCL);
});
