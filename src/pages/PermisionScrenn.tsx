import React from 'react'

import { Text,View,Button,Alert } from 'react-native'

//alert







export const PermisionScrenn = ( )=> {

    

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    //volver atras
   

  return (
    <View>

    <Text>MapScrenn</Text>

    <Button title="Press me" onPress={() => showAlert()} />

   





</View>
  )
}


