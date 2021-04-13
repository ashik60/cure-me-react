import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentsByDate from "./AppointmentsByDate";
import Sidebar from "./Sidebar";

// const containerStyle = {
//     position: "absolute",
//     backgroundColor: "#F4FDFB",
//     height: "100%",
// };

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch("http://localhost:5005/appointmentsByDate", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ date: selectedDate }),
        })
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, [selectedDate]);

    return (
        <section>
            <div
                style={{ position: "absolute", backgroundColor: "#F4FDFB", height: "100%" }}
                className="row container-fluid"
            >
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
