import Button from '../shared/ui/Button'
import Field from '../shared/ui/Field'
import Transports from '../entities/transport/ui/transports'
import './styles'

function App() {


  return (
    <>
      <Button
        option = {'grey'}
      >
        text
      </Button>
      <Field></Field>
      <Transports></Transports>
    </>
  )
}

export default App
