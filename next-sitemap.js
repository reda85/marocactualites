module.exports = {
    siteUrl: 'https://marocactualites.com',
    generateRobotsTxt: false,
    exclude: ['/server-sitemap.xml','/login', '/stats','/submitarticle','/drafts','/modifyarticle','/editArticle',
'/Personnaliser','/Profile','/foryou','/Signup'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://marocactualites.com/server-sitemap.xml', // <==== Add here
      ],
    },
  }