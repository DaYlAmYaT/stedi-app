import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text, Alert } from "react-native";

const UselessTextInput = () => {
  const [number, onChangeNumber] = React.useState("Phone Number");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
        title="Send Text"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;