import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName : 'plus' | 'minus';
    onPress?: () => void;
    // **:  은 필수 항목.
    // **?: 은 필수 항목은 아님.
    // => onPress는 없어도 에러가 나지 않는다.
}

const Button = ({ iconName, onPress } : Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                        ? require('~/Assets/Images/add.png')
                        : require('~/Assets/Images/remove.png')
                }
            />
        </Container>
    );
};

export default Button;