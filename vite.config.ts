import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

const flexSearchIndexOptions = {
  preset: 'default',
};

const options = {
  ...flexSearchIndexOptions,
  previewLength: 20,
  buttonLabel: "Search",
  placeholder: "Search Docs"
};

export default defineConfig({
  plugins: [ SearchPlugin(options) ],
});

