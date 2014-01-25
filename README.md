americano-project.github.io
===========================

![Codeship Logo](https://www.codeship.io/projects/acc1a0d0-6817-0131-8783-2a60fea31685/status?branch=master)

The website is at [americano-project.github.io](http://americano-project.github.io).
Main developer for this website is [isaacrg](http://github.com/isaacrg).

## Notes on web development
The website was designed with a  _no_ use of javascript, or a similar scripting language, and all pages were processed by the Jekyll static site generator, albeit via the no-plugins github pages service.

### Why No JS?
JS has been avoided because it serves no function for this site, for which users would benefit from. javascript is frequently used unnecessarily, especially involving the use of JQuery. **Forget JQuery, code JS properly.** _And only use JS when absolutely necessary. (Or in a web app...)_

### Why not dynamic?
The site is less dependent on server speed, with a static site. This site is made for the fastest delivery possible. Okay?

## Notes on adding...

### ...blog posts
Boilerplate with:

    ---
    layout: post
    title:  Post title
    short:  A short description (optional, but do try to fill in)
    user:   Ya github username  (optional, shows you are author)
    ---
    My post content, in markdown.

_Maybe you want to edit with [Stackedit](https://stackedit.io "Stackedit - online markdown editor")_
### ...pages
Boilerplate with:

    ---
    layout: default
    title:  Post title
    short:  A short description (optional, but do try to fill in)
    ---
    My page content, in markdown or html.

_Maybe you want to edit with [Stackedit](https://stackedit.io "Stackedit - online markdown editor")_