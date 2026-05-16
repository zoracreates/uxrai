const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

const { HtmlBasePlugin } = require("@11ty/eleventy");

/*** 
RESPONSIVE IMAGES

works with IMAGE SHORTCODE which is configured below

Usage with copyright and caption
{% image "./src/images/path", "alt", date | getYear, "caption" %}

 Usage with caption but no  copyright
 {% image "./src/images/path", "alt", """, "caption" %}

Usage with no caption
 {% image "./src/images/path", "alt" %}

***/

const Image = require('@11ty/eleventy-img');
const path = require("path");

async function imageShortcode(src, alt, cryear = false, caption = false, sizes = '(min-width: 1024px) 100vw, 50vw') {

    let metadata = await Image(src, {
        widths: [600, 720, 900, 1500],
        formats: [null],
        urlPath: '/images/optimized',
        outputDir: './public/images/optimized',
        filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src)
            const basename = path.basename(src, extension)
            let dir = path.dirname(src);
            dir = dir.replace('.\/src\/images\/', '');
            dir = dir.replace('.\/src\/images', '');
            dir = dir.replace(/\//g, '_');
            const name = `${dir}_${basename}`
            return `${name}-${width}w.${format}`
        }
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    // Throw an error on missing alt in `imageAttributes` (alt='' works okay)
    const imageHTML = Image.generateHTML(metadata, imageAttributes);

    if (cryear) {
        if (caption) {
            caption = `${caption} <br>`
        }
        else {
            caption = ""
        }
        return `<figure> ${imageHTML} <figcaption>${caption}&copy; Zoraida Cabrera-Mieles  ${cryear} </figcaption></figure>`
    } else if (caption) {
        return `<figure> ${imageHTML} <figcaption>${caption}</figcaption></figure>`
    } else {
        return imageHTML;
    }
    
}

/***  ELEVENTY CONFIG ****/
module.exports = function (eleventyConfig) {

    /*WATCH SASS*/
    eleventyConfig.addWatchTarget('./src/sass/');
   
   
    /* PLUGINS */
    // HTML Base Plugin helps normalize links to host site on GH Pages
    eleventyConfig.addPlugin(HtmlBasePlugin);

    /* 
    PASS THROUGH
    Set directories to pass through to the dist folder
    */
    eleventyConfig.addPassthroughCopy('./src/images/social/');
    eleventyConfig.addPassthroughCopy('./src/static/icons/');
    eleventyConfig.addPassthroughCopy('./src/images/background');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');

    /* IMAGE SHORTCODE */
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);


    /* 
    DATE FILTERS
    Universal filters (Adds to Liquid, Nunjucks, and Handlebars)
    */

    // formatDate filter - displays date in MONTH DY, YYYY 
    eleventyConfig.addFilter('formatDate', function (date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        date = new Date(date)
        let monthNumber = date.getMonth();
        let month = months[monthNumber];
        let day = date.getDate() + 1;
        let year = date.getFullYear();
        let formatedDate = `${month} ${day}, ${year}`

        return formatedDate
    });

    // getYear - displays year YYYY
    eleventyConfig.addFilter('getYear', function (date) {
        date = new Date(date)
        return  date.getFullYear();
    });


    /*COLLECTIONS */

    // Returns a collection of Analysis posts in reverse date order
    eleventyConfig.addCollection('analysis', collection => {
         return sortByDisplayOrder(collection.getFilteredByGlob('./src/analysis/*.md'));
    });

    return {
        // markdown files, data files, and HTML files should be processed by Nunjucks
        // set output and input folders
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public'
        },
    };
};





