import {addStyleSheet} from '../util.js';
( function() {
  var thisScript = document.currentScript;

  class Dialog extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet('a-dialog', '../components/dialog/dialog.css'); //id, url
      this._regroupElements();
    }
    
    open(data) {
      //replace title, content, actions with data given
      data && this._updateContent(data);

      // move to document-level for z-indexing to work
      this.originalPos = {parent: this.parentElement, nextSibling: this.nextElementSibling};
      document.body.appendChild(this);
      document.body.style.overflow = 'hidden';
      this.setAttribute('visible', '');
    }

    close() {
      // move back to the original position
      this.originalPos.parent.insertBefore(this, this.originalPos.nextSibling);
      document.body.style.overflow = '';
      this.removeAttribute('visible');
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
        if (el.tagName !== 'STYLE' && !el.isSameNode(containerEl) && !el.isSameNode(pageBlockerEl)) {
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
        console.log(1, this.querySelector('.title'), this.innerHTML)
        titleEl = this.querySelector('.title') || appendEl('title');
        titleEl.innerHTML = data.title;
      }
      if (data.contents !== undefined) {
        console.log(2, this.querySelector('.content'), this.innerHTML)
        contentEl = this.querySelector('.content') || appendEl('content');
        contentEl.innerHTML = data.contents;
      }
      if (data.actions !== undefined) {
        console.log(3, this.querySelector('.actions'), this.innerHTML)
        actionsEl = this.querySelector('.actions') || appendEl('actions');
        actionsEl.innerHTML = '';
        for (var key in data.actions) {
          let buttonEl = document.createElement('button');
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