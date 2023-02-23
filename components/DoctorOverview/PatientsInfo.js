import AppointmentInfoCard from "./AppointmentInfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons"
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import BarChart from "../common/Charts/BarChart";

function PatientsInfo(props){
    const [chartData, setChartData] = useState({
        labels: [2022],
        datasets: [{
            label: "Old patients",
            data: [72000],
            backgroundColor: "#ff5363"
        },
        {
            label: "New patients",
            data: [24400],
            backgroundColor: "#ffa901"
        }
    ]
    })

    const [chartOptions, setChartOptions] = useState({
            plugins: {
              title: {
                display: true,
                text: 'Growth in patients'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
        })

    const action = <select className = "text-[13px] py-1 px-4 mb-2 rounded text-gray-400" id = "years" >
                    <option value = {2022} selected>2022</option>
                    <option value = {2021}>2021</option>
                    <option value = {2020}>2020</option>
                    <option value = {2019}>2019</option>
                </select>

    return(
        <AppointmentInfoCard className = "w-[100%]" header = "Patients" action = {action}>
            <div className = "flex w-[100%] items-center py-4 px-4">
                <div className = "mr-4">
                    <div className = "flex my-6 mb-8 mx-4">
                        <div className = "h-[40px] w-[40px] rounded-full text-[#42aae9] bg-[#e9f6fe] flex justify-center items-center">
                            <FontAwesomeIcon icon = {faUser} />
                        </div>
                        <div className = "mx-4 mr-6 flex-grow">
                            <h3 className = "font-bold text-xl">24.4k</h3>
                            <p className = "text-xs text-gray-600">New Patients</p>
                        </div>
                        {/* <div className = "text-xs text-indigo-600">
                            <FontAwesomeIcon icon = {faArrowUp} />
                            15%
                        </div> */}
                    </div>
                    <div className = "flex my-6 mx-4">
                        <div className = "h-[40px] w-[40px] rounded-full text-[#eead2b] bg-[#fff6e5] flex justify-center items-center">
                            <FontAwesomeIcon icon = {faUser} />
                        </div>
                        <div className = "mx-4 mr-6 flex-grow">
                            <h3 className = "font-bold text-xl">166.3k</h3>
                            <p className = "text-xs text-gray-600">Old Patients</p>
                        </div>
                        {/* <div className = "text-xs text-indigo-600">
                            <FontAwesomeIcon icon = {faArrowUp} />
                            15%
                        </div> */}
                    </div>
                </div>
                <BarChart data = {chartData} options = {chartOptions} className = "w-[50%] h-[100%] flex-grow mr-4" />
            </div>
        </AppointmentInfoCard>
    )
}

export default PatientsInfo;