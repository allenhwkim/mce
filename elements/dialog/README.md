# Dialog
[Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)
Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.

```
<script defer src="https://unpkg.com/@custom-element/dialog"></script>
```

### For npm users
```
$ npm install @custom-element/dialog

import '@custom-element/dialog'; // import and use it
```

## Examples
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