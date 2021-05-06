import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';


const LikeButton = ({ onLiked, onUnliked, size, status, likeImage, unlikeImage }) => {

    const [like, setLike] = useState(status)

    useEffect(() => {
        setLike(status)
    }, [status])

    
    const onPressButton = useCallback(()=>{
        like ? onUnliked() : onLiked()
    },[like])


    const bounce = useRef(new Animated.Value(0)).current;

    const bounceAnim = () => {
        Animated.spring(bounce, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start(() => {
            bounce.setValue(0)
        });
    };


    const buttonStyle = {
        width: size.width,
        height: size.height,
        alignSelf: 'center',
        transform: [

            {
                scaleX: bounce.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.6, 1]
                })
            },
            {
                scaleY: bounce.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.6, 1]
                })
            }
        ]
    }



    return <>
        <TouchableOpacity onPress={() => {
            bounceAnim()
            setLike(!like)
            onPressButton()
        }}>
            {like ? <Animated.Image source={likeImage}
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