const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

export const validateEmail = (name, value) => {
 let hasError = false;
 let error = '';
 switch (name) {
  case 'email':
    if (!value) {
      hasError = true;
      error = `El ${name} es requerido`;
    } else if (!formatEmail.test(value)) {
      hasError = true;
      error = 'El email no es válido';
    } else{
      hasError = false;
      error = '';
    }
    break;

  case 'password':
    if (value?.trim === '') {
      hasError = true;
      error = `La ${name} es requerido`;
    }
    if (value?.length < minPasswordLength) {
      hasError = true;
      error = `La ${name} debe tener al menos ${minPasswordLength} caracteres`;
    }
    else{
      hasError = false;
      error = '';
    }

    default:
      break;
    
  } 
  return({ hasError, error });
}

export const UPDATED_FORM = 'UPDATED_FORM';

export const onPutChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateEmail(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if(key !== name && item.hasError){
      isFormValid = false;
      break;
    }
    else if (key === name && hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data:{
      name,
      value,
      hasError,
      error,
      isFormValid,
      touched:false,
    }
  });

}
  
export const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateEmail(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if(key !== name && item.hasError){
      isFormValid = false;
      break;
    }
    else if (key === name && hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data:{
      name,
      value,
      hasError,
      error,
      isFormValid,
      touched:true,
    }
  });

} 
