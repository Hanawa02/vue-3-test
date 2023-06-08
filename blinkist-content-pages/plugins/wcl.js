
import { PersonalButton, BButton } from "web-component-library";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("PersonalButton", PersonalButton)
  nuxtApp.vueApp.component("BButton", BButton)
})