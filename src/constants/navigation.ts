import PATH from "./path";

const NAV_LINKS = [
  {
    title: "Home",
    link: PATH.USER.HOME,
  },
  {
    title: "Movies & Shows",
    link: PATH.USER.MOVIES_SHOWS,
  },
  {
    title: "Support",
    link: PATH.USER.SUPPORT,
  },
  {
    title: "Subscriptions",
    link: PATH.USER.SUBSCRIPTIONS,
  },
] as const;

export default NAV_LINKS;
