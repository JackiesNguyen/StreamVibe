import { logoImg, menuIcon } from '@/assets'
import Image from './Image'
import { Sheet, SheetContent, SheetTrigger } from './CustomSheet'
import Navbar from './Navbar'

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='rounded-lg bg-black-15 p-2'>
          <Image src={menuIcon} alt='menuIcon' />
        </div>
      </SheetTrigger>
      <SheetContent className='bg-black-12'>
        <div className='mt-10'>
          <Image src={logoImg} alt='logoImg' className='mb-8 w-[116px] h-[35px]' />
          <Navbar />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
