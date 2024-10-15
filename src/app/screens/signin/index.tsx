import { View, Text, Image, ImageSourcePropType, Alert } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "./styles";
import { theme } from "../../../theme";
import { MyInput } from "../../components/MyInput";
import { MyButton } from "../../components/MyButton";
import auth from "@react-native-firebase/auth";
import infoImg from "../../images/infoBNK.png";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
const infoImgType: ImageSourcePropType = infoImg;

const schema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo seis caracteres" }),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Register");
  };

  const onSubmit = async (user: { email: string; senha: string }) => {
    try {
      const userAuth = await auth().signInWithEmailAndPassword(
        user.email,
        user.senha
      );

      await firestore()
        .collection("users")
        .doc(userAuth.user.uid)
        .update({ senha: user.senha, email: user.email });
        
    } catch (error) {
      console.error("Erro ao logar ou atualizar dados:", error);
      Alert.alert("Usuário não encontrado", "Digite os dados corretamente");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, justifyContent: "center" }}>
        <Image
          source={infoImgType}
          style={{ alignSelf: "center", tintColor: theme.colors.black }}
        />
      </View>
      <View style={styles.containerRegister}>
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: theme.fontFamily.bold,
              fontSize: 32,
              color: theme.colors.white,
              textAlign: "left",
            }}
          >
            Bem Vindo{"\n"}de volta!
          </Text>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
              fontSize: 18,
              color: theme.colors.white,
              alignItems: "flex-start",
            }}
          >
            Acesse sua conta{"\n"}agora mesmo
          </Text>
        </View>
        <View style={styles.main}>
          <MyInput style={styles.containerForm}>
            <MyInput.ControlledInput
              control={control}
              name="email"
              placeholder="Email"
            />
          </MyInput>
          {errors.email && (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
          )}
          <MyInput style={styles.containerForm}>
            <MyInput.ControlledInput
              control={control}
              secureTextEntry
              name="senha"
              placeholder="Senha"
            />
          </MyInput>
          {errors.senha && (
            <Text style={styles.errorText}>{errors.senha?.message}</Text>
          )}
        </View>
        <MyButton
          title="ENTRAR"
          style={styles.button}
          styleTitle={false}
          onPress={handleSubmit(onSubmit)}
        />
        <MyButton
          title="Não tem uma conta? clique aqui para se registrar"
          styleTitle={{ fontFamily: theme.fontFamily.regular, width: "100%" }}
          style={{ marginBottom: 16 }}
          onPress={() => handleNavigate()}
        />
      </View>
    </View>
  );
}
