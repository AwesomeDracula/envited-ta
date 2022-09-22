import React from "react";

export interface RoutesConfig {
  pathName: string;
  routes: RoutesConfig[];
  component: React.FC;
}
