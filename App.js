import * as React from 'react';
import {DrawerLayoutAndroid, View, Text, Button, FlatList} from 'react-native';
import './i18n/config';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import MapScreen from './screens/map';
import AboutScreen from './screens/about';
import TermsScreen from './screens/terms';

import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerN = createDrawerNavigator();

const _App = ({}) => {
  const {t, i18n} = useTranslation();
  const OPTIONS = {
    headerRight: () => (
      <View
        onTouchStart={() =>
          i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
        }
        style={{marginHorizontal: 9}}>
        <Text style={{fontWeight: '700', fontSize: 20}}>{i18n.language}</Text>
      </View>
    ),
  };

  return (
    <PaperProvider>
      <DrawerN.Navigator>
        <DrawerN.Screen
          options={{...OPTIONS}}
          name={t('map')}
          component={MapScreen}
        />
        <DrawerN.Screen
          options={{...OPTIONS}}
          name={t('about')}
          component={AboutScreen}
        />
        <DrawerN.Screen
          options={{...OPTIONS}}
          name={t('terms')}
          component={TermsScreen}
        />
      </DrawerN.Navigator>
    </PaperProvider>
  );
};

const App = () => (
  <NavigationContainer>
    <_App />
  </NavigationContainer>
);

export default App;
