import styled from "styled-components";
import List from "./List";
import Overview from "./Overview";

const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    margin: 20px auto;
    border-radius: 24px;
    background-color: white;
    width: 100%;
    max-width: 1000px;
    gap: 20px;
    height: 300px;
`;

const Dashboard = () => {
    return (
        <Container className="section">
            <Overview />
            <List />
        </Container>
    );
};

export default Dashboard;
