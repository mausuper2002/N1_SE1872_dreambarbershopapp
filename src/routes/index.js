import { HomePage } from "../pages/HomePage/HomePage";
import { ServicePage } from "../pages/ServicePage/ServicePage";
import { BookingPage } from "../pages/BookingPage/BookingPage";
const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/service",
    page: ServicePage,
  },
  {
    path: "/booking",
    page: BookingPage,
  },
];
