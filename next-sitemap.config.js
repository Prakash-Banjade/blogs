/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false
  }