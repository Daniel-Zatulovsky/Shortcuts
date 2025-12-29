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

// Check if element or ancestors indicate text input context
function isInTextContext(element) {
  if (!element) return false;
  
  // Direct checks on active element
  const tag = element.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
  if (element.isContentEditable) return true;
  
  // ARIA roles used by Monaco editor and other rich text inputs
  const role = element.getAttribute('role');
  if (role === 'textbox' || role === 'combobox') return true;
  
  // Check if inside Monaco editor (VS Code / github.dev)
  if (element.closest('.monaco-editor')) return true;
  
  return false;
}

// Listen for keydown events
document.addEventListener('keydown', async (event) => {
  // Ignore if user is typing in an input field
  if (isInTextContext(document.activeElement)) return;

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

