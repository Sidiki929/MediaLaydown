



const StatisticsChart1 = ({ title, net, footer }) => {
    const options = {
      chart: {
        type: 'line',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
    };
  
    const series = [
      {
        name: 'Net',
        data: [0, 12398, 12398, 0, 0, 0, 0, 0, 30000, 20000, 30000, 10000], // Remplacez par vos données réelles
      },
    ];
  
    return (
      <div>
        <h3>{title}</h3>
        <ApexCharts options={options} series={series} type="line" height={350} />
        {footer}
      </div>
    );
  };