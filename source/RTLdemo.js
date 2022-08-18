import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { View, Text, StyleSheet, Image, I18nManager, Button } from 'react-native';

const RtlDemo = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Home'),
    });
  });
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageContainer} source={require('./visualaids/Testimg.jpg')} ></Image>
      <View style={styles.subContainer}>
        <Text style={styles.textContainer}>{t('This is just a text.')}</Text>
        <Text style={styles.textContainer}>{t('This is just a text.')}</Text>
        <Text style={styles.textContainer}>{t('This is just a text.')}</Text>
        <Text style={styles.textContainer}>{t('This is just a text.')}</Text>
        <Text style={styles.textContainer}>{t('This is just a text.')}</Text>
        <Button title={t('Change language')}
          onPress={() => {
            i18n
              .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ar');
                RNRestart.Restart();
              });
          }} />
      </View>
    </View>
  );
};
export default RtlDemo;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    writingDirection: 'rtl'

  },
  imageContainer: {
    height: 100,
    width: 100,
    margin: 20,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
  },
  textContainer: {
  },
  subContainer: {
    margin: 20
  }
});
