
import {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Platform} from 'react-native';
// import {useFocusEffect} from '@react-navigation/native';

const KeyboardType: any = {
  numberPad: 'number-pad',
  numeric: 'numeric',
};

interface Props {
  testID?: string;
  onPinEntered: any;
  customDotStyle?: any;
  customFilledDotStyle?: any;
  customPinLength?: number;
}

const PinInput: React.FC<Props> = ({
  onPinEntered,
  testID,
  customDotStyle = null,
  customFilledDotStyle = null,
  customPinLength = -1,
}) => {
  const pinLength = customPinLength > 0 ? customPinLength : 6;
  const pinField = useRef<TextInput>(null);
  const [pinValue, setPinValue] = useState('');

  const focusOnBubble = () => {
    if (pinField.current) {
      pinField.current.blur();
      pinField.current.focus();
    }
  };

  const resetEnteredPin = () => {
    if (pinField.current) pinField.current.clear();
    setPinValue('');
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     resetEnteredPin();
  //   }, []),
  // );

  useEffect(() => {
    setTimeout(() => {
      focusOnBubble();
    }, 100);
  }, []);

  const dotView = () => {
    const dotArray = [];
    if (pinValue && pinValue?.length > 0) {
      for (let i = 0; i < pinValue?.length; i++) {
        dotArray.push({isFilled: true});
      }

      const remaining = pinLength - pinValue?.length;
      for (let i = 0; i < remaining; i++) {
        dotArray.push({isFilled: false});
      }
    } else {
      for (let i = 0; i < pinLength; i++) {
        dotArray.push({isFilled: false});
      }
    }
    return dotArray;
  };

  useEffect(() => {
    if (pinValue && pinValue?.length === pinLength) onPinEntered(pinValue);
  }, [pinValue, pinLength]);

  const dotStyle = customDotStyle ? {...styles.dot, ...customDotStyle} : styles.dot;
  const dotFillStyle = customFilledDotStyle
    ? {...styles.dotFill, ...customFilledDotStyle}
    : styles.dotFill;

  const filledStyle = [dotStyle, dotFillStyle];
  const blankStyle = dotStyle;

  return (
    <View>
      <TextInput
        testID={testID}
        style={styles.pinField}
        ref={pinField}
        maxLength={pinLength}
        onChangeText={text => setPinValue(text)}
        keyboardType={Platform.OS === 'android' ? KeyboardType.numeric : KeyboardType.numberPad}
      />
      <TouchableOpacity onPress={() => focusOnBubble()} activeOpacity={1}>
        <View style={styles.container}>
          {dotView().map((pinObject, index) => {
            return <View key={index} style={pinObject?.isFilled ? filledStyle : blankStyle} />;
          })}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PinInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 13,
  },
  dotFill: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
  lastDot: {
    marginRight: 0,
  },
  pinField: {
    opacity: 0,
  },
});
    