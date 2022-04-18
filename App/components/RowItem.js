import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles= StyleSheet.create({
    row: {
        paddingHorizontal:20,
        paddingVertical: 16,
        flexDirection: 'row' ,
        justifyContent:'space-between',
        alignContent:'center'
    },
    title: {
        color: colors.text,
        fontSize: 26
    },
    
    separator: {
            backgroundColor: colors.border,
            height: StyleSheet.hairlineWidth,
            marginLeft: 20
    }
    
})

export const RowItem = ({title, onPress, rightIcon}) => (
    <TouchableOpacity onPress={onPress} style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                {rightIcon}
            </TouchableOpacity>
);

export const RowSeparator = () => <View style={styles.separator}/>

