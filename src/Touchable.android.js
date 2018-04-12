import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const Touchable = ({ children, ...rest }) => (
  <TouchableNativeFeedback
    useForeground
    background={TouchableNativeFeedback.Ripple('white', true)}
    {...rest}
  >
    {children}
  </TouchableNativeFeedback>
);

export default Touchable;
