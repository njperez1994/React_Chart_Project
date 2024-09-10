import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var oilPrices = [72, 56, 29, 36, 80, 60, 50, 30, 35, 35, 40, 60];
var goldPrices = [60, 62, 58, 61, 63, 65, 64, 62, 61, 64, 66, 68];  // Sample oil prices
var meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var misoptions = {
    animation:true,
    responsive: true,
    plugins: {
        legend:{
            display:true
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;  // Show decimal in tooltip for all datasets
                }
            }
        }
    },
    scales: {
        y: {
            min:0,
            max:100,
            ticks: {
                callback: function(value) {
                    return value.toFixed(2);  // Show decimal in Y-axis labels
                }
            }
        },
        x: {
            ticks: { color: 'rgba(0, 220, 195)' }
        }
    }
};

var midata = {
    labels: meses,
    datasets: [        
        {
            label: 'Gold Price',
            fill: true,
            data: goldPrices,  // Gold price data
            backgroundColor: 'rgba(255, 215, 0, 0.5)',  // Golden color with transparency
            borderColor: 'rgba(255, 215, 0, 1)',  // Solid golden color for the line
            tension: 0.3  // Smooth line
        },
        {
            label: 'Oil Price',
            fill: true,
            data: oilPrices,  // Oil price data
            backgroundColor: 'rgba(255, 99, 132, 0.5)',  // Light red color with transparency
            borderColor: 'rgba(255, 99, 132, 1)',  // Solid red color for the oil price line
            tension: 0.3  // Smooth line
        }
    ]
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions} />;
}
