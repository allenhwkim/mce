( function() {
  /**
   * Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.
   *
   * [Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)
   * 
   * ### example
   * ```
   * <div>
   *   <a-button class="raised" onclick="openDialog('dialog-1')">Open A Dialog</a-button>
   *   <a-dialog id="dialog-1">
   *     <h3 class="title">Title</h3>
   *     <div class="content">
   *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
   *       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   *     </div>
   *     <hr class="divider">
   *     <div class="actions">
   *       <a-button onclick="closeDialog('dialog-1')">cancel</a-button>
   *       <a-button onclick="closeDialog('dialog-1')">OK</a-button>
   *     </div>
   *   </a-dialog>
   * </div>
   * ```
   *
   * <p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   *
   * ### `a-dialog` elememe style classes
   *  |name|description|
   *  |---|---|
   *  |visible|Indicates that the dialog is an open status
   * 
   * 
   * ### Child element of `a-dialog` style classes
   *  |name|description|
   *  |---|---|
   *  |divider| Draw a line
   *  |title| Title section of the dialog
   *  |content| Content section of the dialog
   *  |actions| The container of action buttons
   * 
   */ 
  class Dialog extends HTMLElement {
    connectedCallback() {
      this.displayLevel = this.getAttribute('display-level') || 'root';
      this._regroupedOnce = this._regroupedOnce || false;
      !this._regroupedOnce && this._regroupElements();
      this._regroupedOnce = true;
      if (this.displayLevel === 'root' && !this.parentElement.isSameNode(document.body)) { //document-level dialog
        document.body.appendChild(this);
        this.querySelector('.page-blocker').style.position = 'fixed';
        this.querySelector('.container').style.position = 'fixed';
      }
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
      this.classList.add('visible');
    }

    /**
     * Closes the dialog
     */
    close() {
      (this.displayLevel === 'root')  && (document.body.style.overflow = '');
      this.classList.remove('visible');
    }
 
    _regroupElements() {
      let pageBlockerEl, containerEl;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.setAttribute('class', 'page-blocker');
      pageBlockerEl.addEventListener('click', () => {
        this.close();
      });
      this.appendChild(pageBlockerEl);

      containerEl = document.createElement('div');
      containerEl.setAttribute('class', 'container');
      this.appendChild(containerEl);

      Array.from(this.children).forEach(el => {
        if (!el.isSameNode(containerEl) && !el.isSameNode(pageBlockerEl)) {
          containerEl.appendChild(el)
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
      }
      if (data.title !== undefined) {
        titleEl = this.querySelector('.title') || appendEl('title');
        titleEl.innerHTML = data.title;
      }
      if (data.contents !== undefined) {
        contentEl = this.querySelector('.content') || appendEl('content');
        contentEl.innerHTML = data.contents;
      }
      if (data.actions !== undefined) {
        actionsEl = this.querySelector('.actions') || appendEl('actions');
        actionsEl.innerHTML = '';
        for (var key in data.actions) {
          let buttonEl = document.createElement('a-button');
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
  
  customElements.define('a-dialog', Dialog);
})();
