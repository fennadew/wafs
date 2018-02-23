# wafs
The course repo for 'Web App From Scratch'

[Link to website](https://fennadew.github.io/wafs/app/index.html)


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

## Wishlist
- Remove & add elements to the DOM instead of toggle them with display none in CSS
- More content on the website
- More transitions and effects
- Search meme's


## Actor diagram
![Actor diagram](https://github.com/fennadew/wafs/blob/master/app/static/images/actor-diagram.svg "Actor diagram")


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


