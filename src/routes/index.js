import Admin from "../pages/admin/Admin";
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
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/becolor",
    page: BecolorPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/homeservice",
    page: HomeService,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/teampage",
    page: TeamPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/contact",
    page: Contact,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/signin",
    page: SignIn,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/admin",
    page: Admin,
  },
];
