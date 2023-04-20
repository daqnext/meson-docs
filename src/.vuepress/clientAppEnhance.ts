import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus),
  router.beforeEach((to) => {
    if (typeof _paq !== "undefined") {
      if (to.path) {
        _paq.push(["trackPageView", to.fullPath])
      }
    }
  })  
})
