let deferredPrompt = null;
let callback = null;

export function initPWAInstallPrompt(onPromptReady) {
   callback = onPromptReady;

   window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      if (callback) {
      callback(true); // tell your app that install is available
      }
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
   if (callback) {
    callback(false); // tell your app that prompt was used
   }
}
