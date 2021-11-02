import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";

const M5Switches = () => {
    const db = getDatabase();
    const [btnA, setBtnA]=useState(false);
    const [btnB, setBtnB]=useState(false);
    const [btnC, setBtnC]=useState(false);
    let btnAReading=false,btnBReading=false,btnCReading=false;
    console.log('rendering ....')
    const dbBtnA = ref(db, 'BtnA');
    onValue(dbBtnA, (snapshot)=>{
        btnAReading=snapshot.val();
        console.log('btnAReading: ', btnAReading);
        // setBtnA(btnAReading);
    })
    const dbBtnB = ref(db, 'BtnB');
    onValue(dbBtnB, (snapshot)=>{
        btnBReading=snapshot.val();
        console.log('btnBReading: ', btnBReading);
        // setBtnB(data);
    });
    const dbBtnC = ref(db, 'BtnC');
    onValue(dbBtnC, (snapshot)=>{
        btnCReading=snapshot.val();
        console.log('btnCReading: ', btnCReading);
        // setBtnC(btnCReading);
    })
    useEffect(() => {
        setBtnA(btnAReading);
        setBtnB(btnBReading);
        setBtnC(btnCReading)
        return () => {
            // off();
            ;
        }
    }, [btnAReading,btnBReading,btnCReading]);
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
