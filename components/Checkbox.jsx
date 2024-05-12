import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckbox = ({label = 'Default Label', defaultChecked = false}) => {
  const [isSelected, setSelection] = useState(defaultChecked);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default CustomCheckbox;
