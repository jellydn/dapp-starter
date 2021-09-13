import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
      ws: "isomorphic-ws",
    },
  },
  plugins: [reactRefresh(), checker({ typescript: true })],
});
