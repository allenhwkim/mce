/**
 * Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)
 * 
 * ### example
 * ```
 * <div>
 *   <mce-button class="mce-raised" onclick="openDialog('dialog-1')">Open A Dialog</mce-button>
 *   <mce-dialog id="dialog-1">
 *     <h3 class="mce-title">Title</h3>
 *     <div class="mce-content">
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
 *       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *     </div>
 *     <hr class="mce-divider">
 *     <div class="mce-actions">
 *       <mce-button onclick="closeDialog('dialog-1')">cancel</mce-button>
 *       <mce-button onclick="closeDialog('dialog-1')">OK</mce-button>
 *     </div>
 *   </mce-dialog>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='rppxOe' src='//codepen.io/allenhwkim/embed/rppxOe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/rppxOe/'>rppxOe</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-dialog` elememe style classes
 *  |name|description|
 *  |---|---|
 *  |mce-visible|Indicates that the dialog is an open status
 * 
 * 
 * ### Child element of `mce-dialog` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-divider| Draw a line
 *  |mce-title| Title section of the dialog
 *  |mce-content| Content section of the dialog
 *  |mce-actions| The container of action buttons
 * 
 */ 
export class Dialog extends HTMLElement {
  connectedCallback() {
    this.displayLevel = this.getAttribute('display-level') || 'root';
    this._regroupedOnce = this._regroupedOnce || false;
    setTimeout(_ => {
      !this._regroupedOnce && this._regroupElements();
      this._regroupedOnce = true;
      if (this.displayLevel === 'root' && !this.parentElement.isSameNode(document.body)) { //document-level dialog
        document.body.appendChild(this);
        this.querySelector('.mce-page-blocker').style.position = 'fixed';
        this.querySelector('.mce-container').style.position = 'fixed';
      }
    });
  }
  
  /**
   * Opens te dialog with the given data
   *
   * @param {Object} data, options for this dialog
   *   title: Title of this dialog  
   *   content:  Contents of this dialog as in string format.  
   *   actions: Buttons for this dialog with callback function
   * @example 
   *   document.getElementById('my-dialog').open({
   *     title: 'Custim Title', 
   *     contents:'This is custom contents',
   *     actions: {'Custom Button': () => alert('My Button is clicked.')}
   *   });
   * @returns void
   */
  open(data) {
    //replace title, content, actions with data given
    data && this._updateContent(data);
    (this.displayLevel === 'root') && (document.body.style.overflow = 'hidden');
    this.classList.add('mce-visible');
  }

  /**
   * Closes the dialog
   */
  close() {
    (this.displayLevel === 'root')  && (document.body.style.overflow = '');
    this.classList.remove('mce-visible');
  }

  _regroupElements() {
    let pageBlockerEl, containerEl;
    pageBlockerEl = document.createElement('div');
    pageBlockerEl.classList.add('mce-page-blocker');
    pageBlockerEl.addEventListener('click', () => {
      this.close();
    });
    this.appendChild(pageBlockerEl);

    containerEl = document.createElement('div');
    containerEl.classList.add('mce-container');
    this.appendChild(containerEl);

    Array.from(this.children).forEach(el => {
      if (!el.isSameNode(containerEl) && !el.isSameNode(pageBlockerEl)) {
        containerEl.appendChild(el);
      }
    });
  }

  _updateContent(data) {
    let titleEl, contentEl, actionsEl;
    let appendEl = className  => {
      let el = document.createElement('div');
      el.classList.add(className);
      this.appendChild(el);
      return el;
    };
    if (data.title !== undefined) {
      titleEl = this.querySelector('.mce-title') || appendEl('mce-title');
      titleEl.innerHTML = data.title;
    }
    if (data.contents !== undefined) {
      contentEl = this.querySelector('.mce-content') || appendEl('mce-content');
      contentEl.innerHTML = data.contents;
    }
    if (data.actions !== undefined) {
      actionsEl = this.querySelector('.mce-actions') || appendEl('mce-actions');
      actionsEl.innerHTML = '';
      for (var key in data.actions) {
        let buttonEl = document.createElement('mce-button');
        buttonEl.innerHTML = key;
        buttonEl.addEventListener('click', _ => {
          data.actions[key]();
          this.close();
        });
        actionsEl.appendChild(buttonEl);
      }
    }
  }
}

customElements.define('mce-dialog', Dialog);
