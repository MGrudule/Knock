export const resourceChartData = {
  type: 'doughnut',
  cutoutPercentage: 90,
  data: {

    datasets: [
      {
        labels: [ 'Lift', 'Take Photos', 'Film', 'Big Data', 'Camera', '3d Printer', 'Rake'],
        data: [1, 1, 1, 1, 1, 1, 1],
        backgroundColor: [
          'rgba(71, 183,132,1)', // Blue
          'rgba(71, 183,132,1)',
          'rgba(71, 183,132,1)',
          'rgba(171, 83,132,1)',
          'rgba(64,73,93,1)',
          'rgba(64,73,93,1)',
          'rgba(64,73,93,1)',

        ],

        borderWidth: 1
      },

      { // another line graph

        labels: ["I can", "I'm interested in", "I have"],
        data: [3, 1, 3],
        backgroundColor: [
          'rgba(71, 183,132,.5)',
          'rgba(171, 83,132,.5)',,
          'rgba(64,73,93,0.5)',// Green
        ],

        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    legend: {
            display: false,
        },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var index = tooltipItem.index;
                return dataset.labels[index] ;
            }
        }
      }

  }
}

export default resourceChartData;
