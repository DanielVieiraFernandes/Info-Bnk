import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./loginStack";
import { AuthStack } from "./authStack";
import { AuthContext } from "../context/auth";

export function Router() {

  const {user} = useContext(AuthContext)

  
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
}
