import React from "react";
import { Container } from "./style";
import { renderRoutes } from "react-router-config";
function Album(props) {
  return <Container>{renderRoutes(props.route.routes)}</Container>;
}

export default Album;
