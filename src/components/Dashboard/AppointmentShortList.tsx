import React from "react";

const AppointmentShortList = ({ appointments }: any) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">
                        Name
                    </th>
                    <th className="text-secondary" scope="col">
                        Phone
                    </th>
                    <th className="text-secondary" scope="col">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment: any, index: any) => (
                    <tr key={index}>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;
