import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from './pokemon.json'

import * as S from './styles';
import { Button } from "../../components/Button";

export function Wellcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>

                    <AnimatedLottieView style={{ width: 200 }} autoPlay source={pokemonAnimation} loop />

                </S.WrapperImage>

            </S.WrapperAnimation>

            <S.Title>Bem Vindo!!!</S.Title>
            <S.SubTitle>Encontre todos os Pokémons em um só lugar!</S.SubTitle>

        </S.Content>
        <S.Footer>
            <Button title="Iniciar" />
        </S.Footer>
    </S.Container>

}