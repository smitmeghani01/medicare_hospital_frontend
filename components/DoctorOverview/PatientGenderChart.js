import DoughnutChart from "../common/Charts/DoughnutChart";
import AppointmentInfoCard from "./AppointmentInfoCard";
import { useState } from "react";

function PatientGenderChart(props){
    const [chartData, setChartData] = useState({
        labels: ["Male", "Female", "Other"],
        datasets: [{
            label: "Patient Gender Data",
            data: [10000, 10000, 4000],
            backgroundColor: ["#ff5363", "#ffa901", "#6366f1"]
        }],
    })

    const action = <select className = "text-[13px] py-1 px-4 mb-2 rounded text-gray-400" id = "years" >
                    <option value = {2022} selected>2022</option>
                    <option value = {2021}>2021</option>
                    <option value = {2020}>2020</option>
                    <option value = {2019}>2019</option>
                </select>

    return(
        <AppointmentInfoCard header = "Patient Gender" action = {action}>
            <div className = "py-4 flex justify-center w-[100%]">
                <DoughnutChart data = {chartData} />
            </div>
        </AppointmentInfoCard>
    )
} 

export default PatientGenderChart;