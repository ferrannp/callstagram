import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const height = Dimensions.get('window').height;

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const { item } = this.props.navigation.state.params;
    this.state = {
      likes: item.numberOfLikes,
      scale: new Animated.Value(0),
    };
  }

  onItemLike = () => {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 100,
      }),
      Animated.timing(this.state.scale, {
        toValue: 0,
        duration: 100,
      }),
    ]).start();

    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    const { item } = this.props.navigation.state.params;
    const { likes } = this.state;

    const bouncyImage = this.state.scale.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });

    const imageStyle = {
      transform: [{ scale: bouncyImage }],
    };

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.onItemLike}>
        <View>
          <Animated.Image
            style={[imageStyle, styles.image]}
            source={{ uri: item.imageUrl }}
          />
          <View style={styles.content}>
            <Text style={styles.text}>{`${likes} like${
              likes === 1 ? '' : 's'
            } `}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: height / 2,
    width: '100%',
  },
  content: {
    padding: 16,
  },
  text: {
    fontSize: 18,
  },
});

export default Detail;
