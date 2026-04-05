import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import DocsCallout from "./components/DocsCallout.vue";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("DocsCallout", DocsCallout);
  }
};

export default theme;