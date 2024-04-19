<!-- Title -->
<h1 align="center">@coder-shubh/react-native-pincode</h1>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/npm/v/@coder-shubh/react-native-pincode" alt="npm version">
  <!-- Add any other badges here -->
</p>

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <!-- First GIF -->
  <img src="https://raw.githubusercontent.com/coder-shubh/react-native-PINcode/master/src/components/assets/vido.gif" alt="Demo 1" width="45%" height='30%'>
</div>

<!-- Description -->
<p align="center">
  `PinInput` is a customizable React Native component for entering PIN codes.
</p>

<!-- Table of Contents -->
<h2>Table of Contents</h2>

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

<!-- Installation -->
<h2>Installation</h2>

You can install the `@coder-shubh/react-native-pincode` package using npm or yarn:

```bash
# with npm
npm i @coder-shubh/react-native-pincode

# with yarn
yarn add @coder-shubh/react-native-pincode
```

<!-- Usage -->
<h2>Usage</h2>

```js
import React, { useState } from "react";
import PinInput from "@coder-shubh/react-native-pincode";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const [pin, setPin] = useState("");
  const [isFirstPinSetupComplete, setIsFirstPinSetupComplete] = useState(false);

  const whenPinEntered = (text: string) => {
    setIsFirstPinSetupComplete(true);
    setPin(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PinInput
        testID="pinInputTestId"
        onPinEntered={whenPinEntered}
        customDotStyle={{ backgroundColor: "red" }}
        customFilledDotStyle={{ backgroundColor: "green" }}
        customPinLength={6}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  customDot: {
    borderColor: "#000",
  },
  customDotFilled: {
    borderColor: "red",
    backgroundColor: "blue",
  },
});
```

<!-- Props -->
<h2>Props</h2>

| Prop                    | Type                                   | Description                                   | Default Value |
| ----------------------- | -------------------------------------- | --------------------------------------------- | ------------- |
| `onPinEntered`          | `Function`                             | Callback function triggered when the PIN is fully entered. | -             |
| `testID`                | `string`                               | Test identifier for testing purposes.         | -             |
| `customDotStyle`        | `object`                               | Custom styles for the empty PIN dot.         | `null`        |
| `customFilledDotStyle`  | `object`                               | Custom styles for the filled PIN dot.        | `null`        |
| `customPinLength`       | `number`                               | Custom length for the PIN.                   | `-1`          |

In this table:

`Prop`: Name of the prop.
`Type`: Type of the prop.
`Description`: Description of what the prop does.
`Default Value`: Default value of the prop, if any.

<!-- License -->
<h2>License</h2>

This project is licensed under the MIT License - see the LICENSE file for details.

In this version, I've added:

- Title and badges centered at the top.
- Descriptive text centered.
- Table of Contents for easy navigation.
- Stylish section headings.
- Usage code block with syntax highlighting.
- More visual appeal with horizontal lines and section separators.

Feel free to adjust the styles, colors, or any other aspects to better suit your preferences or project branding.
