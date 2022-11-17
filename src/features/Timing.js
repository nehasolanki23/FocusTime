import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';


export const Timing = ({ onChangeTime }) => {
    
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="+" onPress={() => onChangeTime(onChangeTime => onChangeTime + 1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="-" onPress={() => onChangeTime(onChangeTime => ((onChangeTime<1)? 0: onChangeTime-1))} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    color: colors.brightBlue,
  },
});