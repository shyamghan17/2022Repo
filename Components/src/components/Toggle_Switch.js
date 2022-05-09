import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';

const Toggle_Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Switch
        trackColor={{false: '#CC653F', true: '#FFA381'}}
        thumbColor={isEnabled ? '#4FD0FF' : '#81DDFF'}
        ios_backgroundColor="#000Î"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Toggle_Switch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
