import React from "react";
import {ActivityIndicator, FlatList, SafeAreaView, Text,} from "react-native";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/loading.tsx";
import ErrorAnimation from "../../Components/Error/error.tsx";
import ProductCard from "../../Components/ProductCard/ProductsCard.tsx";
import useFetch from "../../Hooks/useFetch/useFetch.tsx";
import LottieView from "lottie-react-native";


// @ts-ignore
const Product = ({navigation}) => {

    const {loading, data, error} = useFetch(Config.API_URL);

    //@ts-ignore
    const handleProductSelect = id => {
        navigation.navigate("Details",{id});

    };

    // @ts-ignore
    const renderProduct = ({item}) => (
        <ProductCard products={item} onSelect={()=>handleProductSelect(item.id)}/>
    );


    if (loading) {
        return <LoadingAnimation/>
    }

    if (error) {
        return <ErrorAnimation/>
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )


}

export default Product;

