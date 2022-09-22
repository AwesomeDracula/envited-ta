import React from "react";
// import pathName
import { CREATE, EVENT, HOME_PAGE } from "../constants/routes.constants";

import { RoutesConfig } from "../interfaces/common.interfaces";
// import lazy loading components
export const HomePage = React.lazy(() => import("src/home/components/index"));
const Event = React.lazy(() => import("src/events/components/index"));
const CreateEvent = React.lazy(() => import("src/events/components/CreateEvent"));

export const ROUTES_CONFIG: RoutesConfig[] = [
  {
    pathName: HOME_PAGE,
    component: HomePage,
    routes: [],
  },
  {
    pathName: CREATE,
    component: CreateEvent,
    routes: [],
  },
  {
    pathName: EVENT,
    component: Event,
    routes: [],
  },
];
