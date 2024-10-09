import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import PATH from '@/constants/paths'
import { HomePage, MoviesShowPage, SupportPage, SubscriptionsPage } from '@/pages'
import NextTopLoader from 'nextjs-toploader'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={PATH.USER.HOME} element={<HomePage />} />
          <Route path={PATH.USER.MOVIES_SHOWS_PAGE} element={<MoviesShowPage />} />
          <Route path={PATH.USER.SUPPORT_PAGE} element={<SupportPage />} />
          <Route path={PATH.USER.SUBSCRIPTIONS_PAGE} element={<SubscriptionsPage />} />
        </Route>
      </Routes>
      <NextTopLoader showSpinner={false} />
    </div>
  )
}

export default App
