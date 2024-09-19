import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const MultipleAreaCharts = () => {
  const [mode, setMode] = useState('light'); // Mode light par défaut

  // Options du graphique
  const chartOptions = {
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    series: [
      {
        name: 'Income',
        data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000]
      },
      {
        name: 'Outcome',
        data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000]
      }
    ],
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    grid: {
      strokeDashArray: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8
      }
    },
    xaxis: {
      type: 'category',
      categories: [
        '25 January 2023', '26 January 2023', '27 January 2023', '28 January 2023', '29 January 2023',
        '30 January 2023', '31 January 2023', '1 February 2023', '2 February 2023', '3 February 2023',
        '4 February 2023', '5 February 2023'
      ],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        stroke: {
          dashArray: 0
        },
        dropShadow: {
          show: false
        }
      },
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        formatter: (title) => {
          const newT = title.split(' ');
          return `${newT[0]} ${newT[1].slice(0, 3)}`;
        }
      }
    },
    yaxis: {
      labels: {
        align: 'left',
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value)
      }
    },
    tooltip: {
      x: {
        format: 'MMMM yyyy'
      },
      y: {
        formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
      }
    },
    responsive: [
      {
        breakpoint: 568,
        options: {
          chart: {
            height: 300
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '11px'
              },
              formatter: (title) => title.slice(0, 3)
            }
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '11px'
              },
              formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value)
            }
          }
        }
      }
    ]
  };

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={300} />
    </div>
  );
};

export default MultipleAreaCharts;
