import styled from "styled-components";

const Container = styled.div`
    overflow-y: scroll;
    border-radius: 24px;
    background-color: ${(props) => props.theme.color.background};
    height: 100%;
`;

const Item = styled.div`
    margin: 20px;
    display: flex;
    font-family: Outfit, sans-serif;

    .cal {
        display: flex;
        width: 80px;
        height: 80px;
        background-color: white;
        border-radius: 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .num {
        font-size: 1.5rem;
        color: ${(props) => props.theme.color.primary};
    }
    .content {
        padding: 16px;
        margin: auto 0 auto;
        font-size: 1.25rem;
    }
`;

const List = () => {
    return (
        <Container>
            <Item>
                <div className="cal">
                    MON
                    <span className="num">13</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>

            <Item>
                <div className="cal">
                    MON
                    <span className="num">14</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>

            <Item>
                <div className="cal">
                    MON
                    <span className="num">15</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>

            <Item>
                <div className="cal">
                    MON
                    <span className="num">16</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>

            <Item>
                <div className="cal">
                    MON
                    <span className="num">13</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>

            <Item>
                <div className="cal">
                    MON
                    <span className="num">13</span>
                </div>
                <div className="content">Visual Design Assignment</div>
            </Item>
        </Container>
    );
};

export default List;
