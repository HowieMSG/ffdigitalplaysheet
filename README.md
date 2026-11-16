# Flag Football Playbook

A phone- and iPad-friendly play designer for flag football: draw formations, routes and pre-snap motion, animate plays, group them into playbooks, and filter by down & distance, red zone, trick plays and more. Show mode is built for walking the team through plays on a phone or iPad.

- **Team password** gates the site (players and parents use it to view plays).
- **Coach sign-in** (Firebase email/password) is required to create or change plays.
- Plays are stored in Firebase Firestore and update live on every device.

## One-time setup (≈10 minutes)

1. **Create a Firebase project** at <https://console.firebase.google.com> → *Add project* (Google Analytics not needed).
2. **Add a web app**: Project settings → *Your apps* → `</>` Web. Copy the `firebaseConfig` values into `firebase-config.js`.
3. **Create the database**: Build → *Firestore Database* → *Create database* → production mode → pick a US location.
4. **Paste the rules**: Firestore → *Rules* tab → replace everything with the contents of `firestore.rules` → *Publish*. Put your coach email in place of `howiepollard@gmail.com` (also in `COACH_EMAILS` in `firebase-config.js`).
5. **Turn on sign-in**: Build → *Authentication* → *Get started* → *Email/Password* → enable.
6. **Create your coach login**: Authentication → *Users* → *Add user* → your email and a password (this is separate from the team password).
7. **Allow the site's domain**: Authentication → *Settings* → *Authorized domains* → add `howiemsg.github.io`.

## Publishing on GitHub Pages

Repo → *Settings* → *Pages* → Source: *Deploy from a branch* → `main` / root → Save. The site appears at https://howiemsg.github.io/ffdigitalplaysheet/.

## About the team password

The team password keeps casual visitors out, but on a static site it isn't strong security: someone determined could read the plays straight from the database. Don't put anything private in the playbook. Edits are properly protected — only the coach accounts in `firestore.rules` can change plays.

To change the team password, replace `PW_HASH` in `index.html` with the SHA-256 of the new password (`echo -n 'newpassword' | shasum -a 256`).
