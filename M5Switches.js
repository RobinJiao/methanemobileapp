import React from 'react'
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native'

const M5Switches = () => {
    let btnA=false,btnB=false,btnC=false;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonline}>
                <Text>Button A</Text>
                <Button title={btnA.toString()} />
            </View>
            <View style={styles.buttonline}>
                <Text>Button B</Text>
                <Button title={btnB.toString()} />
            </View>
            <View style={styles.buttonline}>
                <Text>Button C</Text>
                <Button title={btnC.toString()} />
            </View>
        </SafeAreaView>
    )
}

export default M5Switches

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        marginBottom:50,
    },
    buttonline:{
        flexDirection:'row',
        alignItems:'center',
    },
    trueButton:{},
    falseButton:{},
})
