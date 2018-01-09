<a name="Dialog"></a>

## Dialog
Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.

[Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)

### example
```
<div>
  <mce-button class="raised" onclick="openDialog('dialog-1')">Open A Dialog</mce-button>
  <mce-dialog id="dialog-1">
    <h3 class="title">Title</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <hr class="divider">
    <div class="actions">
      <mce-button onclick="closeDialog('dialog-1')">cancel</mce-button>
      <mce-button onclick="closeDialog('dialog-1')">OK</mce-button>
    </div>
  </mce-dialog>
</div>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-dialog` elememe style classes
 |name|description|
 |---|---|
 |visible|Indicates that the dialog is an open status


### Child element of `mce-dialog` style classes
 |name|description|
 |---|---|
 |divider| Draw a line
 |title| Title section of the dialog
 |content| Content section of the dialog
 |actions| The container of action buttons


* [Dialog](#Dialog)
    * [.open(data,)](#Dialog+open) ⇒
    * [.close()](#Dialog+close)

<a name="Dialog+open"></a>

### dialog.open(data,) ⇒
Opens te dialog with the given data


| Param | Type | Description |
| --- | --- | --- |
| data, | Object | options for this dialog   title: Title of this dialog     content:  Contents of this dialog as in string format.     actions: Buttons for this dialog with callback function |

**Returns**: void  
**Example**  
```js
document.getElementById('my-dialog').open({
    title: 'Custim Title', 
    contents:'This is custom contents',
    actions: {'Custom Button': () => alert('My Button is clicked.')}
  });
```
<a name="Dialog+close"></a>

### dialog.close()
Closes the dialog

