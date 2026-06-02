import { defineConfig } from "cypress";

export default defineConfig ({
  e2e: {
    baseUrl: 'https://pop-culture.azurewebsites.net'
  }
});
