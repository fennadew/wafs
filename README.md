# wafs
The course repo for 'Web App From Scratch'

[Link to website](http://fennadewilde.nl/wafs/app/index.html)

## Research Progressive Enhancement features

<b>Images</b>

Because I load the images in a template, I forgot about the alt attribute. I should use the title as an alt attribute for accesibility. There should also be a default background color for the logo title. (used a background clip)

<b>Custom fonts</b>

No icon fonts are used and there is a fallback font used. Works the same without custom fonts.

<b>Javascript</b>

JavaScript should be enabled, because the whole site is based on an API. Turning off JavaScript wouldn't give any content unless the page is already loaded. You can still see all the pages.

<b>Color</b>

The colors have enough contrast. Tested with the google chrome extension Spectrum to test on all different types of color blindness. The website looks good with every type.
In black and white everything is readable too.

<b>Broadband internet</b>

CSS and JS are not minified. The files are already pretty small. There is also feedback that the site is loading or if the connection is not working.

<b>Cookies</b>

The websites doesn't use cookies. Cookies are in this case not really needed, because you don't need any user data and the content changes everyday. The website is also quit small.

<b>Local Storage</b>

Doens't use local storage.

<b>Mouse/Trackpad</b>

Tabbing goed quit easily. It's just not really "pleasurable". Focus elements could use some custom styling.

## Accessibility research
* Images need to have an alt attribute.
* If the website gets more content/more complexity in the future, maybe place a skip to content button.
* Heading is well stuctured.
* Tested with the google chrome extension Spectrum to test on all different types of color blindness. The website looks good with every type.
* Tested with the screenreader of macOS. Tabs work fine, but focus styles can be more pleasurable.
![Screen reader](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/screenreader.png "Screen reader")
* Tested in device lab. Works well on mobile devices. Only JavaScript on kindle is not working.
![Device lab 1](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test1.jpg "SDevice lab 1")
![Device lab 2](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test2.jpg "SDevice lab 2")
![Device lab 3](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test3.jpg "SDevice lab 3")



## Future
* Request the API server side so it can still work without JS.
* More "pleasurable" focus styles.
* Minify CSS and JS.
* Use local storage with API's.
* Use a JS transpiler like Babel so older browsers can read the JS as well.


## The SPA (Single Page Application)
My SPA is called "daily meme's". As the name suggests, it is a website that shows 12 new memes every day. It's a small website with the list of the meme's of that day and the links to the detail page of every meme. The detail page shows the meme and the title of the meme.

![Preview of meme](https://github.com/fennadew/wafs/blob/master/app/static/images/cat.png "Preview of meme")

## The API 
I am using the [Meme Generator API](http://version1.api.memegenerator.net/). I call the most populair memes by the method Generators_Select_ByPopular. This returns the most populair memes. The API has different parameters explained on the website.
- <b>days (optional)</b> The time period for which to filter the result set. ([days] == null) for all time.
- <b>sessionKey</b> (optional) A logged in user session key. Use MgUser_Login to get a session key.
- <b>pageIndex</b>	Page index of the requested result set. Defaults to 0 if not specified.
- <b>pageSize</b>	Page size of the requested result set. Defaults to 12 if not specified.

And as last you need a APIkey.

I used the default for pageSize and have a variable for the pageIndex based on the day of the week. I did this so everyday of the week there are new meme's to choice from. This makes the user want to go back to the SPA everyday!


## Principles
- use strict mode
- Write in ES6
- Write in Object-oriented programming 
- Don't use var
- Use const and let
- Write functions in arrow functions, except methods
- Don't repeat yourself
- Write code comments
- Don't use semicolons

## Wishlist
- Remove & add elements to the DOM instead of toggle them with display none in CSS
- More content on the website
- More transitions and effects
- Search meme's
- Modules


## Actor diagram
![Actor diagram](https://github.com/fennadew/wafs/blob/master/app/static/images/actor-diagram.svg "Actor diagram")

## Flow diagram
![Flow diagram](https://github.com/fennadew/wafs/blob/master/app/static/images/flow-diagram.svg "Floq diagram")

## Advantages and disadvantages of JavaScript libraries/frameworks
 ### Advantages
  - Costs less time.
  - Is behind a whole community where you can make things yourself.
  - Gives you stable structure of code and features.
  - Faster and easier learning curve.
  - Good quality code.

 
 ### Disadvantages
 - Sometimes you do not need a framework.
 - Frameworks can be somewhat heavier.
 - Code is updated quickly so you have to convert it.
 - Popularity quickly switches so you often have to change the framework.
 - Debugging can be more difficult.
 

Bronnen:
1. [Noupe](https://www.noupe.com/development/javascript-frameworks-94897.html)
2. [Quora](https://www.quora.com/What-are-the-pros-and-cons-of-JavaScript-frameworks)

## Advantages and disadvantages of client-side single page web apps
 ### Advantages
 - Faster.
 - Most elements only need to be load once.
 - The data can be cached locally. This way the data can also be retrieved offline.
 
 
  ### Disadvantages
 - Only working with JavaScript.
 - Less safe than normal applications. XSS makes it easier to be attacked. 

 
Bronnen:
1. [Medium](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
2. [Tweakers](https://gathering.tweakers.net/forum/list_messages/1613325)
3. [Stackoverflow](https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages)

## Code reviews
### Week 1
1. [Sam](https://github.com/Senmetsu/wafs/pull/1)
2. [Cas](https://github.com/Casburggraaf/wafs/pull/2)

### Week 2
1. [Mo](https://github.com/moniac/wafs/pull/6)
2. [Mees](https://github.com/meesrutten/wafs/pull/3)


## Dependencies
### Images
[Rainbow](https://img00.deviantart.net/a956/i/2012/222/5/5/hot_pink_to_yellow_by_ohsnapjenny-d5an2b7.jpg)

### libraries 
[Routie](http://projects.jga.me/routie/)

[Transparency](https://github.com/leonidas/transparency)

### API
[Meme Generator API](http://version1.api.memegenerator.net/)

## License
MIT Licence - Fenna de Wilde 2018


