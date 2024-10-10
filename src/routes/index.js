import BookingPage from "../pages/BookingPage/BookingPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ServicePage from "../pages/ServicePage/ServicePage";

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
];
