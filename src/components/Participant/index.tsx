import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, isPressed && styles.checkboxPressed]}
        onPress={handlePress}
      ></TouchableOpacity>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          <Image
            source={require('../../../img/Trash.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}