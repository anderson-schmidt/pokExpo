import React from 'react';
import { TouchableOpacityBase, TouchableOpacityProps } from 'react-native';

import * as S from './style';

type Props = {
    title: string;
} & TouchableOpacityProps

export function Button ({title}: Props){

    return <S.Container>
        <S.Title>{title}</S.Title>
    </S.Container>
}