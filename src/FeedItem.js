import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;

class FeedItem extends React.PureComponent {
  onItemPress = () => {
    this.props.onItemPress(this.props.item);
  };
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.onItemPress}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: width / 3,
    resizeMode: 'cover',
  },
});

export default FeedItem;
