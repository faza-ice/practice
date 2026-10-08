import {Home} from '@/pages/home'
import {Rates} from '@/entities/rates-card'
import {Program} from '@/entities/program'
import {RatesList} from '@/features/rates-list'
import {RatesPage} from '@/pages/rates-page'
import {ProgramList} from '@/features/program-list'
import {ProgramPage} from '@/pages/program-page'
import {Coach} from '@/entities/coach'
import {CoachList} from '@/widgets/coach-list'
import {CoachPage} from '@/pages/coach-page'
import {Comment} from '@/entities/comment'
import {CommentPage} from '@/pages/comment-page'
import {Contact} from '@/widgets/contact'
import Select from '@/shared/ui/select'
import {AddEntry} from '@/features/add-entry'
import {ContactPage} from '@/pages/contact-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/rates',
      element: <RatesPage />,
    },
    {
      path: '/programs',
      element: <ProgramPage />,
    },{
      path: '/coachs',
      element: <CoachPage />,
    },{
      path: '/comments',
      element: <CommentPage />,
    },
    {
      path: '/contacts',
      element: <ContactPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
