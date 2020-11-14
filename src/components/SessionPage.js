import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SessionPage = ({pageName, textStyle}) => {
    const [page, setPage] = useState(pageName);
    return (
        <View style={styles.navigation}>
            <Text style={[styles.titleText, textStyle]}> Você está em:</Text>
            <Text style={[
                styles.titleText,
                { fontWeight: "bold"}, 
                textStyle
            ]}> {page} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    navigation: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent:'center',
        top:0,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 14,
        color: '#000000'
    }
});


export default SessionPage;
