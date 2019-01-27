// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\ilyafefelov\\Dropbox\\Code\\strapi-heroku\\good-ua\\web-client\\src\\pages\\index.js")),
  "component---src-pages-posts-1-js": preferDefault(require("C:\\Users\\ilyafefelov\\Dropbox\\Code\\strapi-heroku\\good-ua\\web-client\\src\\pages\\posts.1.js")),
  "component---src-pages-posts-js": preferDefault(require("C:\\Users\\ilyafefelov\\Dropbox\\Code\\strapi-heroku\\good-ua\\web-client\\src\\pages\\posts.js")),
  "component---src-pages-test-js": preferDefault(require("C:\\Users\\ilyafefelov\\Dropbox\\Code\\strapi-heroku\\good-ua\\web-client\\src\\pages\\test.js"))
}

