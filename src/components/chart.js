import React, { Component } from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.renderChart = this.renderChart.bind(this);
    }

    componentDidMount() {
        this.renderChart(this.props.cityName, this.props.chartData);
    }

    renderChart(cityName, data) {
        var chartData = constructData(data);
        var city = this.props.cityName.replace(/\s+/g, '-').toLowerCase();
        var chartContainer = d3.select("." + city);

        var w = chartContainer.node().getBoundingClientRect().width;;
        var h = chartContainer.node().getBoundingClientRect().height;;

        var padding = {
            top: 30,
            right: 20,
            bottom: 40,
            left: 35
        };
        var width = w - padding.left - padding.right;
        var height = h - padding.top - padding.bottom;

        var timeFormat = d3.time.format("%H %p");
        var xscale = d3.time.scale()
            .domain(d3.extent(chartData, function (d) {
                return (d.time);
            }))
            .range([0, width])
            ;
        var yscale = d3.scale.linear()
            .domain([0, d3.max(chartData, function (d) { return d.cel; })])
            .range([height, 0]);

        xscale.domain(d3.extent(chartData, function (d) { return d.time; }));
        yscale.domain(d3.extent(chartData, function (d) { return d.cel; }));

        var xAxis = d3.svg.axis()
            .scale(xscale)
            .tickFormat(function (d) {
                var time = timeFormat(d);
                if (time === "00 AM") {
                    return "12 AM";
                }
                return timeFormat(d);
            })
            .ticks(0)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(yscale)
            .ticks(3)
            .orient('left');

        var line = d3.svg.line().interpolate("basis")
            .x(function (d) { return xscale(d.time); })
            .y(function (d) { return yscale(d.cel); });

        var svg = chartContainer
            .attr('width', w)
            .attr('height', h)
            ;

        var chart = svg
            .append('g')
            .classed('svg', true)
            .attr('transform', 'translate(' + padding.left + ' ,' + padding.top + ')')
            ;

        chart.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "translate(10, 20)")
            .attr("y", 1)
            .attr("dy", 1)
            .attr("text-anchor", "beginning")
            .text("Next 24Hrs")
            .selectAll("text")
            .attr("transform", "rotate(0) translate(10,10)")
            ;

        chart.append("g")
            .attr("class", "y-axis")
            .call(yAxis)
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "translate(-20, -10)")
            .attr("y", 1)
            .attr("dy", 1)
            .attr("text-anchor", "beginning")
            .text("Temp\u2103")
            ;

        chart.append("path")
            .attr("class", "line")
            .attr("d", line(chartData))
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 3)
            .attr('fill', 'none')
            ;
    }

    render() {
        var city = this.props.cityName.replace(/\s+/g, '-').toLowerCase();
        return (
            <svg className={"chart " + city}></svg>
        );
    }
}

function constructData(data) {
    return data.map((hourlyData) => {
        var output = {};
        var time = hourlyData.FCTTIME.epoch;
        var cel = hourlyData.temp.metric;
        var far = hourlyData.temp.english;
        var humidity = hourlyData.humidity;

        output["time"] = parseInt(time * 1000);
        output["cel"] = parseInt(cel);
        output["far"] = parseInt(far);
        output["hum"] = parseInt(humidity);

        return output;
    });
}

export default Chart;