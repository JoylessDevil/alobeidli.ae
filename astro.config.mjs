import { defineConfig } from "astro/config";
const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner = "", name = ""] = repository.split("/");
const userSite = name === `${owner}.github.io`;
export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "http://localhost:4321",
  base: owner && !userSite ? `/${name}` : "/",
});
