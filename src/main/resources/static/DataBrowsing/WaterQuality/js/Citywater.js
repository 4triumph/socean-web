
// var uploadedDataURL = 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full';
var uploadedDataURL = 'DataBrowsing/WaterQuality/data.json';
var geoGpsMap = [121.4648, 31.2891];
var t = 1;
var r = 1;
//所有地点坐标
var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山东: [117.1582, 36.8701],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
};

var d1 = {
    辽宁:54806,
    河北:6209,
    天津:8935,
    山东:67796,
    江苏:5146,
    上海:25921,
    浙江:186329,
    福建:196767,
    广东:67030,
    广西:10730,
    海南:27761,
};
var d2 = {
    辽宁:52534,
    河北:7123,
    天津:7037,
    山东:64771,
    江苏:4752,
    上海:24598,
    浙江:206877,
    福建:156516,
    广东:71487,
    广西:11901,
    海南:28446,
};
var d3 = {
    辽宁:48548,
    河北:52510,
    天津:1866,
    山东:77735,
    江苏:5244,
    上海:24640,
    浙江:206736,
    福建:325424,
    广东:84815,
    广西:10109,
    海南:28798,
};
var d4 = {
    辽宁:42366,
    河北:31350,
    天津:3911,
    山东:82858,
    江苏:5535,
    上海:26504,
    浙江:214476,
    福建:219589,
    广东:123669,
    广西:19827,
    海南:31003,
};
var d5 = {
    辽宁:41691,
    河北:57237,
    天津:4918,
    山东:90547,
    江苏:6070,
    上海:28245,
    浙江:209630,
    福建:138637,
    广东:81563,
    广西:19760,
    海南:34696,
};
var d6 = {
    辽宁:5814,
    河北:47420,
    天津:5715,
    山东:92627,
    江苏:8556,
    上海:27597,
    浙江:202221,
    福建:189769,
    广东:91188,
    广西:20177,
    海南:36705,
};
var d7 = {
    辽宁:4744,
    河北:39131,
    天津:5825,
    山东:94488,
    江苏:7548,
    上海:22040,
    浙江:219219,
    福建:193031,
    广东:106372,
    广西:16472,
    海南:41330,
};
var colors = ['#1DE9B6', '#EEDD78', '#FFFF00', '#FFDB5C', '#37A2DA', '#04B9FF', '#37A2DA', '#04B9FF'];
var colorIndex = 0;
$(function () {
    var chart = echarts.init(document.getElementById('city_water_chart'));
    var year = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', ]
    var mapData = [[], [], [], [], [], [], [], []];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '2016',
            name: key,
            value: d1[key] ,
            value1: d1[key],
        });
        mapData[1].push({
            year: '2017',
            name: key,
            value: d2[key] ,
            value1: d2[key],
        });
        mapData[2].push({
            year: '2018',
            name: key,
            value: d3[key] ,
            value1: d3[key] ,
        });
        mapData[3].push({
            year: '2019',
            name: key,
            value: d4[key] ,
            value1: d4[key] ,
        });
        mapData[4].push({
            year: '2020',
            name: key,
            value: d5[key] ,
            value1: d5[key] ,
        });
        mapData[5].push({
            year: '2021',
            name: key,
            value: d6[key] ,
            value1: d6[key] ,
        });
        mapData[6].push({
            year: '2020',
            name: key,
            value: d7[key] ,
            value1: d7[key] ,
        });

    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function (geoJson) {
        $('body').css({
            background:
                'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        });

        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        var convertToLineData = function (data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps;
                if (fromCoord && toCoord) {
                    if (t == 1) {
                        res.push([
                            {
                                coord: toCoord,
                            },
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                        ]);
                    } else {
                        res.push([
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                            {
                                coord: toCoord,
                            },
                        ]);
                    }
                }
            }
            if (t == 0) {
                t = 1;
            } else {
                t = 0;
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500, //时间间隔
                left: '20%',
                right: '10%',
                bottom: '3%',
                width: '60%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#FFFFFF',
                },
                checkpointStyle: {
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#333',
                        borderColor: '#555',
                    },
                    emphasis: {
                        color: '#FFFFFF',
                        borderColor: '#aaa',
                    },
                },
            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%',
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(255,255,200,1)', //hover颜色
                        },
                    },
                },
                visualMap: {
                    min: 0,
                    max: 500000,
                    left:'5%',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'black',
                    },
                    calculable: true,
                    colorLightness: [1, 150],
                    color: ['#2828FF', '#0066CC', '#97CBFF'],
                    dimension: 0,
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(10, 50, 60, 0.8)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'white',
                                x: 0.6,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(10, 10, 60,0.5)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(30, 40, 38,1)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(0, 0, 200, 9)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            areaColor: '#FCFFD9',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = '污水量（万吨）';
            optionXyMap01.options.push({
                backgroundColor: '#D1EEEE',

                title: [
                    {
                        text: '2016-2022年沿海各省直排海污染源污水排放量\n',
                        left: '20%',
                        top: '3%',
                        textStyle: {
                            color: '#000079',
                            fontSize: 26,
                        },
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '80%',
                        top: '8%',
                        textStyle: {
                            color: '#339',
                            fontSize: 18,
                        },
                    },
                ],
                grid: {
                    right: 50,
                    top: 85,
                    bottom: 1,
                    width: '200',
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 5,
                        textStyle: {
                            color: '#242424',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#242424',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#242424',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#242424',
                        },
                    },
                    data: categoryData[n],
                },

                series: [
                    {
                        //文字和标志
                        name: 'water',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 5000;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'left',
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#242424',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#00C5CD',
                                borderColor: '#0000CD',
                            },
                            emphasis: {
                                areaColor: '#242424',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },

                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 30,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [255, 30, 200, 1],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
            if (r == 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        chart.setOption(optionXyMap01);
    });
});
