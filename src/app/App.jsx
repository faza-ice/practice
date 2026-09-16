import Button from '@/shared/ui/Button'
import Field from '@/shared/ui/Field'
import Transports from '@/entities/transport/ui/transports'
import Header from '@/widgets/header'
import Plate from '@/shared/ui/Plate'
import './styles'

function App() {


  return (
    <>
    <div>
      <Button
        option = {'grey'}
      >
        text
      </Button>
    </div>

    <div>
      <Field></Field>
    </div>

    <div>
      <Transports></Transports>
    </div>

    <div>
      <Header></Header>
    </div>
    <div>
      <Plate >преимущества</Plate>
    </div>
    </>
  )
}

export default App
