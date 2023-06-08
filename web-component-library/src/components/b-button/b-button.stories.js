import BButton, { BUTTON_VARIANTS } from "./index.vue"

export default {
  title: "WCL/B-Button",
  component: BButton,
  argTypes: {
    default: {
      description: "Default slot value",
    },
    variant: {
      control: { type: "select" },
      options: BUTTON_VARIANTS,
      description:
        "Button variant based on Buttons components from the [Website Library](https://www.figma.com/file/DnexMrgcWik2f949kJi1FrRC/Website-Library?node-id=44%3A223).",
    },
    type: {
      description:
        "The default behavior of the button. For possible values check the [Official Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)",
    },
    disabled: {
      description: "Disables the button",
    },
    icon: {
      description:
        "Name of the Icon component to be included in the button content. Example: 'arrow-icon'",
    },
    click: {
      action: "click",
      description: "Emitted when the button is clicked.",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BButton },
  template: `<b-button v-bind="$props" >
              <template v-if="${"default" in args}">
                ${args.default}
              </template>
            </b-button>`,
})

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  default: "Start your free 7-day trial",
}

export const DefaultButtonDisabled = Template.bind({})
DefaultButtonDisabled.args = {
  default: "Start your free 7-day trial",
  disabled: true,
}

export const ConversionButton = Template.bind({})
ConversionButton.args = {
  default: "Start your free 7-day trial",
  variant: "conversion",
}

export const ConversionButtonDisabled = Template.bind({})
ConversionButtonDisabled.args = {
  default: "Start your free 7-day trial",
  variant: "conversion",
  disabled: true,
}

export const ConversionButtonWithIcon = Template.bind({})
ConversionButtonWithIcon.args = {
  variant: "conversion",
  icon: "audio-icon",
  default: "Listen Now",
}

export const ConversionButtonWithIconDisabled = Template.bind({})
ConversionButtonWithIconDisabled.args = {
  variant: "conversion",
  icon: "audio-icon",
  default: "Listen Now",
  disabled: true,
}

export const ProductInteractionButton = Template.bind({})
ProductInteractionButton.args = {
  default: "Start your free 7-day trial",
  variant: "product-interaction",
}

export const ProductInteractionButtonDisabled = Template.bind({})
ProductInteractionButtonDisabled.args = {
  default: "Start your free 7-day trial",
  variant: "product-interaction",
  disabled: true,
}

export const ProductInteractionButtonWithIcon = Template.bind({})
ProductInteractionButtonWithIcon.args = {
  variant: "product-interaction",
  icon: "audio-icon",
  default: "Listen Now",
}

export const ProductInteractionButtonWithIconDisabled = Template.bind({})
ProductInteractionButtonWithIconDisabled.args = {
  variant: "product-interaction",
  icon: "audio-icon",
  default: "Listen Now",
  disabled: true,
}

export const TertiaryButton = Template.bind({})
TertiaryButton.args = {
  default: "Customize cookies",
  variant: "tertiary",
}

export const TertiaryButtonWithIcon = Template.bind({})
TertiaryButtonWithIcon.args = {
  variant: "tertiary",
  icon: "audio-icon",
  default: "Listen Now",
}

export const TertiaryButtonDisabled = Template.bind({})
TertiaryButtonDisabled.args = {
  variant: "tertiary",
  default: "Listen Now",
  disabled: true,
}
