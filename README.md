# wafs
The course repo for 'Web App From Scratch'

[Link to website](http://fennadewilde.nl/wafs/index.html)

## Research 

### 1. Images
The images are the main content of the webapp. It's a meme generator which generates memes (images). People who are blind could visit the webapp, but don't experience that much pleasure out of it. You could add a long description of how the image looks like, but I think that won't create the same "funny" effect. Memes are supposed to be funny. 

Because there is a title above every image, The images itself don't need an alt attribute. The title will already tell where the image is about. If I would add an alt attribute with the same text as the title the screenreader would speak out the same text twice. 

<b>Conclusion</b>

* Removed the alt attribute for better accessibility
* Website would not be as fun without images

### 2. Custom fonts

No icon fonts are used and there is a fallback font used. This font will show when the custom font can't load or when custom fonts are disabled. I tested it to disabled custom fonts with the google chrome extension [force fonts](https://chrome.google.com/webstore/detail/force-font/iidenkflofaiinggabfmdjbomolidnie). Works the same without custom fonts. With the extension you can replace the custom font with the desired system font like 'Arial'.

![Tested without custom font](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/customfonts.png "Tested without custom font")

<b>Conclusion</b>

* Website works fine without custom fonts.
* Don't use icon fonts.


### 3. Javascript

JavaScript should be enabled, because the whole site is based on an API. Turning off JavaScript wouldn't give any content unless the page is already loaded. You can still see all the pages. The solution could be to build the webapp in node.js. Call the API server side, handle and show the response through template engines. Then, the webapp should work without JavaScript. 

<b>Conclusion</b>

* Call the API server side so the webpage is available without JS.


### 4. Color

The webapp is really colorfull. To test if color blinds still see the contrast between the used colors, I used  google chrome extension Spectrum. The extension contains 9 different types of color blindness. Underneath you can see the website tested on all types.

* <b>Protanopia</b>: red-green color blindness

![Webapp seen with Protanopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor.png "Webapp seen with Protanopia")

* <b>Protanomaly</b>: weak red-green color blindness

![Webapp seen with Protanomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor2.png "Webapp seen with Protanomaly")

* <b>Deuteranopia</b>: green color blindness

![Webapp seen with Deuteranopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor3.png "Webapp seen with Deuteranopia")

* <b>Deuteranomaly</b>: weak green color blindess

![Webapp seen with Deuteranomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor4.png "Webapp seen with Deuteranomaly")

* <b>Tritanopia</b>: blue-Yellow Color Blindness

![Webapp seen with Tritanopia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor5.png "Webapp seen with Tritanopia")

* <b>Tritanomaly</b>: weak blue-Yellow Color Blindness

![Webapp seen with Tritanomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor6.png "Webapp seen with Tritanomaly")

* <b>Achromatopsia</b>: complete color blindness

![Webapp seen with Achromatopsia](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor7.png "Webapp seen with Achromatopsia")

* <b>Achromatomaly</b>: weak complete color blindness

![Webapp seen with Achromatomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor8.png "Webapp seen with Achromatomaly")

* <b>Low contrast</b>: computer with low contrast

![Webapp seen with Achromatomaly](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/testcolor9.png "Webapp seen with Achromatomaly")

<b>Conclusion</b>
* The contrast of the colors are still visible with all types of color blindness. Therefore, the used colors are appropriate for color blindness. 
 

### 5. Broadband internet

Tested in chrome with slow 3G. Loader should be there already, not added with JS. CSS and JS are not minified. The files are already pretty small. There is also feedback that the site is loading or if the connection is not working.

### 6. Cookies

The websites doesn't use cookies. Cookies are in this case not really needed, because you don't need any user data and the content changes everyday. The website is also quit small.

### 7. Local Storage

Doens't use local storage.

### 8. Mouse/Trackpad

Tabbing goed quit easily. It's just not really "pleasurable". Focus elements could use some custom styling. If the website gets more content/more complexity in the future, maybe place a skip to content button.


## Screenreader test
Tested with the screenreader of macOS. Tabs work fine, but focus styles can be more pleasurable.

![Screen reader](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/screenreader.png "Screen reader")

## Device lab testing
* Tested in device lab. Works well on mobile devices. Only JavaScript on kindle is not working.
![Device lab testing](https://github.com/fennadew/wafs/blob/browser_technologies/app/static/images/test2.png "Device lab testing")


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


