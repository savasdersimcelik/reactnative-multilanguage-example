import React, { useState, useRef } from "react";
import { View, Text } from "react-native"
import i18next from "../language";

const DetailScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>İyzico Ödeme Entagrasyonu - DetailScreen</Text>
            <View style={{ height: 15 }} />
            <Text style={{ color: 'black' }}>{i18next.t('hello_world')}</Text>
            <View style={{ height: 15 }} />
        </View>
    );
}

export default DetailScreen;