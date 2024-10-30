import NAV_LINKS from "@/constants/navigation";
import PATH from "@/constants/path";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "flex items-center gap-[30px] px-[40px] py-[10px] bg-black-06 rounded-xl border-4 border-black-12 shadow-navbar",
        {
          "pl-[10px]": location.pathname === PATH.USER.HOME,
        },
        {
          "pr-[10px]": location.pathname === PATH.USER.SUBSCRIPTIONS,
        }
      )}
    >
      {NAV_LINKS.map((nav) => {
        return (
          <NavLink
            key={uuidv4()}
            to={nav.link}
            className={({ isActive }) =>
              cn("text-grey-75 text-lg not-italic font-normal leading-[27px]", {
                "px-6 py-[14px] bg-black-10 rounded-[8px]": isActive,
              })
            }
          >
            {nav.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
