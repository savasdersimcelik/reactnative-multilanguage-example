import React from "react";
import { View, Text, Button} from "react-native"
import { ParamListBase, useNavigation,  } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import i18next from "../language";

import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
    const { t, i18n } = useTranslation()

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>İyzico Ödeme Entagrasyonu - HomeScreen</Text>
            <View style={{ height: 15 }} />
            <Text style={{ color: 'black' }}>{i18next.t('welcome')}</Text>
            <View style={{ height: 15 }} />
            <Text style={{ color: 'black' }}>{"Aktif Dil: " + i18next.language}</Text>
            <View style={{ height: 15 }} />
            <Button title={"Dili Değiştir"} onPress={() => i18n.changeLanguage(i18next.language == 'tr' ? 'en' : 'tr')} />
            <View style={{ height: 15 }} />
            <Button title="DetailScreen Sayfasına Git" onPress={() => navigation.navigate('DetailScreen')} />
        </View>
    );
}

export default HomeScreen;