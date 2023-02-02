import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import CartProductItem from "../../Compnents/CartProductItems/Index";
import products from "../../data/cart";
import QuantitySelector from "../../Compnents/QuantitySelector";

const CartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0
  );
  return (
    <ScrollView>
      <View style={styles.page}>
        <View>
          <Text style={{ color: "black", fontSize: 17 }}>
            Subtotal ({products.length} items):{" "}
            <Text
              style={{
                color: "#fc5c65",
                fontWeight: "bold",
                fontSize: 20,
                shadowColor: "black",
                shadowOpacity: 0.06,
              }}
            >
              {"LYD"}
              {totalPrice.toFixed(2)}
            </Text>
          </Text>
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => <CartProductItem cartItem={item} />}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ height: 100 }}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    padding: 10,
  },
});

export default CartScreen;
