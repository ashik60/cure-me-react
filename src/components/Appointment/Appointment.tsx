import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import AppointmentHeader from "./AppointmentHeader";
import BookAppointment from "./BookAppointment";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        console.log(date);
    };
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate}/>
            <Footer />
        </div>
    );
};

export default Appointment;
