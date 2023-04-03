// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const LoginContainer = styled.div`
  background-color: #475569;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.h1`
  font-weight: 'bold';
  font-family: 'Roboto';
  size: 30px;
  color: #ffffff;
`

export const IputField = styled.input`
  outline: none;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  width: 400px;
`
export const TextField = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  color: red;
`

export const TextFields = styled.p`
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
`
