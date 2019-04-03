### This project has been deprecated. Please find more custom elements at https://github.com/allenhwkim/html-custom-elements

<a href="https://mymce.github.io" target="_blank"><img src="logo.png" alt="MCE" height="200"></a>

![image](https://user-images.githubusercontent.com/1437734/46240499-8fbebf00-c376-11e8-9c59-04f7a6b3469d.png) ![image](https://user-images.githubusercontent.com/1437734/46240506-a8c77000-c376-11e8-9e89-a410ce0563ff.png) ![image](https://user-images.githubusercontent.com/1437734/46240509-b54bc880-c376-11e8-98ea-52a708780d2f.png) ![image](https://user-images.githubusercontent.com/1437734/46240513-bf6dc700-c376-11e8-9f9d-2c70a7b22aa7.png)

## Materialized Custom Element 

1. Small and fast.
2. No depenancy on framework or library. Vanilla JS only.
3. Common-sense engineering; Element itself(not JS object) has properties and functions.
4. Minimal coding, easy to maintain. Take a look at [code](https://github.com/allenhwkim/mce/blob/master/src/app-bar/app-bar.js)

[DEMO](https://rawgit.com/allenhwkim/mce/master/dist/)

It follows specification of
[custom element](https:/developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)
and [material design](https:/material.io/guidelines/components/).

Articles
  * [Back To Element](https://medium.com/allenhwkim/back-to-element-c4aecf3c6b64)
  * [SPA Building with MCE](https://medium.com/allenhwkim/simple-spa-building-with-mce-f507e5f0236)

<img width="200" align="left" src="https://user-images.githubusercontent.com/1437734/34587997-b9bf1a96-f178-11e7-9e4e-5c813b1f7a24.png">
<img width="200" align="left" src="https://user-images.githubusercontent.com/1437734/34582267-58f40968-f161-11e7-8acc-c2a1406b1be2.png">
<img width="100" align="left" src="https://user-images.githubusercontent.com/1437734/34582650-a3336950-f162-11e7-9b48-874846a06458.png">
<img width="200" align="left" src="https://user-images.githubusercontent.com/1437734/34583532-21458bfe-f166-11e7-8291-0d0589dcb350.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582332-7fe489f8-f161-11e7-993f-c77a24b5f582.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582458-dcc71ae6-f161-11e7-8652-4897594a697b.png">
<img height="80" align="left" src="https://user-images.githubusercontent.com/1437734/34582487-f5c0e7e8-f161-11e7-8d3c-e3cbfecbb32d.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582497-04234a60-f162-11e7-8cb7-ca913c2fe416.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582519-17eb0812-f162-11e7-9f6f-9cce2de537ba.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582538-27e1e146-f162-11e7-8369-8c1eb0385de6.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582544-2ec5047mce-f162-11e7-9a6e-ac5032f009fc.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582547-353efc34-f162-11e7-98de-354f16092579.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582617-88a795d4-f162-11e7-944c-5ddc0913e0e4.png">
<img height="40" align="left" src="https://user-images.githubusercontent.com/1437734/34582452-d4dce9e6-f161-11e7-9130-70fe11636137.png">
<img height="40" align="" src="https://user-images.githubusercontent.com/1437734/34582297-6c07a668-f161-11e7-963f-7bd0eeb6cb89.png">

### Examples
#### mce-router
  You don't need Angular, React, or Vue to create a simple SPA with routing capability.
  [router example](https://mymce.github.io/mce-router.html)
   
#### mce-leaflet
  Do you want to show a map with marker and popup. 
  It's as easy as writing HTML with `<mce-leaflet>` tag.  
  [map example](https://mymce.github.io/mce-leaflet.html)
  [marker example](https://mymce.github.io/mce-marker.html)
    
#### mce-blocker
  Do you show a loading sign on a specific section. Use `mce-blocker` to show loading sign exactly overlayed on an element.
  [blocker example](https://mymce.github.io/mce-blocker.html) 

#### mce-inview
  Your page scrolls, and you don't want to load all elements that are not inviewport.
  [inview example](https://rawgit.com/allenhwkim/mce/master/dist/#inview)
   
#### mce-list-item
  You have list, and you want to click, navigate, select with keyboard/mouse.
  [list item example](https://rawgit.com/allenhwkim/mce/master/dist/#list-item)

## Installation
  
By simply adding the following `<script>` tag to your html, you are ready to go.

    <script defer src="https:/unpkg.com/mce"></script>

**Optionally**, and for better design, you can add Google Roboto font, Material Design Icons, and/or, Font-Awesome icons.

    <link rel="stylesheet" href="https:/fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900">
    <link rel="stylesheet" href="https:/fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/font-awesome@4.7.0/css/font-awesome.css">
    
## How To Use

Just use it in your html. No other step is required.

    <mce-text-field label="Simple"></mce-text-field>

## For Whom With Curiousity

    $ git clone  https://github.com/allenhwkim/mce.git
    $ cd mce
    $ npm i
    $ npm start # to see all components in development. mode

**For NodeJS users**, install `mce` package 

    npm install mce --save-dev
