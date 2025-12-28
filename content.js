// Default shortcut key
const DEFAULT_SHORTCUT = '.';

// Get the configured shortcut from storage
function getShortcut() {
  return new Promise((resolve) => {
    chrome.storage.sync.get({ shortcut: DEFAULT_SHORTCUT }, (result) => {
      resolve(result.shortcut);
    });
  });
}

// Listen for keydown events
document.addEventListener('keydown', async (event) => {
  // Ignore if user is typing in an input field
  const activeElement = document.activeElement;
  const isTyping = activeElement.tagName === 'INPUT' ||
                   activeElement.tagName === 'TEXTAREA' ||
                   activeElement.isContentEditable;
  
  if (isTyping) return;

  const shortcut = await getShortcut();
  
  if (event.key === shortcut) {
    event.preventDefault();
    const currentUrl = window.location.href;
    const isOnDev = window.location.hostname === 'github.dev';
    const newUrl = isOnDev
      ? currentUrl.replace('github.dev', 'github.com')
      : currentUrl.replace('github.com', 'github.dev');
    window.location.href = newUrl;
  }
});

