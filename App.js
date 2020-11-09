/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import ClockSettings from './ClockSettings';

const App = () => {
  const [isTimeAuto, setIsTimeAuto] = useState('false');
  const [isRNTimeAuto, setIsRNTimeAuto] = useState('false');

  const [isTimeZoneAuto, setIsTimeZoneAuto] = useState('false');
  const [isRNTimeZoneAuto, setRNIsTimeZoneAuto] = useState('false');

  const loadConfigs = async () => {
    const isTimeAutoResponse = await ClockSettings.getUsesAutoDateAndTime();
    const isTimeAutoZoneResponse = await ClockSettings.getUsesAutoTimeZone();

    const isRNTimeAutoZoneResponse = await RNLocalize.usesAutoTimeZone();
    const isRNTimeAutoResponse = await RNLocalize.usesAutoDateAndTime();
    setIsTimeAuto(isTimeAutoResponse + '');
    setIsRNTimeAuto(isRNTimeAutoResponse + '');
    setIsTimeZoneAuto(isTimeAutoZoneResponse + '');
    setRNIsTimeZoneAuto(isRNTimeAutoZoneResponse + '');
  };

  useEffect(() => {
    loadConfigs();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Are Time and Date Auto ?</Text>
          <View style={styles.sectionDescription}>
            <Text style={styles.highlight}>Native: {isTimeAuto}</Text>
            <Text style={styles.highlight}>RNLocalize: {isRNTimeAuto}</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Is Time Zone Auto ?</Text>
          <View style={styles.sectionDescription}>
            <Text style={styles.highlight}>Native: {isTimeZoneAuto}</Text>
            <Text style={styles.highlight}>RNLocalize:{isRNTimeZoneAuto}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Button
            title="Reload"
            onPress={loadConfigs}
            style={styles.sectionContainer}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    justifyContent: 'space-around',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    width: '80%',
    alignItems: 'center',
  },
  highlight: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
