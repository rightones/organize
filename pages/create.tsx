import { NextPage } from "next";
import Image from "next/image";
import logo from "public/image/logo.svg";

const MainPage: NextPage = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "40px 0",
            }}
        >
            <h1>
                Say Hello
                <br />
                to your life organizer
                <br />
                <button>Get Started ></button>
            </h1>
            <Image
                src={logo}
                width={140}
                height={140}
                alt="logo"
                className="image"
            />
        </div>
    );
};

export default MainPage;
