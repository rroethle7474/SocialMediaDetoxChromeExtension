# Time Healer

A Chrome extension that helps you stay focused by redirecting distracting websites during your productive hours.

## Overview

Time Healer automatically redirects specified websites (like YouTube, Twitter, etc.) to a more productive alternative during your designated work hours. This helps eliminate distractions and maintain focus when you need it most.

## Features

- **Time-based Website Redirection**: Automatically redirects distracting websites during your specified work hours
- **Customizable Work Hours**: Set your own productive time window
- **Customizable Redirect Destination**: Choose where you want distracting sites to redirect to
- **Simple Interface**: Easy-to-use settings popup

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The Time Healer extension should now appear in your extensions list

## Usage

1. Click on the Time Healer icon in your Chrome toolbar to open the settings popup
2. Set your work hours:
   - **Start Hour**: When your focus time begins (default: 9 AM)
   - **End Hour**: When your focus time ends (default: 5 PM)
3. Set your redirect URL (default: https://www.yahoo.com)
4. Click "Save Settings" to apply your changes

During your specified work hours, attempts to visit distracting websites (currently YouTube, Twitter, and X) will automatically redirect to your chosen URL.

## Currently Blocked Websites

- YouTube (youtube.com)
- Twitter (twitter.com)
- X (x.com)

## Files in this Project

- **manifest.json**: Extension configuration and permissions
- **timehealer.js**: Background service worker that handles the time-based logic
- **timehealer_index_popup.html**: The popup interface for adjusting settings
- **popup.js**: Handles the settings form submission and storage
- **rules.json**: Defines which websites to redirect and where to redirect them

## Permissions

This extension requires the following permissions:
- `declarativeNetRequest`: To redirect website requests
- `storage`: To save your settings
- `tabs`: To access and modify browser tabs

## License

[Your License Here]

## Contributing

[Your Contribution Guidelines Here]
