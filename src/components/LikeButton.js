import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';


const LikeButton = ({ onLiked, onUnliked, size, status, likeImage, unlikeImage }) => {

    const [like, setLike] = useState(status)

    useEffect(() => {
        setLike(status)
    }, [status])

    useEffect(() => {


        like ? onLiked() : onUnliked()

    }, [like])


    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.spring(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start(() => {
            fadeAnim.setValue(0)
        });
    };


    const buttonStyle = {
        width: size.width,
        height: size.height,
        alignSelf: 'center',
        transform: [

            {
                scaleX: fadeAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.6, 1]
                })
            },
            {
                scaleY: fadeAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.6, 1]
                })
            }
        ]
    }



    return <>
        <TouchableOpacity onPress={() => {
            fadeIn()
            setLike(!like)
        }}>
            {!like ? <Animated.Image source={likeImage}
                style={buttonStyle}
            />

                : <Animated.Image source={unlikeImage}
                    style={buttonStyle}
                />

            }


        </TouchableOpacity>
    </>
}



export default LikeButton;