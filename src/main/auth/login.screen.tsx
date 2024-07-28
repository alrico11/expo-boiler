import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import IconBumdes from "../../assets/icons/logo";
import CustomButton from "../../components/custom-button";
import HomeHeaders from "../../components/headers";
import { RootStackParamList } from "../../navigation";
import { loginStyles } from "./login.styles";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogin = async () => {
    try {
      nav.navigate('Main');
      // await AuthService.login({ email, password });
      // Handle successful login
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <View style={loginStyles.container}>
      {/* <HomeHeaders title="Selamat Datang" thumbnail="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"></HomeHeaders> */}
      <IconBumdes/>
      <Text style={loginStyles.title}>Selamat Datang</Text>
      <TextInput style={loginStyles.input} placeholderTextColor="#D6D6D6" placeholder="Masukan ID Pelanggan" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
      <TextInput style={loginStyles.input} placeholderTextColor="#D6D6D6" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none"/>
      <Text style={loginStyles.forgotPass}>Lupa ID Pelanggan?</Text>
      <CustomButton title="Masuk" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;