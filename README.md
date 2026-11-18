# personal-website

A static site built with [Astro](https://astro.build) and hosted on Netlify. There is no server, so pages load instantly.

## Adding photos and projects

**From the browser (works on your phone):** go to `https://<your-domain>/admin/`, sign in with GitHub, and add a journal entry or a project. Saving commits to GitHub, and Netlify rebuilds the site in about a minute.

**From your laptop:** each entry is a folder.

```
src/content/journal/<name>/index.md      + the photo
src/content/projects/<name>/index.md     + the images
```

Copy an existing folder, change the text and images, and push. iPhone `.heic` photos are converted to `.jpg` automatically at build time. All images are resized and compressed during the build, so upload full-size originals.

## Running locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Admin sign-in setup (one time)

The admin page uses [Sveltia CMS](https://github.com/sveltia/sveltia-cms). For the "Sign In with GitHub" button:

1. On GitHub, go to Settings → Developer settings → OAuth Apps → New OAuth App. Set the homepage URL to your site and the callback URL to `https://api.netlify.com/auth/done`.
2. In Netlify, open the site, then go to Project configuration → Access & security → OAuth → Install provider → GitHub. Paste the client ID and secret.

Without this, you can still use "Sign In Using Access Token" with a GitHub fine-grained token that has Contents read/write access to this repo.
