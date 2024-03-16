import React from "react";
import {SafeAreaView, View, Text, Image} from "react-native";
import styles from "./Details.Style.tsx";
import useFetch from "../../Hooks/useFetch/useFetch.tsx";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/loading.tsx";
import ErrorAnimation from "../../Components/Error/error.tsx";


// @ts-ignore
function Details({route}) {
    const {id} = route.params;
    const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

    if (loading) {
        return <LoadingAnimation/>;
    }

    if (error) {
        return <ErrorAnimation/>;
    }
    console.log({data});


    return (
        <View style={styles.container}>

            <Image source={{uri:data.image}} style={styles.image}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.desc}>
                    {data.description}
                </Text>
                <Text style={styles.price}>
                    {data.price}$
                </Text>
            </View>
        </View>
    )
}

export default Details;
