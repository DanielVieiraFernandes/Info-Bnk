import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "./styles";
import { theme } from "../../../theme";
import { MyInput } from "../../components/MyInput";
import { MyButton } from "../../components/MyButton";
import auth from "@react-native-firebase/auth";
import infoImg from "../../images/infoBNK.png";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, CommonActions } from "@react-navigation/native";

const infoImgType: ImageSourcePropType = infoImg;

const schema = z.object({
  nome: z
    .string()
    .min(3, { message: "O Nome deve conter no mínimo três caracteres" }),
  email: z.string().email({ message: "Digite um email válido" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo seis caracteres" }),
});

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
    },
  });

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
  };

  const onSubmit = async (user: {
    nome: string;
    email: string;
    senha: string;
  }) => {
    const userCredentials = await auth()
      .createUserWithEmailAndPassword(user.email, user.senha)
      .then(async (userAuth) => {
        await firestore().collection("users").doc(userAuth.user.uid).set({
          nome: user.nome,
          email: user.email,
          senha: user.senha,
        });
        console.log("Finalizado com sucesso");
      });

    return userCredentials;
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, justifyContent: "center" }}>
        <Image source={infoImgType} style={{ alignSelf: "center" }} />
      </View>
      <View style={styles.containerRegister}>
        <View style={styles.header}>
          <Text style={{ fontFamily: theme.fontFamily.bold, fontSize: 32 }}>
            Crie sua conta
          </Text>
          <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: 18 }}>
            Preencha seus dados
          </Text>
        </View>
        <View style={styles.main}>
          <MyInput style={styles.containerForm}>
            <MyInput.ControlledInput
              control={control}
              name="nome"
              placeholder="Nome"
            />
          </MyInput>
          {errors.nome && (
            <Text style={styles.errorText}>{errors.nome?.message}</Text>
          )}
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
          title="CADASTRAR"
          style={styles.button}
          styleTitle={false}
          onPress={handleSubmit(onSubmit)}
        />
        <MyButton
          title="Já tem uma conta? clique aqui para acessar "
          styleTitle={{
            fontFamily: theme.fontFamily.regular,
            color: theme.colors.black,
          }}
          style={{ marginBottom: 16, backgroundColor: "transparent" }}
          onPress={() => handleNavigate()}
        />
      </View>
    </View>
  );
}
