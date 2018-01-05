<a name="TextField"></a>

## TextField

* [TextField](#TextField)
    * [new TextField()](#new_TextField_new)
    * [.disabled](#TextField+disabled) ⇒
    * [.disabled](#TextField+disabled)
    * [.errorMessages](#TextField+errorMessages) ⇒

<a name="new_TextField_new"></a>

### new TextField()
[Material Design Spec](https://material.io/guidelines/components/text-fields.html#text-fields-layout)
Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search. Text fields contain the following elements; label, input text field, placeholder text, helper text, required field indicator, icon, and error messages.

###  Example
```
<a-text-field disabled
  icon="favorite"
  helper-text="this is helper text"
  label="this is label"
  maxlength -> word-counter
  minlength -> word-counter
  minlength-error="invalid text min. length"
  maxlength-error="invalid text max. length"
  optional="(optional)"
  pattern-error="invalid text pattern"
  pattern=""
  placeholder="this is hint text"
  prefix="$"
  readonly
  required="this field is required"
  suffix="dollars"></a-text-field>
```

### `a-text-field` Attributes 
 |name|value|description|
 |---|---|---|
 |disabled| |Disabled Status. No interaction is allowed with this status.
 |empty | |Indicating that the field is empty. When empty, helper text is shown. When not empty and errorneous, error message is shown.
 |invalid | |Indicating that the field is errorneous. With this status, error message is shown if given.
 |active| |Indicating the input field is focused and active by minimizing label and showing placeholder text.
 |dirty| |Indicating user has entered any input to this field. Error message is only displayed when it is dirty status.
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

 `a-text-field` passes all attributes to `input` field, which means all standard input attributes are acceptable,
 and it affects the actual input. Sometime this can cause some strange behaviour, 
 but it's up to user without blocking it. For example `type="range"` is not for text field, but still
 working without error.

<a name="TextField+disabled"></a>

### textField.disabled ⇒
**Returns**: disabled status  
<a name="TextField+disabled"></a>

### textField.disabled
set disabled status


| Param | Type | Description |
| --- | --- | --- |
| true | boolean | of false |

<a name="TextField+errorMessages"></a>

### textField.errorMessages ⇒
**Returns**: registered error messages  
