const shortcutInput = document.getElementById('shortcut');
const savedIndicator = document.getElementById('saved');

// Load saved shortcut
chrome.storage.sync.get({ shortcut: '.' }, (result) => {
  shortcutInput.value = result.shortcut;
});

// Save on input change
shortcutInput.addEventListener('input', () => {
  const value = shortcutInput.value;
  if (value.length === 1) {
    chrome.storage.sync.set({ shortcut: value }, () => {
      savedIndicator.classList.add('show');
      setTimeout(() => savedIndicator.classList.remove('show'), 1500);
    });
  }
});

