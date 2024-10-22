import { Helmet } from 'react-helmet'
import { Hero } from './_components'

const HomePage = () => {
  return (
    <>
      <Helmet title='Home' />
      <Hero />
    </>
  )
}

export default HomePage
