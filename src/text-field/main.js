( function() {
  /**
   * @description
   * [Material Design Spec](https://material.io/guidelines/components/text-fields.html#text-fields-layout)
   * Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search. Text fields contain the following elements; label, input text field, placeholder text, helper text, required field indicator, icon, and error messages.
   *
   * ###  Example
   * ```
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
   * ```
   * 
   * ### `a-text-field` Attributes 
   *  |name|value|description|
   *  |---|---|---|
   *  |disabled| |Disabled Status. No interaction is allowed with this status.
   *  |empty | |Indicating that the field is empty. When empty, helper text is shown. When not empty and errorneous, error message is shown.
   *  |invalid | |Indicating that the field is errorneous. With this status, error message is shown if given.
   *  |active| |Indicating the input field is focused and active by minimizing label and showing placeholder text.
   *  |dirty| |Indicating user has entered any input to this field. Error message is only displayed when it is dirty status.
   *  |icon| text |Icon name that will be located on the left-side. e.g. credit_card
   *  |label| text |Label text that will be displayed when not active, and minized when active.
   *  |optional| text |Text to be appended at the lable indicating it is optional. Default. "(optional)"
   *  |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
   *  |prefix| text|Read-only input helper to be displayed at the beginning of input field. e.g., '$'
   *  |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
   *  |required-error| text |Error message when 'required' is given with no value. e.g., 'Fill out the column'. Default. 'This field is required'
   *  |min-error| text | Error message when 'min' is given but not valid. Default. 'invalid min. value''
   *  |max-error| text  |Error message when 'max' is given but not valid. Default. 'invalid max. value''
   *  |minlength-error| text |Error message when 'minlength' is given but not valid. Default. 'invalid min. length''
   *  |maxlength-error| text  |Error message when 'maxlength' is given but not valid. Default. 'invalid max. length''
   *  |pattern-error| text |Error message when 'pattern' is given with regular expression but not valid. Default. 'invalid input text'
   *  |type-error| text |Error message when 'type' is given but not. Default. 'invalid input for type <type>'
   * 
   *  `a-text-field` passes all attributes to `input` field, which means all standard input attributes are acceptable,
   *  and it affects the actual input. Sometime this can cause some strange behaviour, 
   *  but it's up to user without blocking it. For example `type="range"` is not for text field, but still
   *  working without error.
   */
  class TextField extends HTMLElement {
    connectedCallback() {
      this.id = 'a-text-field-'+Math.round(Math.random()*Math.pow(10,9));
      this._buildHTML();

      this.inputEl = this.querySelector('#'+this.id);
      this._addEventListeners();
    }

    /**
     * @returns disabled status
     */
    get disabled() {
      return this.getAttribute('disabled') !== '';
    }

    /**
     * set disabled status
     * @param {boolean} true of false
     */
    set disabled(disabled) {
      disabled ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    /**
     * @returns registered error messages
     */
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
      let multiLine = this.getAttribute('multi-line') !== null ? true : false;

      let attrs = [];
      for (let i=0; i<this.attributes.length; i++) {
        let attr = this.attributes[i];
        (!attr.name.match(/-/)) && attrs.push(`${attr.name}="${attr.value}"`);
      }
      let attributes = attrs.join(' ');
      let inputWrapperHTML = multiLine ? 
        `<textarea class="input" id="${this.id}" ${attributes}>${this.getAttribute('value') || ''}</textarea>`:
        `<div class="prefix">${prefix}</div>\n
         <input class="input" type="${type}" id="${this.id}" ${attributes} />\n
         <div class="suffix">${suffix}</div>\n`;

      let html = `
        <an-icon class="icon">${icon}</an-icon>
        <div class="container">
          <label for="${this.id}" style="">${label}${optionalText}${requiredText}</label>
          <div class="input-wrapper">
            ${inputWrapperHTML}
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
        let dirty = this.classList.contains('dirty');

        empty ? this.classList.add('empty') : this.classList.remove('empty');
        if (dirty && error) {
          this.classList.add('invalid'); 
          errMsgEl.innerHTML = error;
        } else {
          this.classList.remove('invalid')
        }
      }

      setStatus();

      this.addEventListener('click', event => {
        this.classList.add('active');
        this.inputEl.focus();
      });

      this.inputEl.addEventListener('blur', event => {
        this.classList.remove('active');
      });

      this.inputEl.addEventListener('change', event => {
        this.classList.add('dirty');
        setStatus();
      });

      if (this.querySelector('textarea')) { // if multiline, autoresize the input height
        this.inputEl.closest('.container').style.transition = 'none';
        this.inputEl.addEventListener('input', this._autoResizeTextarea.bind(this) );
      }
    }

    _autoResizeTextarea(event){
      let scrollHeight = this.inputEl.scrollHeight;
      this.inputEl.style.height = scrollHeight + 'px';
      this.inputEl.closest('.container').style.height = scrollHeight + 60 + 'px';
    }
  }
  
  customElements.define('a-text-field', TextField);
})();
