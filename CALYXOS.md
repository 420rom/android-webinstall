This is the 420rom version of android-webinstall, modified for use with 420rom.

Changes from upstream android-webinstall:

* Modified `.env`
* Modified `src/config.js`
* Modified `src/core/devices.js`
* Replaced `public/releases/index.json` (via update-releases script)
* Modified `public/index.html` to remove request for icons via CDN, saved icon CSS and fonts to `public`.

Scripts:

* `yarn run update-releases`: This will grab the latest list of factory images and update webinstall's `releases/index.json` file.

