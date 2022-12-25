import * as React from 'react';
import {View, Text} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20}}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi semper, consequat sem ut, eleifend sapien. Maecenas magna tellus, tristique at libero quis, sollicitudin mattis eros. Sed eget diam id ipsum suscipit mollis vitae porttitor mi. Nulla facilisi. Donec nisi ligula, iaculis aliquet nisi sed, luctus fringilla mi. Fusce ornare ex ac ante fermentum, quis bibendum leo ultrices. Maecenas ultrices diam egestas tempor rhoncus. Proin ac dui eros. Aenean venenatis enim luctus leo pretium aliquet. Donec lobortis dui vel elit feugiat, nec vestibulum diam rhoncus. Nunc id nisi convallis quam faucibus tristique.'
        }
      </Text>
    </View>
  );
};

export default AboutScreen;
