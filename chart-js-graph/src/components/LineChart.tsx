import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
);

export const LineChart = () => {
    const data: ChartData<"line", number[], string> = {
        labels: ["Пн", "Вт", "Ср", "Чт", "Пт"],
        datasets: [
            {
                label: "Количество кофе ☕",
                data: [1, 3, 2, 5, 4],
                borderColor: "rgba(107, 83, 151, 1)",
                tension: 0.3,
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "График потребления кофе за неделю",
            },
        },
    };

    return <Line data={data} options={options} />;
};
