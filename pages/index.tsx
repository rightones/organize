import Dashboard from "components/Dashboard";
import { NextPage } from "next";
import Image from "next/image";
import banner from "public/image/banner.png";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Banner = styled.div`
    display: flex;
    padding: 40px 20px;
    position: relative;
    margin-left: calc(calc(100vw - 1000px) / 2);

    @media screen and (max-width: 1000px) {
        margin-left: 0;
    }
`;

const nth = function (d: number) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

const fortnightAway = new Date();
const date = fortnightAway.getDate();
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
][fortnightAway.getMonth()];

const MainPage: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem("name")) router.push("/setting");
    }, []);
    return (
        <>
            <Banner>
                <h1>
                    Say Hello to
                    <br />
                    your life organizer
                    <br />
                    <button>Get Started</button>
                </h1>
                <div
                    style={{
                        position: "absolute",
                        right: 100,
                        top: 0,
                        bottom: 0,
                        width: 600,
                        zIndex: -1,
                    }}
                >
                    <Image
                        src={banner}
                        layout="fill"
                        alt="logo"
                        className="image"
                        objectFit="cover"
                        objectPosition="50% 30%"
                    />
                </div>
            </Banner>
            <div
                style={{
                    background: "white",
                    padding: "40px",
                }}
            >
                <div
                    style={{ textAlign: "center", marginBottom: "40px" }}
                    className="section"
                >
                    <h3 style={{ fontWeight: "normal" }}>
                        Welcome back,{" "}
                        {typeof window !== "undefined"
                            ? localStorage.getItem("name")
                            : " "}
                        !
                    </h3>
                    <strong>
                        {month} {date}
                        {nth(date)}
                    </strong>
                </div>
                <Dashboard />
            </div>
        </>
    );
};

export default MainPage;
