/**
 *  https://material.io/guidelines/components/text-fields.html#text-fields-principles
 *
 *  TODO: list attribute and <datalist> support for autocomplete
 * 
 *  root level status
 *    disabled / empty / invalid / active / dirty
 *
 *   attributes
 *     * disabled
 *     * icon="favorite"
 *     * label="this is label"
 *     * length-error="invalid text length"
 *     * maxlength -> word-counter
 *     * minlength -> word-counter
 *     * optional="(optional)"
 *     * pattern-error="invalid text pattern"
 *     * pattern=""
 *     * placeholder="this is hint text"
 *     * prefix="$"
 *     * readonly
 *     * required="this field is required"
 *     * suffix="dollars"
 *
 *  Example
 *
 * <a-text-field disabled
 *   icon="favorite"
 *   helper-text="this is helper text"
 *   label="this is label"
 *   maxlength -> word-counter
 *   minlength -> word-counter
 *   minlength-error="invalid text min. length"
 *   maxlength-error="invalid text max. length"
 *   optional="(optional)"
 *   pattern-error="invalid text pattern"
 *   pattern=""
 *   placeholder="this is hint text"
 *   prefix="$"
 *   readonly
 *   required="this field is required"
 *   suffix="dollars"></a-text-field>
 */

import {addStyleSheet} from '../util.js';

// dependenant on an-icon
( function() {
  var thisScript = document.currentScript;

  class TextField extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this, '../components/text-field/text-field.css'); //id, url

      this.id = 'a-text-field-'+Math.round(Math.random()*Math.pow(10,9));
      this._buildHTML();

      this.inputEl = this.querySelector('#'+this.id);
      this._addEventListeners();
    }

    get disabled() {
      return this.getAttribute('disabled') !== '';
    }

    set disabled(disabled) {
      disabled ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    get errorMessages() {
      let errorMessages = this.__cachedErrorMessages || {
        rangeUnderflow: this.getAttribute('min-error') || 'invalid min. value',
        rangeOverflow: this.getAttribute('max-error') || 'invalid max. value',
        stepMismatch: this.getAttribute('step-error') || 'invalid value(step)',
        tooShort:  this.getAttribute('minlength-error') || 'invalid min. length',
        tooLong: this.getAttribute('maxlength-error') || 'invalid max. length',
        patternMismatch: this.getAttribute('pattern-error') || 'invalid input text',
        valueMissing: this.getAttribute('required-error') || 'this field is requierd',
        typeMismatch: this.getAttribute('type-error') ||
          'invalid input for type, '+this.getAttribute('type'),
        customError: this.getAttribute('custom-error') || 'invaid input(custom error)',
        invalidError: this.getAttribute('invalid-error') || 'invaid input'
      }
      this.__cachedErrorMessages = errorMessages;
      return errorMessages;
    }

    _buildHTML() {
      let icon = this.getAttribute('icon') || '';
      let type = this.getAttribute('type') || 'text';
      let hintText = this.getAttribute('placeholder') || '';
      let helpetText = this.getAttribute('helper-text') || '';
      let label = this.getAttribute('label') || '';
      let prefix = this.getAttribute('prefix') || '';
      let suffix = this.getAttribute('suffix') || '';
      let optionalText = this.getAttribute('optional') || '';
      let helperText = this.getAttribute('helper-text') || '';
      let requiredText = this.getAttribute('required') !== null ? ' *' : '';

      let attrs = [];
      for (let i=0; i<this.attributes.length; i++) {
        let attr = this.attributes[i];
        (!attr.name.match(/-/)) && attrs.push(`${attr.name}="${attr.value}"`);
      }
      let attributes = attrs.join(' ');

      let html = `
        <an-icon class="icon">${icon}</an-icon>
        <div class="container">
          <label for="${this.id}" style="">${label}${optionalText}${requiredText}</label>
          <div class="input-wrapper">
            <div class="prefix">${prefix}</div>
            <input class="input" type="${type}" id="${this.id}" ${attributes} />
            <div class="suffix">${suffix}</div>
          </div>
          <hr />
          <div class="helper-text">${helperText}</div>
          <div class="error-messages"></div>
        </div>
      `;
      this.insertAdjacentHTML('beforeend', html);
    }

    _getErrors() {
      let errors = {};
      for (var key in this.inputEl.validity) {
        if (key !== 'valid' && this.inputEl.validity[key]) {
          errors[key] = this.errorMessages[key];
        }
      }
      if (this.getAttribute('maxlength')) {
        let tooLong = this.inputEl.value.length > parseInt(this.getAttribute('maxLength'));
        tooLong && (errors.tooLong = this.errorMessages.tooLong);
      }
      return errors;
    }

    _addEventListeners() {
      let setStatus = () => {
        let empty  = !this.inputEl.value;
        let error = Object.values(this._getErrors())[0];
        let errMsgEl = this.querySelector('.error-messages');
        let dirty = this.getAttribute('dirty') !== null;

        empty ? this.setAttribute('empty', '')   : this.removeAttribute('empty');
        if (dirty && error) {
          this.setAttribute('invalid', ''); 
          errMsgEl.innerHTML = error;
        } else {
          this.removeAttribute('invalid')
        }
      }

      setStatus();

      this.addEventListener('click', event => {
        this.setAttribute('active', '');
        this.inputEl.focus();
      });

      this.inputEl.addEventListener('blur', event => {
        this.removeAttribute('active');
      });

      this.inputEl.addEventListener('change', event => {
        this.setAttribute('dirty', '');
        setStatus();
      });
    }
  }
  
  customElements.define('a-text-field', TextField);
})();
