import { bellIcon, logoImg, searchIcon } from '@/assets'
import Navbar from './Navbar'
import WrapperContainer from './WrapperContainer'
import Image from './Image'
import { Link } from 'react-router-dom'
import PATH from '@/constants/paths'
import MobileNavbar from './MobileNavbar'

const Header = () => {
  return (
    <header>
      <WrapperContainer className='flex items-center justify-between py-6 xl:py-[30px]'>
        <Link to={PATH.USER.HOME}>
          <Image
            src={logoImg}
            alt='logoImg'
            className='w-[116px] h-[35px] sm:w-[166px] sm:h-[50px] xl:w-[199px] xl:h-[60px]'
          />
        </Link>
        <div className='hidden md:block'>
          <Navbar />
        </div>
        <div className='hidden md:flex items-center gap-[14px] xl:gap-[30px]'>
          <Image src={searchIcon} alt='searchIcon' className='w-[24px] h-6 xl:w-[34px] xl:h-[34px] cursor-pointer' />
          <Image src={bellIcon} alt='bellIcon' className='w-[24px] h-6 xl:w-[34px] xl:h-[34px] cursor-pointer' />
        </div>
        <div className='md:hidden'>
          <MobileNavbar />
        </div>
      </WrapperContainer>
    </header>
  )
}

export default Header
