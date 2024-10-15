import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";
import { AuthContext, AuthContextType } from "../context/auth";

export function Router() {

  const {user} = useContext<AuthContextType>(AuthContext)

  
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
}
