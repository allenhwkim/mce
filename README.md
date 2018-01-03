# mce
Material Designed Custom Elements 

1. Small and fast(Less than 6KB gzipped).
2. No depenancy on framework or library. Vanilla JS only.
3. Common-sense engineering; Element itself(not JS object) has properties and functions.
4. Synchronous reaction by element and its attributes changes.
5. Easy theme settings by using a collection of `:root` variables.

It follows specification of 
[custom element](https:/developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)
and [material design](https:/material.io/guidelines/components/).

### NEW! a-router
Do you want an element react to the url change dynamically? `<a-router>` does what you want.

### Upcomming! map element `<a-leaflet>`
You are going to be able to implement a fully working map with just an element, `<a-leaflet>`. 
    
## Installation
  
By simply adding the following `<script>` tag to your html, you are ready to go.

    <script defer src="https:/unpkg.com/mce"></script>

**Optionally**, and for better design, you can add Google Roboto font, Material Design Icons, and/or, Font-Awesome icons.

    <link rel="stylesheet" href="https:/fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900">
    <link rel="stylesheet" href="https:/fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/font-awesome@4.7.0/css/font-awesome.css">
    
## How To Use

Just use it in your html. No other step is required.

    <a-text-field label="Simple"></a-text-field>
    
[Try it on plunker](http://embed.plnkr.co/fPJyo4/)

<!--
  * TODO

    * Right Drawer(layer 15)
    * Snackbar(layer 6)
    * Submenu(layer 9+)
    * Datetime Picker(layer 24) with variations of date, month, time, week, and datetime
    * Text Field with masks e.g. (416)222-3333 1,234,567
    * Test Field with autocomplete(e.g., awesomeplete)
-->

