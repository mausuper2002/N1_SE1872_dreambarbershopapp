import BecolorPage from "../pages/BecolorPage/BecolorPage";
import BespokePage from "../pages/BespokePage/BespokePage";
import BookingPage from "../pages/BookingPage/BookingPage";
import Contact from "../pages/ContactPage/Contact";
import HomePage from "../pages/HomePage/HomePage";
import HomeService from "../pages/HomeService/HomeService";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import SignIn from "../pages/SignInPage/SignIn";
import TeamPage from "../pages/TeamPage/TeamPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/service",
    page: ServicePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/booking",
    page: BookingPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/bespoke",
    page: BespokePage,
  },
  {
    path: "/becolor",
    page: BecolorPage,
  },
  {
    path: "/homeservice",
    page: HomeService,
  },
  {
    path: "/teampage",
    page: TeamPage,
  },
  {
    path: "/contact",
    page: Contact,
  },
  {
    path: "/signin",
    page: SignIn,
  },
];
