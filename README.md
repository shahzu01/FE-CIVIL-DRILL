# FE Civil Drill

FE Civil exam practice: 775 questions with worked solutions, wrong-answer explanations, FE Reference Handbook page references, figures, a tutor mode, mock exams and progress tracking.

It runs entirely in the browser and works **offline** once it has been opened one time. Nothing is sent to a server. Your progress is saved on each device separately.

## Put it on GitHub Pages (one time)

1. Upload every file in this folder (including the `fonts` folder) to the root of your repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick your branch (usually `main`) and the `/ (root)` folder, then click **Save**.
4. After a minute or two, the page shows your site's address, such as `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Install on iPhone or iPad

1. Open the site address in **Safari**.
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open it from the home screen icon. It runs full-screen and works without internet.

## Install on a PC

1. Open the site address in **Microsoft Edge** or **Google Chrome**.
2. Click the **Install** icon at the right end of the address bar (or open the browser menu and choose **Apps → Install this site as an app**).
3. It gets a desktop and Start-menu icon and works offline.

Alternative with no internet at all: download the folder and double-click `index.html`. It opens in your browser and works, but it won't install as an app.

## Updating

Replace `index.html` and `sw.js` in the repository with the new versions. Installed copies pick up the update the next time they are opened while online. Close the app and open it again if you don't see the change right away.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: questions, solutions, figures |
| `sw.js` | Service worker that saves the app for offline use |
| `manifest.webmanifest` | App name, colors and icons used when installing |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | App icons |
| `fonts/` | The app's fonts, stored locally so it looks right offline |
