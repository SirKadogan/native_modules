/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
  const [isTimeZoneAuto, setIsTimeZoneAuto] = useState('false');

  const loadConfigs = async () => {
    const isTimeAutoResponse = await ClockSettings.getUsesAutoDateAndTime();
    const isTimeAutoZoneResponse = await ClockSettings.getUsesAutoTimeZone();
    setIsTimeAuto(isTimeAutoResponse + '');
    setIsTimeZoneAuto(isTimeAutoZoneResponse + '');
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
          <Text style={styles.sectionDescription}>
            <Text style={styles.highlight}>{isTimeAuto}</Text>
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Is Time Zone Auto ?</Text>
          <Text style={styles.sectionDescription}>
            <Text style={styles.highlight}>{isTimeZoneAuto}</Text>
          </Text>
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
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
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
