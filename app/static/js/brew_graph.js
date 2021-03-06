Highcharts.setOptions({
    time: {
        useUTC: false
    }
});

Highcharts.chart(graph_data.chart_id, {
  chart: {
    type: 'spline',
    zoomType: 'xy'
  },

  credits: {
    enabled: false
  },

  colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

  plotOptions: {
    spline: {
      marker: {
        enabled: true
      }
    }
  },

  title: graph_data.title,

  subtitle: graph_data.subtitle,

  xAxis: {
    type: 'datetime',
    title: {
      text: 'Time'
    },
    plotLines: graph_data.xaplotlines
  },

  yAxis: {
    title: {
      text: 'Temperature (F)'
    },
    min: 0
    //max: 230
  },

  series: graph_data.series,
});
