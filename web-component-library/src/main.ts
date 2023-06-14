import * as components from "./components";
// import * as icons from "./components/icons";
import { ComponentOptions } from "vue";

interface ComponentWithOptions {
  name?: string;
  options?: ComponentOptions<any>;
}

const ComponentLibrary = {
  install(Vue: any): void {
    for (const componentName in components) {
      const component = (components as Record<string, ComponentWithOptions>)[
        componentName as string
      ];

      Vue.component(componentName, component);
    }

    // for (const componentName in icons) {
    //   const component = (icons as Record<string, ComponentWithOptions>)[
    //     componentName
    //   ];

    //   Vue.component(
    //     getComponentName(component, componentName),
    //     component as ComponentOptions
    //   );
    // }
  },
};

const getComponentName = (
  component: ComponentWithOptions,
  fallbackName: string
): string => {
  return (
    ("options" in component ? component.options?.name : component.name) ??
    fallbackName
  );
};

export default ComponentLibrary;
