# My personal portfolio page.
Started with the [Atlantic Theme by Zerostatic themes](https://github.com/zerostaticthemes/jekyll-atlantic-theme) then modified the design quite a bit for my portfolio needs. Then migrated the project into [Taylor Bryant's jekyll-starter-tailwind](https://github.com/taylorbryant/jekyll-starter-tailwind).

## Licenses
[jekyll-starter-tailwind | MIT](https://github.com/taylorbryant/jekyll-starter-tailwind/blob/master/LICENSE.md)

[jekyll-atlantic-theme](https://github.com/zerostaticthemes/jekyll-atlantic-theme#license)

## The below is the setup taken from the jekyll-starter-tailwind Readme (with some modification):
A starter kit for using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/) that includes:
* A barebones Jekyll starter theme
* A Gulpfile that does the following:

    * Compiles Tailwind
    * Strips out unused CSS using Tailwind's `purge` option
    * Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
    * Minifies your CSS
    * Compiles Jekyll
    * Runs [Browsersync](https://www.browsersync.io/) for local development

## Requirements
* [Bundler](http://bundler.io/) (2.4.2)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) (Use nvm to manage npm)
* [Ruby](https://www.ruby-lang.org/en/) (3.1.3. Use rbenv to manage ruby installs)

## Get started
* `nvm install` to install/select the correct node version from the .nvmrc file
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production
