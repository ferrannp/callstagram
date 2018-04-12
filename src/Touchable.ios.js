import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = ({ children, ...rest }) => (
  <TouchableOpacity {...rest}>{children}</TouchableOpacity>
);

export default Touchable;
