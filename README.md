# GitHub Shortcut

A minimal Chrome extension that toggles between github.com and github.dev (VS Code in browser) with a single keypress.

## Features

- Press `.` (or your custom key) to toggle between github.com ↔ github.dev
- Customizable shortcut key via extension options
- Only activates on github.com and github.dev pages
- Ignores keypresses when typing in input fields

## Installation

### Load as unpacked extension (Developer Mode)

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `Shortcuts` folder
5. The extension is now active!

### Customize the shortcut

1. Right-click the extension icon → **Options**
2. Enter your preferred single-character shortcut
3. The setting saves automatically

## Usage

1. Navigate to any page on github.com or github.dev
2. Press `.` (or your configured key)
3. You'll be redirected to the same page on the other domain

## Files

- `manifest.json` - Extension configuration
- `content.js` - Keyboard listener (runs on github.com and github.dev)
- `options.html/js` - Settings popup
