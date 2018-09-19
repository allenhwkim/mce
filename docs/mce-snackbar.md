<a name="Snackbar"></a>

## Snackbar
Snackbars contain a single line of text directly related to the operation performed. 
They may contain a text action, but no icons.

[Material Design Spec](https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-specs)

### example
```
<mce-snackbar>Message has been processed.</mce-snackbar>
```

<iframe height='265' scrolling='no' title='mce template' src='//codepen.io/allenhwkim/embed/PEJKKo/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/PEJKKo/'>mce template</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### `mce-snackbar` attributes
 |name|value|description|
 |---|---|--|
 |bottom|number|distance from bottom in pixel. e.g. 30|

### `mce-snackbar` classes 
 |name|description|
 |---|---|
 |mce-visible| show this snackbar|


* [Snackbar](#Snackbar)
    * [.open(msg)](#Snackbar+open) ⇒ void
    * [.close()](#Snackbar+close) ⇒ void

<a name="Snackbar+open"></a>

### snackbar.open(msg) ⇒ void
show mce-snackbar by adding `mce-visible` class


| Param | Type | Description |
| --- | --- | --- |
| msg | string | message to show |

<a name="Snackbar+close"></a>

### snackbar.close() ⇒ void
close mce-snackbar by removing `mce-visible` class

