import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

import api from '../../service/api';
import { useTheme } from 'styled-components';
import circle from '../../assests/img/circle.png';
import * as S from './style';


type RouteParams = {
    pokemonId: number
};

type Stats = {

    base_stat: 62,
    stat: {
        name: string
    }
};

type Ability = {
    ability: {
        name: string;
    }
};

export type TypeName =
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground';

type PokemonType = {
    type: {
        name: TypeName
    }
};

type PokemonProps = {
    id: number;
    name: string;
    stats: Stats[];
    abilities: Ability[];
    color: string;
    types: PokemonType[];
};

export function About() {

    const route = useRoute();

    const { pokemonId } = route.params as RouteParams;

    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({} as PokemonProps);

    const [load, setLoad] = useState(true);

    useEffect(() => {

        async function getPokemonDetail() {
            try {

                const response = await api.get(`/pokemon/${pokemonId}`);
                const { stats, abilities, id, name, types } = response.data;

                const currentType = types[0].type.name as TypeName;

                const color = colors.backgroundCard[currentType];

                setPokemon({
                    stats, abilities, id, name, types, color
                })

            } catch (err) {
                Alert.alert('Ops, Ocorreu algo!');

            } finally {
                setLoad(false);
            }
        }

        getPokemonDetail()
    }, [])


    return <>
        {load ? <>
            <Text style={{marginTop: 200}}>Carregando ...</Text>
        </> :
    <ScrollView>
        <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton>
                <Feather name="chevron-left" size={24} color='#fff' />
            </S.BackButton>

            {/* <S.ContentImage>
                <S.CircleImage source = {circle} />
                <S.PokemonImage source = {{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
                }} />
            </S.ContentImage> */}
        </S.Header>
    </ScrollView>
}
    </>


};