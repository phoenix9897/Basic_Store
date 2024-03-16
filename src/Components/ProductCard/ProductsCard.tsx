import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./ProductsCard.Style.tsx";
//@ts-ignore
const ProductCard = ({products, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.Container}>
                <Image style={styles.Image} source={{uri: products.image}}/>
                <View style={styles.Body}>
                    <Text style={styles.Title}>{products.title}</Text>
                    <Text style={styles.Price}>{products.price}$</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ProductCard;
