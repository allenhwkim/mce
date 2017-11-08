# custom-elements
Custom Elements With Material Design

## Design Principle

  1. Use Standard Only
     * No dependancies.
     
  2. Think Search Engine 
     * Let users create h1,h2,h3 tags.
     * Let users build readable contents.
    
  3. Think Themable   
     * Use global variables for a theme.

  
[DEMO](https://rawgit.com/allenhwkim/custom-elements/master/examples/demo.html)

##Status Table

```
+........+.......+.....................................................................................
| Status | Layer | Name
+........+.......+....................................................................................
| MOBILE |  4    | App Bar
| MOBILE |  8    | Menu + nav-item
| MOBILE | 16    | Nav drawer + nav-item
| MOBILE |  0    | NavItem
| MOBILE |  8    | Bottom navigation bar
| MOBILE |  2    | Card (resting elevation)
| MOBILE |  8    | Card (when picked up)
| MOBILE |  2    | Raised button (resting elevation)
| MOBILE |  6    | Floating action button (FAB - resting elevation)
| MOBILE | 12    | Floating action button (FAB - pressed)
| MOBILE | 24    | Dialog
| MOBILE |  3    | Refresh indicator
| MOBILE |  0    | Tabs
| MOBILE |  0    | Text Field
| MOBILE |  0    | Chip
| MOBILE |  25   |  tooltip
| MOBILE |  0    | icon
| MOBILE |  0    | radio
| MOBILE |  0    | checkbox
| MOBILE |  0    | switch
| MOBILE |  0    | expansion panel
| MOBILE |  0    | Grid List
| MOBILE |  0    | List
|        |       |
| FUTURE | 15    | Right drawer
| FUTURE |  6    | Snackbar
| FUTURE |  9    | Sub menu (+1dp for each sub menu)
| FUTURE |       | steppers
| FUTURE |       | input type=number with masks. e.g. (416)222-3333 1,234,567
| FUTURE | 24    | Picker
| FUTURE |       | ColorPicker input type=color
| FUTURE |       | FilePicker  input type=file (with two numbers)
| FUTURE |       | DateTimePicker[date]     input type=date  onchange="formatValue()" like chrome
| FUTURE |       | DateTimePicker[month]    input type=month
| FUTURE |       | DateTimePicker[time]     input type=time
| FUTURE |       | DateTimePicker[week]     input type=week
| FUTURE |       | DateTimePicker[datetime] input type=datetime-local
| FUTURE |       | slider
|        |       |
| ?????? | 16    | Modal bottom Sheet
| ?????? |  2    | Quick entry / Search bar (resting elevation)
| ?????? |  3    | Quick entry / Search bar (scrolled state)
+........+.......+...................................................................................
```
<hr/>
The below is notes for development
<hr/>
When use custom element w/o shadow DOM, there must be a way to prevent style bleeding.

FlexBox Examples
http://plnkr.co/edit/lxx7QCwZbeZyyUtwiCym?p=preview

tiny color
http://plnkr.co/edit/e5eYGKLrg9SUXiGSvAgZ?p=preview

## About Web Component

   - **Custom Elements v1**: allows authors to define their own custom tags 
     - [spec](https://w3c.github.io/webcomponents/spec/custom/)
     - [tutorial](https://developers.google.com/web/fundamentals/getting-started/primers/customelements))
     - [caniuse](http://caniuse.com/#feat=custom-elementsv1)

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

* Minifiers
  https://github.com/mishoo/UglifyJS2/tree/harmony
  https://github.com/jakubpawlowicz/clean-css
