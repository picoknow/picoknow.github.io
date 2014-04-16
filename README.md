---
layout: default
searchignore: true
---

picoknow.bitbucket.org
===========================

[![Build Status](https://travis-ci.org/picoknow/picoknow.github.io.svg?branch=master)](https://travis-ci.org/picoknow/picoknow.github.io)

- The website is at:
 - [picoknow.github.io](http://picoknow.github.io)
- The makers of this website are [isaacrg](https://github.com/isaacrg) and [ChilliByte](http://github.com/chillibyte).
- The uncompiled MD source is at [picoknow-jekyll](https://github.com/picoknow/picoknow.github.io).

## Notes on web development

The website was designed with a  _no_ use of javascript, or a similar scripting language, and all pages were processed by the Jekyll static site generator, albeit via the no-plugins github pages service.

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
