import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";

const M5Switches = () => {
    const db = getDatabase();
    const dbBtnA = ref(db, 'BtnA');
    const dbBtnB = ref(db, 'BtnB');
    const dbBtnC = ref(db, 'BtnC');

    const ShowButton=({btn,dbBtn})=>{
        const [btnValue, setBtnValue]= useState(false);
        useEffect(() => {
            onValue(dbBtn, (snapshot)=>{
                let btnReading=snapshot.val();
                console.log('btn Reading: ',btn, btnReading);
                setBtnValue(btnReading);
            })
            return () => {
                // cleanup
            }
        }, [btn, dbBtn]);
        console.log('rendering ShowButton ...',btn)
        return (
            <View style={styles.buttonline}>
                <Text>Button {btn}</Text>
                <Button title={btnValue.toString()} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ShowButton btn='AAA--' dbBtn={dbBtnA} />
            <ShowButton btn='BBB--' dbBtn={dbBtnB}/>
            <ShowButton btn='CCC--' dbBtn={dbBtnC} />
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
})
