import React from "react";
import { StatusBar } from "react-native";

import Stack from "./src/router/Stack";

console.disableYellowBox = true;

export default function acharepi() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <Stack />
    </React.Fragment>
  );
}
