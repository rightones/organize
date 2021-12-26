import { NextPage } from "next";
import { useEffect, useState } from "react";

const MainPage: NextPage = () => {
    const [name, setName] = useState(localStorage.getItem("name") ?? "");

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);
    return (
        <div
            className="section"
            style={{
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </div>
    );
};

export default MainPage;
