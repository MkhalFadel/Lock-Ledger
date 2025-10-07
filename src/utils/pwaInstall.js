let deferredPrompt = null;
let callback = null;

function isStandalone() {
   return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
   );
}


export function initPWAInstallPrompt(onPromptReady) {
callback = onPromptReady;

   // Check immediately if installed
   if (isStandalone()) {
      if (callback) callback(false);
      return;
   }

   window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      if (callback) callback(true); // show button
   });

   // Detect install event to hide button after installation
   window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      deferredPrompt = null;
      if (callback) callback(false); // hide button
   });
}


export async function triggerPWAInstall() {
   if (!deferredPrompt) {
      console.log("Install prompt not available yet.");
      return;
   }

   deferredPrompt.prompt();
   const choiceResult = await deferredPrompt.userChoice;
   console.log("User choice:", choiceResult.outcome);

   deferredPrompt = null; // reset
   if (callback) callback(false); // tell your app that prompt was used
}
