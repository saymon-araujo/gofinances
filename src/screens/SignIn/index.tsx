import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSVG from "../../assets/apple.svg";
import GoogleSVG from "../../assets/google.svg";
import LogoSVG from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components/native";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>();

  const theme = useTheme();

  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível conectar a conta Apple");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>Faça seu login com{"\n"}uma das contas abaixo</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title={"Entrar com Google"}
            svg={GoogleSVG}
            onPress={handleSignInWithGoogle}
          />

          <SignInSocialButton
            title={"Entrar com Apple"}
            svg={AppleSVG}
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>

        {isLoading && <ActivityIndicator color={theme.colors.shape} style={{ marginTop: 18 }} />}
      </Footer>
    </Container>
  );
}
