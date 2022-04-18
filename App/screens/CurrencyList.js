import React from 'react';

import { StatusBar, FlatList, View } from 'react-native';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';
import currencies from '../data/currencies.json'

export default ({navigation})=> {
    return (
        <View>
           <StatusBar barStyle='dark-content' backgroundColor={colors.white}/>
           <FlatList 
             data={currencies}
             renderItem={({ item })=>{
                return (
                    <RowItem 
                      title={item}
                      onPress={()=>{
                          navigation.pop()
                      }}
                    />
                )
             }}
             keyExtractor={(item)=> item}
             ItemSeparatorComponent={()=> <RowSeparator/>}
           />
        </View>
    )
    
}
