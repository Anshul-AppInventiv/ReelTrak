export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  firstNameError: boolean;
  lastNameError: boolean;
  emailError: boolean;
  error: boolean;
  isChecked: boolean;
};

type ActionType =
  | {type: 'SET_INPUT'; field: string; value: string}
  | {type: 'SET_ERROR'; field: string; value: boolean}
  | {type: 'TOGGLE_CHECKBOX'};

export const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  firstNameError: false,
  lastNameError: false,
  emailError: false,
  error: false,
  isChecked: false,
};

export const formReducer = (
  state: FormState,
  action: ActionType,
): FormState => {
  switch (action.type) {
    case 'SET_INPUT':
      return {...state, [action.field]: action.value};
    case 'SET_ERROR':
      return {...state, [action.field]: action.value};
    case 'TOGGLE_CHECKBOX':
      return {...state, isChecked: !state.isChecked};
    default:
      return state;
  }
};
