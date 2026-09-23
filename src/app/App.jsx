import Home from '@/pages/Home'
import Rates from '@/entities/rates'
import Category from '@/widgets/category'
import {getTransports} from '@/shared/api'
import './styles'

function App() {
  const ts = getTransports()
  console.log(ts)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
