const DefaultErrorsMap: Record<string, string> = {
  required: 'This field is required',
  minlength: 'This field should be longer than (n)',
  maxlength: 'This field should be shorter than (n)',
  blankSpaces: 'This field should not contain blank spaces',
  pattern: 'Does not match pattern'
}

const UsernameErrorsMap: Record<string, string> = {
  ...DefaultErrorsMap,
  required: 'Required',
  minlength: 'Should be longer than 3',
  maxlength: 'Should be shorter than 15',
  blankSpaces: 'Should not contain blank spaces',
}

const PasswordErrorsMap: Record<string, string> = {
  ...DefaultErrorsMap,
  required: 'Required',
  pattern: 'Password is too weak'
}

const RepeatPasswordErrorsMap: Record<string, string> = {
  ...DefaultErrorsMap,
  required: 'Required',
  notEqual: `Passwords don't match`
}

export const ErrorMaps = {
  DefaultErrorsMap,
  UsernameErrorsMap,
  PasswordErrorsMap,
  RepeatPasswordErrorsMap,
};
