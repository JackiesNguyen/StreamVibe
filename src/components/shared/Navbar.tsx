import NAV_LINKS from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[40px] py-[10px] bg-black-06 rounded-xl border-4 border-black-12 shadow-navbar">
      {NAV_LINKS.map((nav) => (
        <NavLink
          key={uuidv4()}
          to={nav.link}
          className={({ isActive }) =>
            cn(
              "text-grey-75 text-lg font-normal leading-[27px] px-4 py-[14px] rounded-[8px]",
              { "bg-black-10": isActive }
            )
          }
        >
          {nav.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
