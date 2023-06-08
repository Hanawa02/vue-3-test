<template>
  <button
    :class="`rounded border-none
      font-cera-pro font-medium text-base leading-5 text-center
      items-center justify-center no-underline outline-none
      disabled:bg-light-grey
      cursor-pointer disabled:cursor-not-allowed
      ${cssClasses} ${verticalPadding}`"
    :type="type"
    :disabled="disabled"
    data-test-id="b-button"
    @click="handleClickEvent($event)"
  >
    <div v-if="icon" class="flex items-center justify-center text-center">
      <component :is="icon" class="w-6 h-6 mr-2 flex-shrink-0" />
      <slot />
    </div>
    <slot v-else />
  </button>
</template>

<script>
export const BUTTON_VARIANTS_STYLES = {
  "conversion":
    "px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white",
  "product-interaction":
    "px-4 bg-midnight text-white hover:bg-deep-black hover:text-white disabled:text-white",
  "tertiary":
    "text-mid-grey enabled:hover:text-dark-grey disabled:bg-transparent disabled:text-light-grey",
}

export const BUTTON_VARIANTS = Object.keys(BUTTON_VARIANTS_STYLES)

export default {
  name: "BButton",
  props: {
    variant: {
      type: String,
      default: "conversion",

    },
    icon: { type: String, default: null },
    type: { type: String, default: "submit" },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    cssClasses() {
      return BUTTON_VARIANTS_STYLES[this.variant]
    },
    verticalPadding() {
      if (this.variant === "tertiary") {
        return ""
      }

      if (this.icon) {
        return "py-2.5"
      } else {
        return "py-3"
      }
    },
  },
  methods: {
    handleClickEvent(event) {
      this.$emit("click", event)
    },
  },
}
</script>
