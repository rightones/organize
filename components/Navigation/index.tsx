import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import Slider from "./Slider";

const Container = styled.nav`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    width: 100vw;
    position: fixed;
    left: 0;
    right: 0;
    box-sizing: border-box;
    top: 0;
    box-shadow: 0 0 8px ${({ theme }) => theme.color.primary}22;
    background-color: white;
    height: 72px;
    padding: 4px 20px;
    gap: 16px;
    z-index: 100;
    @media screen and (max-width: 1000px) {
        padding: 4px 16px;
    }

    @media ${({ theme }) => theme.screen.mobile} {
        margin: 0;
        padding: 0 12px;
        height: 48px;
    }
`;

const Navigation = () => {
    return (
        <Container>
            <Logo />
            <Slider />
            <div style={{ flexGrow: 1 }} />
            <Button />
        </Container>
    );
};

export default Navigation;
