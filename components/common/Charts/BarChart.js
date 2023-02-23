import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function BarChart(props){
    return(
        <div className = {`${props.className}`}>
            <Bar data = {props.data} options = {props.options}/>
        </div>
    )
}

export default BarChart;