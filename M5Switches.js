import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";

const M5Switches = () => {
    const db = getDatabase();
    const [btns, setBtns]=useState([false,false,false]);
    let btnAReading=false,btnBReading=false,btnCReading=false;
    console.log('useState ....M5Switches btns: ', btns);
    const dbBtnA = ref(db, 'BtnA');
    const dbBtnB = ref(db, 'BtnB');
    const dbBtnC = ref(db, 'BtnC');

    onValue(dbBtnA, (snapshot)=>{
        btnAReading=snapshot.val();
        console.log('btnAReading: ', btnAReading);
    })
   
    onValue(dbBtnB, (snapshot)=>{
        btnBReading=snapshot.val();
        console.log('btnBReading: ', btnBReading);
    });

    onValue(dbBtnC, (snapshot)=>{
        btnCReading=snapshot.val();
        console.log('btnCReading: ', btnCReading);
    })
    useEffect(() => {
        setBtns([btnAReading, btnBReading, btnCReading]);
        console.log('useEffecting ......M5Switches btns: ', [btnAReading, btnBReading, btnCReading])
        // return () => {}
    }, [btnAReading,btnBReading,btnCReading]);

    const ShowButton=({btn,btnReading})=>{
        const [btnValue, setBtnValue]= useState(btnReading);
        useEffect(() => {
            setBtnValue(btnReading);
            return () => {
                // cleanup
            }
        }, [btnReading]);
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
            <ShowButton btn='A' btnReading={btns[0]} />
            <ShowButton btn='B' btnReading={btns[1]} />
            <ShowButton btn='C' btnReading={btns[2]} />
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
