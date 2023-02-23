import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function DoughnutChart(props){
    return(
        <div className = {`${props.className}`}>
            <Doughnut data = {props.data} options = {props.options} />
        </div>
    )
}

export default DoughnutChart;