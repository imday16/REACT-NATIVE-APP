import React, {useEffect, useState} from "react";
import {View, Keyboard, StyleSheet, Dimensions} from "react-native";


const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }
})

export const KeyboardSpacer = ({onToggle})=>{
    const [keyboardSp, setKeyboardSp] = useState(0)
    useEffect(()=>{
        const showListener= Keyboard.addListener("keyboardDidShow",(event)=>{
            console.log(event);
            const screenHeight = Dimensions.get('window').height;
            const endY = event.endCoordinates.screenY;
            setKeyboardSp(screenHeight - endY)
            onToggle(true)
        });
        const hideListener = Keyboard.addListener("KeyboardDidHide", ()=>{
            setKeyboardSp(0);
            onToggle(false)
        });
        return() =>{
            showListener.remove();
            hideListener.remove();
        }
    }, []);

    return <View style={[styles.container, {height: keyboardSp}]} />
}
