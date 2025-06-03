# Express Hello World App for Netlify

A simple Express.js application that displays a "Hello World" message, configured for deployment on Netlify.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## Deployment to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Log in to Netlify and click "New site from Git"

3. Choose your repository and configure the build settings:
   - Build command: `npm install`
   - Publish directory: `public`
   - Functions directory: `functions`

4. Click "Deploy site"

## API Endpoints

- `GET /`: Returns a JSON response with a "Hello World" message 