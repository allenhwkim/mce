<a name="Dialog"></a>

## Dialog
Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.

[Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)

### example
```
<div>
  <mce-button class="mce-raised" onclick="openDialog('dialog-1')">Open A Dialog</mce-button>
  <mce-dialog id="dialog-1">
    <h3 class="mce-title">Title</h3>
    <div class="mce-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <hr class="mce-divider">
    <div class="mce-actions">
      <mce-button onclick="closeDialog('dialog-1')">cancel</mce-button>
      <mce-button onclick="closeDialog('dialog-1')">OK</mce-button>
    </div>
  </mce-dialog>
</div>
```

<iframe height='265' scrolling='no' title='rppxOe' src='//codepen.io/allenhwkim/embed/rppxOe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/rppxOe/'>rppxOe</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### `mce-dialog` elememe style classes
 |name|description|
 |---|---|
 |mce-visible|Indicates that the dialog is an open status


### Child element of `mce-dialog` style classes
 |name|description|
 |---|---|
 |mce-divider| Draw a line
 |mce-title| Title section of the dialog
 |mce-content| Content section of the dialog
 |mce-actions| The container of action buttons


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

