window.chartColors = {
    piRed: 'rgb(147,20,20)',
    red: 'rgb(244,67,54)',
    orange: 'rgb(255, 159, 64)',
    black: 'rgb(33,33,33)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    lime: 'rgb(205,220,57)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    pink: 'rgb(194,24,91)',
    lightGreen: 'rgb(139,195,74)',
    brown: 'rgb(121,85,72)',
    indigo: 'rgb(48,63,159)'
};

var contentColorItems = function() {
		var canvas = document.getElementById('contentItemsBarChart');
 
		var channelNames = ["Sky Sports 2", "Sky Sports 2", "Sky Sports 2", "Sky Sports 2", "Premier Sports", "Sky Sports 2", "Sky Sports 2", "BBC4", "Spike", "BBC1 North", "Sky Cinema Action &amp; Adventure", "Sky Cinema Action &amp; Adventure", "Premier Sports", "STV North+1", "Premier Sports"];
 

		var watchCount = [152568, 84598, 48660, 32633, 28983, 24235, 23647, 22119, 20286, 20270, 17486, 15688, 15349, 15237, 14737];

    var data = {
        labels: channelNames,
        datasets: [
            {
                label: "Watchers",
                backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            window.chartColors.lime,
                            window.chartColors.black,
                            window.chartColors.yellow,
                            window.chartColors.green,
                            window.chartColors.blue,
                            window.chartColors.brown,
                            window.chartColors.purple,
                            window.chartColors.pink,
                            window.chartColors.lightGreen,
                            window.chartColors.indigo,
                            window.chartColors.grey
                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(244,67,54,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: watchCount
            }
        ]
    };

    var option = {
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                },
                stacked:true,
                gridLines: {
                    display:true,
                    color:"rgba(255,99,132,0.2)"
                }
            }],
            xAxes:[{
                ticks: {
                    display: true,
                    callback: function(value, index, values) {
                      if(value.length > 5){
                        return  value.substring(0,5)+'...';
                      } else {
                        return value;
                      }
                    }
                },

                gridLines: {
                    display:false
                }
            }]
        },
        tooltips: {
            backgroundColor: 'rgba(2,136,209,.8)',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
            caretSize: 8,
            position: 'nearest',
            mode: 'label',
            callbacks: {
                title: function(tooltipItems, data) {
                  var ind = 0;
                    tooltipItems.forEach(function(tooltipItem) {
                      ind = tooltipItem.index;
                    });
                    return data.labels[ind];
                }
            }
        }
    };
    
    contentItemsBarChart = Chart.Bar(canvas, {
        data:data,
        options:option
    });
};

var colorizedBarChart = function() {
	
};

contentColorItems();
colorizedBarChart();

    
 