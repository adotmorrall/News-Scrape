// Script to scrape files

// Makes HTTP request for HTML page
var axios = require('axios');
// Parses HTML and helps find elements
var cheerio = require('cheerio');

// Making a request via Axios
axios.get('https://github.blog/category/product/').then(function (response) {

    // Scraping GitHub website
    var $ = cheerio.load(response.data);

    // Empty array to save article info
    var results = [];

    // Find and loop through the class below
    $('h4.post-item__title.f3.mb-4').each(function (i, element) {

        // Grabbing the post's title
        var title = $(element)
            .children('a')
            .text();

        // Grabbing the post's link
        var link = $(element)
            .find('a')
            .attr('href');

        // Grabbing the post's summary
        var summary = $(element)
            .parent()
            .children('.post-item__excerpt.mb-3')
            .children('p')
            .text();

        // Use regular expression to clean up the title
        if (title) {
            var titleClean = title.replace(/(\n\t\t\t\t)/gm, " ").trim();
        }

        // Pushing scraped article data to the empty array
        results.push({
            title: titleClean,
            link: link,
            summary: summary
        });
    });
    console.log(results);
});