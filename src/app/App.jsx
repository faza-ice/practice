import Home from '@/pages/home'
import Rates from '@/entities/rates-card'
import Program from '@/entities/program'
import RatesList from '@/widgets/rates-list'
import RatesPage from '@/pages/rates-page'
import ProgramList from '@/widgets/program-list'
import ProgramPage from '@/pages/program-page'
import Coach from '@/entities/coach'
import CoachList from '@/widgets/coach-list'
import CoachPage from '@/pages/coach-page'
import Comment from '@/entities/comment'
import CommentPage from '@/pages/comment-page'
import Contact from '@/widgets/contact'
import Select from '@/shared/ui/select'
import './styles'

function App() {
  const opt = [{value:"val", label:'lab'},{value:"val2", label:'lab2'}]

  return (
    <>
      <Select options={opt}></Select>
    </>
  )
}

export default App
