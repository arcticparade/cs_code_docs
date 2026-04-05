import { defineConfig } from "vitepress";

const docsBase = process.env.DOCS_BASE ?? "/";
const socialImage = `${docsBase}hero-architecture.svg`;
const logoPath = `${docsBase}logo-mark.svg`;
const faviconPath = `${docsBase}favicon.svg`;

export default defineConfig({
  base: docsBase,
  title: "CS Code Router",
  description: "Public docs for using CS Code Router through the web app, CLI, and API.",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: faviconPath }],
    ["meta", { name: "theme-color", content: "#156f63" }],
    ["meta", { property: "og:site_name", content: "CS Code Router Docs" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "CS Code Router Docs" }],
    ["meta", { property: "og:description", content: "Public docs for using CS Code Router through the web app, CLI, and API." }],
    ["meta", { property: "og:image", content: socialImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "CS Code Router Docs" }],
    ["meta", { name: "twitter:description", content: "Public docs for using CS Code Router through the web app, CLI, and API." }],
    ["meta", { name: "twitter:image", content: socialImage }]
  ],
  themeConfig: {
    siteTitle: "CS Code Router",
    logo: {
      light: logoPath,
      dark: logoPath
    },
    search: {
      provider: "local"
    },
    nav: [
      { text: "Docs Home", link: "/" },
      { text: "Quickstart", link: "/quickstart" },
      { text: "API", link: "/api-reference" },
      { text: "CLI", link: "/cli-reference" },
      { text: "Security", link: "/security-features" }
    ],
    sidebar: [
      {
        text: "Start Here",
        items: [
          { text: "Documentation Index", link: "/" },
          { text: "Quickstart", link: "/quickstart" },
          { text: "User Guide", link: "/user-guide" },
          { text: "Workspace", link: "/workspace-reference" }
        ]
      },
      {
        text: "API",
        items: [
          { text: "API Overview", link: "/api-reference" },
          { text: "Routing And Execution", link: "/api-routing" },
          { text: "Conversations And Memory", link: "/api-conversations" },
          { text: "Teams, Policies, And Webhooks", link: "/api-operations" },
          { text: "Billing And Entitlements", link: "/api-billing" }
        ]
      },
      {
        text: "Product",
        items: [
          { text: "CLI Reference", link: "/cli-reference" },
          { text: "Auth Reference", link: "/auth-reference" },
          { text: "Model Routing", link: "/model-routing" },
          { text: "Security Features", link: "/security-features" },
          { text: "User Guide", link: "/user-guide" }
        ]
      }
    ]
  }
});