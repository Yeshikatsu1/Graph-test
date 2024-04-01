document.addEventListener('DOMContentLoaded', function () {
    const chartContainer = document.getElementById('chart-container');
  
    const chart = Highcharts.chart(chartContainer, {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Chart'
      },
      series: [{
        name: 'Data',
        data: []
      }]
    });
  
    const rows = document.querySelectorAll('#data-table tbody tr');
    rows.forEach(row => {
      row.addEventListener('click', function () {
        const name = this.querySelector('td:first-child').textContent;
        const values = JSON.parse(this.getAttribute('data-values'));
  
        chart.series[0].update({ data: values });
  
        chart.setTitle({ text: name });
      });
    });
  });
  