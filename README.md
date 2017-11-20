# @custom-element
[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) Implementation With Material Design

## Design Principle

The browser gives us an excellent tool for structuring web applications. It's called HTML. `@custom-element` makes maximum use of HTML.

1. Small and fast(Less than 6KB gzipped).
2. No depenancy on framework or library. Vanilla JS only.
3. Simple Engineering(Element itself(not JS object) has properties and functions).
4. Synchronous reaction to attribute and DOM changes.
5. Easy color settings using a theme, a collection of `:root` variables.
     
[DEMO](https://custom-element.github.io)

## Installation

Custom Element has many useful ready-to-go packages available on npm. You can use it individually, or collectively using `core` elements

All are available through https://unpkg.com/@custom-element. For example,

  * Text field, https://unpkg.com/@custom-elements/text-field
  * Core, https://unpkg.com/@custom-elements/core
  * and 20+ more custom element packages
  
By simply adding the following `<script>` tag to you html, you are ready to use custom elements.

    <script defer src="https://unpkg.com/@custom-element/core/dist/ce-core.min.js"></script>

Although it's not mandatory, but for better use of custom element, it's recommended to use Google Roboto font and Material Design Icons by adding the following to `<head>` tag.

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

## Usage

Just use it in your html. No other step is required.

    <a-text-field label="Simple"></a-text-field>
    
    [Try it on plunker](http://embed.plnkr.co/fPJyo4/)

## Elements

  * [App Bar](https://custom-element.github.io/#app-bar)
  * [Bottom Nav Bar](https://custom-element.github.io/#bottom-nav-bar)
  * [Button](https://custom-element.github.io/#button)
  * [Card](https://custom-element.github.io/#card)
  * [Checkbox](https://custom-element.github.io/#checkbox)
  * [Chip](https://custom-element.github.io/#chip)
  * [Dialog](https://custom-element.github.io/#dialog)
  * [Expansion Panel](https://custom-element.github.io/#expansion-panel)
  * [Grid List](https://custom-element.github.io/#grid-list)
  * [Icon](https://custom-element.github.io/#icon)
  * [List](https://custom-element.github.io/#list)
  * [Menu](https://custom-element.github.io/#menu)
  * [Nav Drawer](https://custom-element.github.io/#nav-drawer)
  * [Nav Item](https://custom-element.github.io/#nav-item)
  * [Radio Button](https://custom-element.github.io/#radio-button)
  * [Refresh Indicator](https://custom-element.github.io/#refresh-indicator)
  * [Search](https://custom-element.github.io/#search)
  * [Switch](https://custom-element.github.io/#switch)
  * [Tabs](https://custom-element.github.io/#tabs)
  * [Text Field](https://custom-element.github.io/#text-field)
  * [Tooltip](https://custom-element.github.io/#tooltip)
  * TODO

    * Right Drawer(layer 15)
    * Snackbar(layer 6)
    * Submenu(layer 9+)
    * Datetime Picker(layer 24) with variations of date, month, time, week, and datetime
    * Text Field with masks e.g. (416)222-3333 1,234,567
    * Test Field with autocomplete(e.g., awesomeplete)

