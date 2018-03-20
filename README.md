# wafs
The course repo for 'Web App From Scratch'

[Link to website](http://fennadewilde.nl/wafs/index.html)

## Research 

### Images

Because I load the images in a template, I forgot about the alt attribute. I should use the title as an alt attribute for accesibility. There should also be a default background color for the logo title. (used a background clip)

### Custom fonts

No icon fonts are used and there is a fallback font used. Works the same without custom fonts.

### Javascript

JavaScript should be enabled, because the whole site is based on an API. Turning off JavaScript wouldn't give any content unless the page is already loaded. You can still see all the pages.

### Color<

The colors have enough contrast. Tested with the google chrome extension Spectrum to test on all different types of color blindness. The website looks good with every type.
In black and white everything is readable too.

* <b>Protanopia</b>

![Webapp seen with Protanopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor.png "Webapp seen with Protanopia")

* <b>Protanomaly</b>

![Webapp seen with Protanomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor2.png "Webapp seen with Protanomaly")

* <b>Deuteranopia</b>

![Webapp seen with Deuteranopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor3.png "Webapp seen with Deuteranopia")

* <b>Deuteranomaly</b>

![Webapp seen with Deuteranomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor4.png "Webapp seen with Deuteranomaly")

* <b>Tritanopia</b>

![Webapp seen with Tritanopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor5.png "Webapp seen with Tritanopia")

* <b>Tritanomaly</b>

![Webapp seen with Tritanomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor6.png "Webapp seen with Tritanomaly")

* <b>Achromatopsia</b>

![Webapp seen with Achromatopsia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor7.png "Webapp seen with Achromatopsia")

* <b>Achromatomaly</b>

![Webapp seen with Achromatomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor8.png "Webapp seen with Achromatomaly")

* <b>Low-Contrast</b>

![Webapp seen with Low-Contrast](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor9.png "Webapp seen with Low-Contrast")

### Broadband internet

Tested in chrome with slow 3G. Loader should be there already, not added with JS. CSS and JS are not minified. The files are already pretty small. There is also feedback that the site is loading or if the connection is not working.

### Cookies

The websites doesn't use cookies. Cookies are in this case not really needed, because you don't need any user data and the content changes everyday. The website is also quit small.

### Local Storage

Doens't use local storage.

### Mouse/Trackpad

Tabbing goed quit easily. It's just not really "pleasurable". Focus elements could use some custom styling.

## Accessibility research
* If the website gets more content/more complexity in the future, maybe place a skip to content button.
* Heading is well stuctured.
* Tested with the screenreader of macOS. Tabs work fine, but focus styles can be more pleasurable.

## Screenreader test
![Screen reader](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/screenreader.png "Screen reader")

## Device lab testing
* Tested in device lab. Works well on mobile devices. Only JavaScript on kindle is not working.
![Device lab 1](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test1.JPG "SDevice lab 1")
![Device lab 2](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test2.JPG "SDevice lab 2")
![Device lab 3](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test3.JPG "SDevice lab 3")


## Changes
* Used transpiler Babel and Package manager Webpack to transpile JS so it works on older browsers as well.
* Added alt attributes on the images

## Future
* Request the API server side so it can still work without JS.
* More "pleasurable" focus styles.
* Minify CSS and JS.
* Use local storage with API's.
* Make different pages with links when JS is not working

## The SPA (Single Page Application)
My SPA is called "daily meme's". As the name suggests, it is a website that shows 12 new memes every day. It's a small website with the list of the meme's of that day and the links to the detail page of every meme. The detail page shows the meme and the title of the meme.

![Preview of meme](https://github.com/fennadew/wafs/blob/master/app/static/images/cat.png "Preview of meme")


## License
MIT Licence - Fenna de Wilde 2018


