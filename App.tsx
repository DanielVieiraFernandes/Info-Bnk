import { AuthProvider } from "./src/app/context/auth";
import { Router } from "./src/app/routes/router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black
} from "@expo-google-fonts/poppins";


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black
  })
  
  if(!fontsLoaded){
    return null;
  }


  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
