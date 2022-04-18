import React from 'react';

import { View, 
    ScrollView, Linking, Alert, StatusBar} from 'react-native';



import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';

    const openLink= (url)=> Linking.openURL(url).catch(()=>
    Alert.alert('Désolé, ça ne va pas être possible','Réessayez plutard' ))


export default ()=> {
return (
    <View style={{marginTop: 20, flex: 1}}>
        <StatusBar barStyle='dark-content' backgroundColor={colors.white}/>
        <ScrollView>
            <RowItem 
            title="Theme"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue}/>}
        />

        <RowSeparator />


            <RowItem
            title="React Native"
            onPress={() => openLink('https://reactnative.dev/')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />


            <RowItem
            title="React Native Basics"
            onPress={() => openLink('https://reactnative.dev/docs/getting-started')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />

            <RowSeparator />
            <RowItem
            title="React Navigation"
            onPress={() => openLink('https://reactnavigation.org/')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator /> 
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator /> 
            <RowItem
            title="React Native"
            onPress={() => alert('à faire')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue}/>}
            />


            <RowSeparator />
            </ScrollView>
        </View>
    )
}

