import React, { useEffect } from 'react'
import { Keyboard, Platform  } from 'react-native';

const useKeyboardBottomInset = () => {
    const [bottom, setBottom] = React.useState(0);
    const subscriptions = React.useRef([]);

    useEffect(() => {
        function onKeyboardChange(e) {
            if (
                e.startCoordinates &&
                e.endCoordinates.screenY < e.startCoordinates.screenY
            )
                setBottom(e.endCoordinates.height);
            else setBottom(0);
        }

        if (Platform.OS === 'ios') {
            subscriptions.current = [
                Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange),
            ];
        } else {
            subscriptions.current = [
                Keyboard.addListener('keyboardDidHide', onKeyboardChange),
                Keyboard.addListener('keyboardDidShow', onKeyboardChange),
            ];
        }
        return () => {
            subscriptions.current.forEach((subscription) => {
                subscription.remove();
            });
        };
    }, [setBottom, subscriptions]);

    return bottom;
};

export default useKeyboardBottomInset