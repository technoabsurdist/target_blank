=============================
Open Links in New Tabs Extension
=============================

This Chrome Extension modifies all webpage links to open in new tabs. It includes a toggle feature, accessible via a popup, allowing users to enable or disable this behavior at their convenience.


========
Features
========

- Automatically sets all links on webpages to open in new tabs.
- Provides a popup with an enable/disable toggle.
- Saves the user's preference for future browsing sessions.

Installation
============

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to ``chrome://extensions/``.
3. Enable "Developer mode" at the top-right corner.
4. Click "Load unpacked" and select the extension's directory.
5. The extension should now be visible in your Chrome toolbar.

Usage
=====

- Click on the extension icon in the Chrome toolbar to open the popup.
- Use the toggle switch to enable or disable the extension. When enabled, all links will open in new tabs.
- Refresh any open tabs where the extension should be active for changes to take immediate effect.

Development
===========

To modify or contribute to this extension, follow these steps:

- Update the ``manifest.json`` file for new permissions or background scripts.
- Modify ``popup.html``, ``popup.js``, or ``content.js`` as needed.
- Reload the extension through ``chrome://extensions/`` to apply changes.

License
=======

This project is licensed under the MIT License - see the LICENSE file for details.

