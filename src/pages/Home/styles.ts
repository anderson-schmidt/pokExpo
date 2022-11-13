import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background-color: ${theme.colors.background};
        padding: 20px;
    `}
`;