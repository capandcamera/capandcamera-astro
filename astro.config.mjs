export default {
    projectRoot: '.',
    public: './public/',
    dist: './dist/',
    src: './src/',
    pages: './src/pages/',
 buildOptions: {
    site: 'https://capandcamera.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
     hostname: 'localhost',  // The hostname to run the dev server on.
     port: 3000,             // The port to run the dev server on.
  },
  renderers: []

};
