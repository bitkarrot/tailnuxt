# Install instructions for nuxt3 with tailwindcss

```
npx nuxi init nuxt-app
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
yarn add -D @nuxtjs/tailwindcss
yarn dev
```

Edit `nuxt.config.ts` to be: 

```// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      buildModules: ['@nuxtjs/tailwindcss']
})
```

- remove App.vue
- create pages directory
- add index.vue and vue content 

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
