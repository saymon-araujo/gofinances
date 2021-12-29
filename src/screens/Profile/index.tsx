import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text testID="title-text">Tela</Text>
      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Saymon"
      />

      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        value="Araújo"
      />

      <Button testID="button" title="Salvar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
