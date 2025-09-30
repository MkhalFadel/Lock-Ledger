import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// vite-plugin-pwa helper
import { registerSW } from "virtual:pwa-register";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Register the PWA service worker
registerSW({
  onNeedRefresh() {
    console.log("🔄 New content is available, please refresh.");
  },
  onOfflineReady() {
    console.log("✅ App ready to work offline.");
  },
});
