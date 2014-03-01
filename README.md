picoknow.bitbucket.org
===========================

[ ![Codeship Status for picoknow/picoknow-jekyll](https://www.codeship.io/projects/b289c740-74b5-0131-8960-72dc6f10bff2/status?branch=master)](https://www.codeship.io/projects/13782)

- The website is at:
 - [picoknow.bitbucket.org](http://picoknow.bitbucket.org)
 - [picoknow.github.io](http://picoknow.github.io)
- The makers of this website are [isaacreidguest](http://bitbucket.org/isaacreidguest) and [ChilliByte](http://bitbucket.org/chillibyte).
- The uncompiled MD source is at [picoknow-jekyll](http://bitbucket.org/picoknow/picoknow-jekyll).
- The auto-compiled HTML source is at [picoknow.bitbucket.org](http://bitbucket.org/picoknow/picoknow.bitbucket.org). 

## Notes on web development

The website was designed with a  _no_ use of javascript, or a similar scripting language, and all pages were processed by the Jekyll static site generator, albeit via the no-plugins github pages service.

### Automated Jekyll? How?

I have used [Codeship](https://www.codeship.io) to automate the use of jekyll, via a series of shell commands. This means that I can provide a simple deployment, once setup.

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