import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useLayoutEffect, useRef } from "react";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4px;
    border: 2px solid ${({ theme }) => theme.color.background};
    border-radius: 200px;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 400px;

    .background {
        background-color: ${({ theme }) => theme.color.background};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 200px;
        z-index: -1;
        transition: 0.3s ease-in-out;
        transition-property: opacity, transform;
    }
`;

const Item = styled.a<{ active: boolean }>`
    display: flex;
    text-decoration: none;
    border-radius: 200px;
    padding: 8px 24px;
    color: #777;
    font-size: 1rem;
    font-family: Outfit, sans-serif;
    justify-content: center;
    font-weight: normal;
    z-index: 1;

    position: relative;

    transition: all 0.3s ease-in-out;
    ${({ active }) =>
        active &&
        css`
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
            color: ${({ theme }) => theme.color.primary};
            font-weight: bold;
        `}
`;

const Slider = () => {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const width = (containerRef.current?.clientWidth ?? 8 - 8) / 3;
        let status = 0;
        switch (router.asPath) {
            case "/calendar":
                status = 1;
                break;
            case "/timeline":
                status = 2;
                break;
            case "/list":
                status = 3;
                break;
            default:
                status = 0;
        }
        if (status) {
            backgroundRef.current?.style.opacity = 1;
            backgroundRef.current?.style.transform = `translateX(${
                (status - 1) * 100
            }%)`;
        } else {
            backgroundRef.current?.style.opacity = 0;
        }
    }, [router.asPath]);

    return (
        <Container ref={containerRef}>
            <Link href="/calendar" passHref>
                <Item active={router.asPath === "/calendar"}>
                    <div className="background" ref={backgroundRef} />
                    Calendar
                </Item>
            </Link>
            <Link href="/timeline" passHref>
                <Item active={router.asPath === "/timeline"}>Timeline</Item>
            </Link>
            <Link href="/list" passHref>
                <Item active={router.asPath === "/list"}>List</Item>
            </Link>
        </Container>
    );
};

export default Slider;
