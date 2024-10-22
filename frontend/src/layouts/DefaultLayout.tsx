import { Footer, Header } from '@/components/shared'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className='flex flex-col bg-black-08'>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
