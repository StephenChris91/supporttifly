import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  title: "NGOBackend",

  projectId: "lt6smir2",
  dataset: "production",
  apiVersion: "2023-04-20",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
