'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots".replace('bots', 'odds');
var newUrl = url.slice(0,5)+ ':' + url.slice(5);



console.log(newUrl);