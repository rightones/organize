import styled from "styled-components";
import { HiCog, HiPlus } from "react-icons/hi";
import { useRouter } from "next/router";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.div`
    padding: 8px 12px;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;

    svg {
        font-size: 24px;
    }

    span {
        margin-left: 4px;
        font-family: Outfit, sans-serif;
        font-weight: bold;
    }

    :hover {
        background-color: ${(props) => props.theme.color.background};
    }
`;

const Button = () => {
    const router = useRouter();
    return (
        <Container>
            <Item>
                <HiPlus />
                <span>Create</span>
            </Item>
            <Item onClick={() => router.push("/setting")}>
                <HiCog />
            </Item>
        </Container>
    );
};

export default Button;
