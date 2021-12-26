import Image from "next/image";
import Link from "next/link";
import signature from "public/image/signature.svg";
import styled from "styled-components";

const Container = styled.a`
    text-decoration: none;

    @media ${({ theme }) => theme.screen.mobile} {
        width: 120px;
        display: flex;
        align-items: center;
    }
`;

const Logo = () => {
    return (
        <Link href="/" passHref>
            <Container>
                <Image
                    src={signature}
                    width={180}
                    height={48}
                    alt="logo"
                    className="image"
                />
            </Container>
        </Link>
    );
};

export default Logo;
