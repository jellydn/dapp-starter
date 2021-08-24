import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), checker({ typescript: true })],
});
