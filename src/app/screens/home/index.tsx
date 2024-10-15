import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { MyButton } from "../../components/MyButton";
import { styles } from "./styles";
import { theme } from "../../../theme";

export function HomeScreen() {
  const [userCredentials, setUser] =
    useState<FirebaseFirestoreTypes.DocumentData>({});

  useEffect(() => {
    async function fetchDocUser() {
      const authUser = auth().currentUser;
      if (authUser) {
        firestore()
          .collection("users")
          .doc(authUser.uid)
          .onSnapshot((user) => {
            console.log(user.data());
            setUser(user.data() as {});
          });
      }
    }

    fetchDocUser();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.txtContain}>
            <Text style={styles.textAuth}>Bem vindo! {userCredentials.nome}</Text>
            <Text style={[styles.textAuth, {fontFamily: theme.fontFamily.regular, fontSize: 18}]}>
                Seu email: {`\n`} {userCredentials.email}
            </Text>
        </View>
      <MyButton
        title="Deslogar"
        onPress={() => auth().signOut()}
        style={styles.button}
      />
    </View>
  );
}
