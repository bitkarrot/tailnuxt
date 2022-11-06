# TailNuxt template

This is a Nuxt3 port of the [Tailnext](https://github.com/onwidget/tailnext) template. 

This was my first attempt to translate an existing template from react to vue, so there may be some errors. Pull requests are welcome. 

# Built from Scratch - Nuxt3 with tailwindcss

This repo was built from scratch. 

If you just want to use the Tailnuxt template, simply clone this repo and build. 

If you don't want to use this template but want to build Nuxt3 with Tailwindcss from scratch, here are the instructions. We used RC12 version of Nuxt3.

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

Then, do the following: 

- remove App.vue
- create pages directory
- add index.vue and your vue content accordingly.


# More Nuxt 3 Resources 

Links to components used in this template: 

- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)
- [@nuxt/image-edge](https://image.nuxtjs.org/)
- [Tabler Icons](https://tabler-icons.io/)


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
