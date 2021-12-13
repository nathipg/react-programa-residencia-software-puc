const validate = (value, rule, payload = null) => {
  switch(rule) {
    case 'required':
      return value.trim().length > 0;
    case 'email':
      return value.indexOf('@') !== -1;
    case 'url':
      return value.indexOf('http://') !== -1 || value.indexOf('https://') !== -1;
    case 'available_username':
      if(payload && payload.length > 0) {
        return payload.filter(u => u.username === value).length === 0;
      }

      return true;
    default:
      throw Error('Invalid validation rule');
  }
};

const updateFormFieldValue = (formState, field, changes) => {
  const updatedField = {
    ...formState.fields[field],
    ...changes
  };
  const updatedFields = {
    ...formState.fields,
    [field]: updatedField,
  };
  const updatedState = {
    ...formState,
    fields: updatedFields,
  };
  return updatedState;
};

export const changeInputHandler = (prevState, action) => {
  const field = prevState.fields[action.field];
  let value = action.value;
  const validations = field.validation;
  let fieldOk = true;
  let updatedState = prevState;

  if(field.accept && field.accept === 'currency') {
    value = value.replaceAll(',', '.');
    value = value.replace(/[^0-9.]+/, '');
    const matchDots = [...value.matchAll(/[.]/g)];

    if(matchDots.length > 1) {
      value = value.substring(0, value.length - 1);
    }
  }

  for(const validation of validations) {
    const isValid = validate(value, validation.rule, action.payload);
    if(!isValid) {
      fieldOk = false;

      updatedState = updateFormFieldValue(updatedState, action.field, {
        valid: false,
        errorMsg: validation.msg,
      });

      break;
    }
  }

  if(fieldOk) {
    updatedState = updateFormFieldValue(updatedState, action.field, {
      valid: true,
      errorMsg: '',
    });
  }

  let formOk = true;
  for(const key in updatedState.fields) {
    if(!updatedState.fields[key].valid) {
      formOk = false;
      break;
    }
  }

  updatedState = {
    ...updatedState,
    isValid: formOk,
  };

  return updateFormFieldValue(updatedState, action.field, {
    value,
  });
};

export const blurInputHandler = (prevState, action) => {
  const field = prevState.fields[action.field];
  let value = field.value;
  const validations = field.validation;
  let updatedState = prevState;
  let fieldOk = true;

  if(field.accept && field.accept === 'currency') {
    value = Number(value).toFixed(2);

    updatedState = updateFormFieldValue(updatedState, action.field, {
      value,
    });
  }

  for(const validation of validations) {
    const isValid = validate(value, validation.rule, action.payload);
    if(!isValid) {
      fieldOk = false;

      updatedState = updateFormFieldValue(updatedState, action.field, {
        valid: false,
        errorMsg: validation.msg,
      });

      break;
    }
  }

  if(fieldOk) {
    updatedState = updateFormFieldValue(updatedState, action.field, {
      valid: true,
      errorMsg: '',
    });
  }

  let formOk = true;
  for(const key in updatedState.fields) {
    if(!updatedState.fields[key].valid) {
      formOk = false;
      break;
    }
  }

  updatedState = {
    ...updatedState,
    isValid: formOk,
  };

  return updatedState;
};

export const focusInputHandler = (prevState, action) => {
  return updateFormFieldValue(prevState, action.field, {
    touched: true,
  });
};