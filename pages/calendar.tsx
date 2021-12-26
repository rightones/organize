import { NextPage } from "next";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useEffect, useState } from "react";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const MainPage: NextPage = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                padding: "0 40px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "40px",
                    background: "white",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker<Date>
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </div>
    );
};

export default MainPage;
