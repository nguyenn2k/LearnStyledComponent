import styled from "styled-components";

const RoundedTouchableOpacity = styled.TouchableOpacity`
    height: 60px;
    border-radius: 30px;
    width: 180px;
    justify-content: center;
    align-items: center;
    background-color: red;
    margin-top: auto;
`
const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
`

export const RoundedButton = () =>
    <RoundedTouchableOpacity>
        <ButtonText>LOGIN</ButtonText>
    </RoundedTouchableOpacity>