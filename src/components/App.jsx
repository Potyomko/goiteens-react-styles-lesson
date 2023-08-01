import {Alert} from './Alert/Alert'
import {GlobalStyle} from '../Global.styled'

export const App = () => {
  return (
    <>
        <GlobalStyle/>
        <Alert type='error'/>
        <Alert type='success'/>
        <Alert type='warning'/>
    </>
  )
}
