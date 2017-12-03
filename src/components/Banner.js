import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image} from 'react-native';
import Carousel from 'react-native-banner-carousel';

const deviceWidth = Dimensions.get('window').width;
export default class Banner extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.imgs !== this.props.imgs;
    }

    renderBanner(image, index) {
        return (
            <View key={index}>
                <TouchableWithoutFeedback>
                    <Image resizeMode={Image.resizeMode.stretch} style={{width: deviceWidth, height: 100}}
                           source={{uri:image.photo}}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    render(){
        const { imgs } = this.props;
        return(
            <Carousel
                autoplay
                autoplayTimeout={3000}
                loop
                index={0}
                pageSize={deviceWidth}>

                {imgs.toJS().map((image, index) => this.renderBanner(image, index))}
                <Text>sss</Text>
            </Carousel>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    }
});