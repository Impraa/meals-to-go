import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { CreditCardInput } from "../components/CreditCardInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../../../../context/CartContext";
import { payRequest } from "../../../utils/Stripe";

export const CartScreen = ({ navigation }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState<string>("");
  const [card, setCard] = useState<any>(null);

  const onPay = async () => {
    if (!card || !card.id) {
      console.log("Error card" + card);
      return;
    }

    const response = await payRequest(card.id, cart!.length * 13.99, name);

    const { status } = response;

    if (status && status === "succeeded") {
      return navigation.navigate("Success");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {cart && cart.length > 0 ? (
        <View style={styles.container}>
          {cart.map((item, index) => {
            return (
              <View key={index}>
                <Text>Special from {item.name} - 13.99$</Text>
              </View>
            );
          })}

          <Text style={{ marginTop: 20 }}>
            Your total is {13.99 * cart.length}
          </Text>
          <TextInput
            style={{ width: "75%", marginVertical: 20 }}
            label="Name"
            value={name}
            onChange={(text) => setName(text.nativeEvent.text)}
          />
          {name && (
            <CreditCardInput name={name} onSuccess={(card) => setCard(card)} />
          )}
          <Button
            textColor="white"
            rippleColor={"white"}
            style={{
              backgroundColor: "#696AC3",
              marginBottom: 10,
              marginHorizontal: 50,
            }}
            onPress={() => {
              onPay();
            }}
          >
            Pay now
          </Button>
          <Button
            textColor="white"
            rippleColor={"white"}
            style={{
              backgroundColor: "#696AC3",
              marginBottom: 10,
              marginHorizontal: 50,
            }}
            onPress={() => clearCart()}
          >
            Clear Cart
          </Button>
        </View>
      ) : (
        <View style={styles.container}>
          <Avatar.Icon size={100} icon="cart-off" style={styles.icon} />
          <Text style={styles.text}>Cart is currently empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "#696AC3",
    marginBottom: 15,
  },
  text: {
    fontSize: 17.5,
    fontWeight: "bold",
  },
});
