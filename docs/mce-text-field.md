<a name="TextField"></a>

## TextField
Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search. Text fields contain the following elements; label, input text field, placeholder text, helper text, required field indicator, icon, and error messages.

[Material Design Spec](https://material.io/guidelines/components/text-fields.html#text-fields-layout)

###  Example
```
<mce-text-field disabled multi-line
  icon="favorite"
  helper-text="this is helper text"
  label="this is label"
  maxlength="100"
  minlength="10"
  minlength-error="invalid text min. length"
  maxlength-error="invalid text max. length"
  optional="(optional)"
  pattern-error="invalid text pattern"
  pattern="[a-z]+"
  placeholder="this is hint text"
  prefix="$"
  readonly
  required="this field is required"
  suffix="dollars"></mce-text-field>
```

<p data-height="600" data-theme-id="32189" data-slug-hash="BJJjwe" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-text-field` Attributes 
 |name|value|description|
 |---|---|---|
 |disabled| |Disabled Status. No interaction is allowed with this status.
 |multi-line| | Allows multi-line input
 |icon| text |Icon name that will be located on the left-side. e.g. credit_card
 |label| text |Label text that will be displayed when not active, and minized when active.
 |optional| text |Text to be appended at the lable indicating it is optional. Default. "(optional)"
 |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
 |prefix| text|Read-only input helper to be displayed at the beginning of input field. e.g., '$'
 |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
 |required-error| text |Error message when 'required' is given with no value. e.g., 'Fill out the column'. Default. 'This field is required'
 |min-error| text | Error message when 'min' is given but not valid. Default. 'invalid min. value''
 |max-error| text  |Error message when 'max' is given but not valid. Default. 'invalid max. value''
 |minlength-error| text |Error message when 'minlength' is given but not valid. Default. 'invalid min. length''
 |maxlength-error| text  |Error message when 'maxlength' is given but not valid. Default. 'invalid max. length''
 |pattern-error| text |Error message when 'pattern' is given with regular expression but not valid. Default. 'invalid input text'
 |type-error| text |Error message when 'type' is given but not. Default. 'invalid input for type <type>'

 `mce-text-field` passes all attributes to `input` field, which means all standard input attributes are acceptable,
 and it affects the actual input. Sometime this can cause some strange behaviour, 
 but it's up to user without blocking it. For example `type="range"` is not for text field, but still
 working without error.
 
### `mce-text-field` Classes
 |name|description|
 |---|---|
 |mce-empty | Indicating that the field is empty. When empty, helper text is shown. When not empty and errorneous, error message is shown.
 |mce-invalid | Indicating that the field is errorneous. With this status, error message is shown if given.
 |mce-active| Indicating the input field is focused and active by minimizing label and showing placeholder text.
 |mce-dirty| Indicating user has entered any input to this field. Error message is only displayed when it is dirty status.


* [TextField](#TextField)
    * [.disabled](#TextField+disabled)
    * [.disabled](#TextField+disabled) ⇒ void
    * [.errorMessages](#TextField+errorMessages) ⇒ Object

<a name="TextField+disabled"></a>

### textField.disabled
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| disabled | boolean | disabled status |

<a name="TextField+disabled"></a>

### textField.disabled ⇒ void
set disabled status


| Param | Type | Description |
| --- | --- | --- |
| true | boolean | of false |

<a name="TextField+errorMessages"></a>

### textField.errorMessages ⇒ Object
**Returns**: Object - registered error messages. e.g., <pre>
 {
   rangeUnderflow: 'invalid min.value',
   rangeOverflow: 'invalid max.value',
   stepMismatch: 'invalid value(step)',
   tooShort:  'invalid min. length',
   tooLong: 'invalid max. length',
   patternMismatch: 'invalid input text',
   valueMissing: 'this field is requierd',
   typeMismatch:  'invalid input for type email',
   customError: 'invaid input(custom error)',
   invalidError: 'invaid input'
 } </pre>  
