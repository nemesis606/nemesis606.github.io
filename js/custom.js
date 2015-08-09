$(document).ready(function(){
    var data = {
        labels: ['HTML5','CSS3','SASS','JQUERY','PHP','Wordpress'],
        series: [
            [9, 10, 9, 8, 8, 6]
        ]

    }
    var options = {
        seriesBarDistance: 5
    };

    new Chartist.Bar('.ct-chart', data, options);
});