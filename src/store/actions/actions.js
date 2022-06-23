export const addCustomer = (
  id,
  name,
  address,
  paymentMethod,
  cardNumber,
  cardExpire,
  cardCVV
) => {
  return {
    type: "AddCustomer",
    payload: {
      id,
      name,
      address,
      paymentMethod,
      cardNumber,
      cardExpire,
      cardCVV,
    },
  };
};

export const editCustomer = (
  id,
  name,
  address,
  paymentMethod,
  cardNumber,
  cardExpire,
  cardCVV
) => {
  return {
    type: "EditCustomer",
    payload: {
      id,
      name,
      address,
      paymentMethod,
      cardNumber,
      cardExpire,
      cardCVV,
    },
  };
};

export const deleteCustomer = (id) => {
  return {
    type: "DeleteCustomer",
    payload: {
      id,
    },
  };
};

export const changeStep = (newStep) => {
  return {
    type: "changeStep",
    payload: {
      step: newStep,
    },
  };
};

export const changeCurrentPayMethod = (newMethod) => {
  return {
    type: "changeCurrentPayMethod",
    payload: {
      payMethod: newMethod,
    },
  };
};

export const changeDialogState = (newValue) => {
  return {
    type: 'ChangeDialogState',
    payload: {
      newState: newValue
    }
  }
}