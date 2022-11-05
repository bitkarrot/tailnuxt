// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      buildModules: [
            '@nuxtjs/tailwindcss',
            '@nuxt/image-edge',
            '@nuxtjs/color-mode',
      ],
      css: ['@/assets/base.css'],
      colorMode: {    
            preference: 'dark', // default value of $colorMode.preference    
            fallback: 'light', // fallback value if not system preference found  
            hid: 'nuxt-color-mode-script',    
            globalName: '__NUXT_COLOR_MODE__',    
            componentName: 'ColorScheme',    
            classPrefix: '',   
            classSuffix: '-mode',    
            storageKey: 'nuxt-color-mode' 
 }
})
