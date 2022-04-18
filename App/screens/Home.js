import React, {useState } from 'react';

import {View, StyleSheet, StatusBar, 
      Image, Dimensions, 
      Text, ScrollView, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { format } from 'date-fns';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import { Entypo } from '@expo/vector-icons';
// import {SafeAreaView} from 'react-native-safe-area-context';



const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: colors.blue,   
    },
    content :{
      paddingTop: screen.height * 0.1
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'   
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width *0.45  
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width *0.25
    },
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: 10
    },
    header:{
        marginTop: 30,
        alignItems: 'flex-end',
        marginHorizontal: 20
    }
})

export default ({ navigation }) => {

    const baseCurrency = 'USD';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.8924;
    const date = '2022-04-13';

     const [scrollEnabled, setScrollEnabled]= useState(false);


    return (
        <View style={styles.container}>
           <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
           <ScrollView scrollEnabled={scrollEnabled}>
           <View style={styles.header}> 
               <TouchableOpacity onPress={()=>navigation.push('Options')}>
                   <Entypo name="cog" size={32} color={colors.white}/>
               </TouchableOpacity>
               </View>
            <View style={styles.content}>
           <View style={styles.logoContainer}>
              <Image source={require('../assets/images/background.png')} 
                 style={styles.logoBackground}
                 resizeMode="contain"
              /> 

              <Image source={require('../assets/images/logo.png')} 
                 style={styles.logo}
                 resizeMode="contain"
              />  
            </View>
            <Text style={styles.textHeader}>Converter</Text>
            <View style={styles.inputContainer}>
                <ConversionInput
                text={baseCurrency}
                value="123"
                onButtonPress={()=> navigation.push('CurrencyList')} 
                keyboardType="numeric"
                onChangeText={(text)=> console.log('text', text)}
                /> 
                <ConversionInput
                text={quoteCurrency}
                value="123"
                editable={false}
                onButtonPress={()=> navigation.push('CurrencyList')} 
                />
            </View> 
            <Text style={styles.text}>
              {`1 ${baseCurrency}= ${conversionRate} ${quoteCurrency} as of ${format(
                  new Date(date), 'MMM do, yyyy'
              )}`}
            </Text>
            <Button text="Reverse Currencies" onPress={()=> alert('à faire')}/>
            <KeyboardSpacer onToggle={(visible)=> setScrollEnabled(visible)} />
            </View>
            </ScrollView>
        </View>
    )
}

