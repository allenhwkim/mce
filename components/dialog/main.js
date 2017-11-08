import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

//dependant on a-button
( function() {

  class Dialog extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      this._regroupElements();
    }
    
    open(data) {
      //replace title, content, actions with data given
      data && this._updateContent(data);

      // move to document-level for z-indexing to work
      this.originalPos = {parent: this.parentElement, nextSibling: this.nextElementSibling};
      document.body.appendChild(this);
      document.body.style.overflow = 'hidden';
      this.classList.add('visible');
    }

    close() {
      // move back to the original position
      this.originalPos.parent.insertBefore(this, this.originalPos.nextSibling);
      document.body.style.overflow = '';
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
