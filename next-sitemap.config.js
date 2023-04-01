module.exports = {
    siteUrl: 'https://marocactualites.vercel.app',
    generateRobotsTxt: false,
    exclude: ['/server-sitemap.xml','/login', '/stats','/submitarticle','/drafts','/modifyarticle','/editArticle',
'/Personnaliser','/Profile','/foryou','/Signup'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://marocactualites.vercel.app/server-sitemap.xml', // <==== Add here
      ],
    },
  }