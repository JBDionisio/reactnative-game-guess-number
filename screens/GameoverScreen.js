import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GameoverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameoverScreen;