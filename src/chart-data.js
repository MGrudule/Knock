export const planetChartData = {
  type: 'doughnut',
  cutoutPercentage: 90,
  data: {
    //labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [
      { // one line graph
        label: 'Number of Moons',
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: [
          'rgba(54,73,93,1)', // Blue
          'rgba(54,73,93,1)',
          'rgba(54,73,93,1)',
          'rgba(64,73,93,1)',
          'rgba(54,73,93,1)',
          'rgba(54,73,93,1)',
          'rgba(54,73,93,1)',
          'rgba(54,73,93,1)'
        ],

        borderWidth: 3
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,

  }
}

export default planetChartData;
