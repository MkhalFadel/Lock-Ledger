import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// vite-plugin-pwa helper
import { registerSW } from "virtual:pwa-register";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
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
