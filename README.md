# custom-elements
Custom Elements With Material Design

## Design Principle

  1. Standards-Only
  
     * Including W3C Draft Standard
     * Only HTML4/HTML5/ES5/ES6/ES7CSS2/CSS3
     * No Framework, Typescript
     * No Workaround (including Polyfills)

  2. Themable-CSS with variables
    * By changing theme variables, we can have different look-and-feel

[DEMO](https://rawgit.com/allenhwkim/custom-elements/master/examples/app-bar.html)
<hr/>
The below is notes for development
<hr/>
When use custom element w/o shadow DOM, there must be a way to prevent style bleeding.

tiny color
http://plnkr.co/edit/e5eYGKLrg9SUXiGSvAgZ?p=preview

## About Web Component

   - **Custom Elements v1**: allows authors to define their own custom tags 
     - [spec](https://w3c.github.io/webcomponents/spec/custom/)
     - [tutorial](https://developers.google.com/web/fundamentals/getting-started/primers/customelements))
     - [caniuse](http://caniuse.com/#feat=custom-elementsv1)

   - **HTML Imports**: a way to include and reuse HTML documents via other HTML documents 
     - [spec](https://w3c.github.io/webcomponents/spec/imports/)
     - [tutorial](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
     - [caniuse](http://caniuse.com/#feat=imports)
     
   - **Shadow DOM v1**: provides encapsulation by hiding DOM subtrees under shadow roots 
     - [spec](https://w3c.github.io/webcomponents/spec/shadow/)
     - [tutorial](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom)
     - [caniuse](http://caniuse.com/#feat=shadowdomv1)
   

https://plnkr.co/edit/WJ57Ep?p=preview

Custom Elements Example
* `<app-drawer>`  
   http://embed.plnkr.co/4Ac1H8I2NQMY1L35t74s/
* life cycle   
  http://plnkr.co/edit/Lgglfl?p=preview
* property to attribute  
  http://embed.plnkr.co/q6zdDp/
* Element-Defined Content  
  http://embed.plnkr.co/pjeAhU/
* Shadow DOM
   * Shadow DOM Basic  
     http://embed.plnkr.co/wABVOdU4cGnYdCR47DrH/
   * Shadow DOM with template  
     http://embed.plnkr.co/ZaPDz5/
   * Shadow DOM fancy-tab  
     http://embed.plnkr.co/rHUIW6/

* Shadow DOM Practice `<fancy-tabs>`
  1. Getting Started http://embed.plnkr.co/YkGwCb/
  2. Slot http://embed.plnkr.co/Reh8eq/
  3. Named Slot http://embed.plnkr.co/wIi9HE/
  4. Scoped Style http://embed.plnkr.co/OhnJ0Q/
  5. Scoped Style :host http://embed.plnkr.co/QOUNcE/

  


