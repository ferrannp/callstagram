import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Touchable from './Touchable';

const width = Dimensions.get('window').width;

class FeedItem extends React.PureComponent {
  onItemPress = () => {
    this.props.onItemPress(this.props.item);
  };
  render() {
    const { item } = this.props;
    return (
      <Touchable onPress={this.onItemPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  image: {
    height: 125,
    width: width / 3,
    resizeMode: 'cover',
  },
});

export default FeedItem;
