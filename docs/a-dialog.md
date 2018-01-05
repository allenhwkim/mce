<a name="Dialog"></a>

## Dialog
[Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)
Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.

### example
```
<div>
  <a-button class="raised" onclick="openDialog('dialog-1')">Open A Dialog</a-button>
  <a-dialog id="dialog-1">
    <h3 class="title">Title</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <hr class="divider">
    <div class="actions">
      <a-button onclick="closeDialog('dialog-1')">cancel</a-button>
      <a-button onclick="closeDialog('dialog-1')">OK</a-button>
    </div>
  </a-dialog>
</div>
```

### `a-dialog` elememe style classes
 |name|description|
 |---|---|
 |visible|Indicates that the dialog is an open status


### Child element of `a-dialog` style classes
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

