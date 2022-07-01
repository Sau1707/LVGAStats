import React from 'react'
import useWindowSize from '../customHook/useWindowSize'
import regression from 'regression'
import { Line } from 'react-chartjs-2'

function Graph(props) {
    const size = useWindowSize()
    const data = {
        labels: Object.keys(props.data),
        datasets: [
            {
                label: 'Last Month',
                data: Object.values(props.data),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 0,
                pointHitRadius: size.width / 30,
            },
            {
                label: 'Trendline',
                data: regression
                    .linear(
                        Object.keys(props.data).map((e, i) => [
                            i,
                            props.data[e],
                        ])
                    )
                    .points.map((e) => e[1]),
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                pointRadius: 0,
                pointHitRadius: 0,
            },
        ],
    }

    const options = {
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    stacked: false,
                    gridLines: {
                        color: 'rgba(120, 120, 120, 0.3)',
                        drawBorder: false,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        color: 'blue',
                        display: false,
                    },
                },
            ],
        },
    }

    return <Line data={data} options={options} redraw />
}

//  width={size.width*2*0.7} height={size.height*0.7}  updateMode={"resize"}
export default Graph
