import { headerLinks } from '@/constants/navLinks'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Navbar = () => {
  return (
    <ul
      className='flex items-center gap-[30px] rounded-[10px] xl:rounded-xl border-[3px]
     xl:border-4 border-black-12 bg-black-06 shadow-primary px-[30px] xl:px-10 py-5 xl:py-6'
    >
      {headerLinks.map((link) => {
        return (
          <li key={uuidv4()}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                cn('font-normal text-grey-75 text-sm not-italic leading-[21px] xl:text-lg xl:leading-[27px]', {
                  'bg-black-10 border border-black-10 rounded-lg text-white px-4 py-3 xl:py-[14px] xl:px-6': isActive
                })
              }
            >
              {link.title}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
