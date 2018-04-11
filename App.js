import { StackNavigator } from 'react-navigation';

import Feed from './src/Feed';
import Detail from './src/Detail';

export default StackNavigator({
  Home: {
    screen: Feed,
    navigationOptions: {
      title: 'Callstagram',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    },
  },
});
