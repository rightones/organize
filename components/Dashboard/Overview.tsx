import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    border-radius: 24px;
    background-color: ${(props) => props.theme.color.background};
    width: 100%;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /*
    :nth-child(1) {
        border-right: 0.5px solid #eee;
    }
    :nth-child(2) {
        border-right: 0.5px solid #eee;
    }
    :nth-child(3) {
        border-right: 0.5px solid #eee;
    }*/

    & > h4 {
        font-size: 1rem;
        font-family: Outfit, sans-serif;
        font-weight: bold;
    }

    & > p {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 8px;
        color: ${(props) => props.theme.color.primary};
    }

    & > u {
        font-size: 0.875rem;
        margin-top: 4px;
    }
`;

const Overview = () => {
    return (
        <Container>
            <Item>
                <h4>Today's schedule</h4>
                <p>3</p>
            </Item>
            <Item>
                <h4>Memo</h4>
                <p>45</p>
                <u>Write</u>
            </Item>
            <Item>
                <h4>To-do</h4>
                <p>3 left</p>
            </Item>
            <Item>
                <h4>Weather</h4>
                <p>25°C</p>
            </Item>
        </Container>
    );
};

export default Overview;
