import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AnimatedSplash from "./lib/AnimatedSplash";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      <AnimatedSplash
        logoWidht={150}
        logoHeight={150}
        isLoaded={isLoaded}
        backgroundColor={"#262626"}
        logoImage={require("./assets/logo.png")}
      >
        <MainNavigator />
      </AnimatedSplash>
    </>
  );
};

export default App;