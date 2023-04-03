// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  LoginContainer,
  Header,
  IputField,
  TextField,
  TextFields,
} from './styledComponents'

const PasswordValidator = () => {
  const [textInput, setInput] = useState('')

  const onChangePassword = event => {
    setInput(event.target.value)
  }

  return (
    <AppContainer>
      <LoginContainer>
        <Header>Password Validator</Header>
        <TextFields>Check how strong and secure is your password</TextFields>
        <IputField
          type="password"
          value={textInput}
          onChange={onChangePassword}
        />
        {textInput.length > 8 ? (
          ''
        ) : (
          <TextField>Your password must be at least 8 characters</TextField>
        )}
      </LoginContainer>
    </AppContainer>
  )
}

export default PasswordValidator
