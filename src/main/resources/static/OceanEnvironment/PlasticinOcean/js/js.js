
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();

    function echarts_1(){
        var myChart = echarts.init(document.getElementById('echart1'));
        var option = {
            title: {
                left: "center",
                subtext: "全球塑料垃圾进入海洋的途径。链条的每个阶段都以每年百万吨塑料为单位",
                subtextStyle:{
                    fontSize:16
                }
            },
            tooltip: {
                formatter: function(params) {
                    return params.name + ': ' + params.value + ' 百万吨';
                }
            },
            legend: {
                data: ["塑料垃圾"],
                top: 60
            },
            grid: {
                top: 110,
                left: '20%',
            },
            xAxis: {//配置x轴，x轴和y轴互换
                type: "value"       //值轴
            },
            yAxis: {
                type: "category",
                data: ['运输到海洋',  '泄漏到河流和海岸', '泄漏到环境中', '管理不善和乱扔塑料垃圾', '产生的塑料垃圾'],
                axisLabel: {
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            series: [
                {
                    name: "塑料垃圾",
                    type: "bar",
                    data: [ 1.7, 6, 19, 82, 353],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c} 百万吨',
                        textStyle: {
                            fontSize: 16
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1890ff'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });

    }

    function echarts_2(){
        var myChart = echarts.init(document.getElementById('echart2'));
        var option = {

            title: {
                left: "center",
                subtext: "聚合物树脂和纤维的年产量",
                subtextStyle: {
                    fontSize:16,
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['塑料年产量'],
                top:60,
                textStyle: {
                    fontSize: 16
                }
            },
            grid: {
                left: '4%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'
                ],
                axisLabel: {
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            yAxis: {
                name:'百万吨',
                type: 'value',
                axisLabel: {
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            series: [
                {
                    name: '塑料年产量',
                    type: 'line',
                    stack: 'Total',
                    data: [
                        2, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 11, 13, 15, 17, 20, 23, 27, 32, 35, 38, 44, 51, 46, 54, 59, 64, 71, 70, 72, 73, 80, 86, 90, 96, 104, 110, 114, 120, 124, 132, 137, 151, 156, 168, 180, 188, 202, 213, 218, 231, 241, 256, 263, 280, 295, 281, 288, 313, 325, 338, 352, 367, 381, 400.05, 420.0525, 441.05514, 459.74602]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));

        var option = {
            tooltip: {
                formatter: '{b} <br />塑料：{c}百万磅'
            },
            color: ['#00BFFF', '#1E90FF', '#6495ED', '#87CEFA', '#87CEEB', '#4682B4'],

            series: [{
                name: '所有区域',
                type: 'treemap',
                visibleMin: 100,
                top: 30,
                data: [{
                    value: 192.8,
                    id: 'someid-1',
                    name: '北太平洋 198.2 百万'
                }, {
                    value: 188.3,
                    id: 'someid-2',
                    name: '印度洋 188.3 百万'
                }, {
                    value: 112.9,
                    id: 'someid-3',
                    name: '北大西洋 112.9 百万'
                }, {
                    value: 46.3,
                    id: 'someid-4',
                    name: '地中海 46.3 百万'
                }, {
                    value: 42.0,
                    id: 'someid-5',
                    name: '南太平洋 42.0 百万'
                }, {
                    value: 25.6,
                    id: 'someid-6',
                    name: '南大西洋 25.6 百万'
                }],
                leafDepth: 2,
                levels: [{
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(2,93,199,0.84)',
                            borderWidth: 10,
                            gapWidth: 4
                        }
                    }
                }, {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 5,
                            borderWidth: 2
                        }
                    }
                }, {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                }, {
                    colorSaturation: [0.3, 0.5]
                }],
                breadcrumb: {
                    top: 550,
                    itemStyle: {
                        normal: {
                            color: '#1E90FF',
                            fontSize: 30,
                            width: 50,
                            height:30
                        }
                    }
                }
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_4(){
        var myChart = echarts.init(document.getElementById('echart4'));

        var option = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + '<br/>' + '百分比：' + params.value;
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        fontWeight: 'bold',
                        textStyle: {
                            fontSize: 16
                        }
                    },
                    data: [
                        { value: 14.1, name: '塑料袋', itemStyle: {color:'#6BA0D9'}},
                        { value: 11.9, name: '塑料瓶', itemStyle: {color:'#4E8AD9'}},
                        { value: 9.4, name: '食品容器/餐具', itemStyle: {color:'#3280D9'}},
                        { value: 9.1, name: '包装', itemStyle: {color:'#1D6CD9'}},
                        { value: 7.9, name: '合成绳', itemStyle: {color:'#0057D9'}},
                        { value: 7.6, name: '钓鱼项目', itemStyle: {color:'#007FFF'}},
                        { value: 6.1, name: '塑料盖/盖子', itemStyle: {color:'#00A6FF'}},
                        { value: 3.4, name: '工业包装', itemStyle: {color:'#33ADFF'}},
                        { value: 3.4, name: '玻璃瓶', itemStyle: {color:'#4FB9FF'}},
                        { value: 3.4, name: '饮料罐', itemStyle: {color:'#6AC5FF'}},
                        { value: 3.4, name: '其他', itemStyle: {color:'#86D1FF'}},
                        { value: 3.4, name: '纤维板', itemStyle: {color:'#A1DDFF'}}
                    ]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5(){
        var myChart = echarts.init(document.getElementById('echart5'))
        var res = {
            "success": true,
            "errMsg": "ok",
            "data": [
                {"name": "南美洲",  "plts": [
                        {"name": "稻草", "rate": 139285},
                        {"name": "其他袋子", "rate": 112109},
                        {"name": "购物袋", "rate": 54445},
                        {"name": "食品包装", "rate": 92520},
                        {"name": "食品容器塑料", "rate": 293455},
                        {"name": "食品容器泡沫", "rate": 330194},
                        {"name": "杯盘", "rate": 252396},
                        {"name": "烟头", "rate": 642401},
                        {"name": "瓶盖", "rate": 259309},
                        {"name": "饮料瓶", "rate": 435289}
                    ]},
                {"name": "欧洲",  "plts": [
                        {"name": "稻草", "rate": 13858},
                        {"name": "其他袋子", "rate": 8299},
                        {"name": "购物袋", "rate": 9621},
                        {"name": "食品包装", "rate": 28675},
                        {"name": "食品容器塑料", "rate": 2566},
                        {"name": "食品容器泡沫", "rate": 3127},
                        {"name": "杯盘", "rate": 4083},
                        {"name": "烟头", "rate": 221194},
                        {"name": "瓶盖", "rate": 29763},
                        {"name": "饮料瓶", "rate": 17102}
                    ]},
                {"name": "亚洲",  "plts": [
                        {"name": "稻草", "rate": 70874},
                        {"name": "其他袋子", "rate": 290823},
                        {"name": "购物袋", "rate": 402341},
                        {"name": "食品包装", "rate": 474881},
                        {"name": "食品容器塑料", "rate": 53587},
                        {"name": "食品容器泡沫", "rate": 68993},
                        {"name": "杯盘", "rate": 109568},
                        {"name": "烟头", "rate": 194164},
                        {"name": "瓶盖", "rate": 135059},
                        {"name": "饮料瓶", "rate": 296978}
                    ]},
                {"name": "非洲",  "plts": [
                        {"name": "稻草", "rate": 11886},
                        {"name": "其他袋子", "rate": 28012},
                        {"name": "购物袋", "rate": 15270},
                        {"name": "食品包装", "rate": 97089},
                        {"name": "食品容器塑料", "rate": 14151},
                        {"name": "食品容器泡沫", "rate": 16927},
                        {"name": "杯盘", "rate": 4880},
                        {"name": "烟头", "rate": 121789},
                        {"name": "瓶盖", "rate": 43520},
                        {"name": "饮料瓶", "rate": 121071}
                    ]},
                {"name": "北美洲",  "plts": [
                        {"name": "稻草", "rate": 985},
                        {"name": "其他袋子", "rate": 1065},
                        {"name": "购物袋", "rate": 902},
                        {"name": "食品包装", "rate": 6191},
                        {"name": "食品容器塑料", "rate": 891},
                        {"name": "食品容器泡沫", "rate": 621},
                        {"name": "杯盘", "rate": 34},
                        {"name": "烟头", "rate": 6025},
                        {"name": "瓶盖", "rate": 2430},
                        {"name": "饮料瓶", "rate": 4025}
                    ]}
            ]
        };

        var lightBlueColor = ['#86afbd', '#58cbee', '#87cefa',
            '#b0e0e6', '#87ceeb', '#87cefa',
            '#4682b4', '#5eb5d0', '#17a5d2',  '#add8e6'];

        var citylist = [];
        var data = [];

// 将数据中的每个洲和材料的颜色设置为对应的淡色系颜色
        res.data.forEach((v, i) => {
            citylist.push({
                name: v.name,
                itemStyle: {
                    color: lightBlueColor[i] // 淡蓝色系
                }
            });
            v.plts.forEach((val, j) => {
                if (i === 0) {
                    citylist.push({
                        name: val.name,
                        itemStyle: {
                            color: lightBlueColor[j] // 淡蓝色系
                        }
                    });
                }
                data.push({
                    target: v.name,
                    source: val.name,
                    value: val.rate,
                    lineStyle: {
                        color: lightBlueColor[j] // 淡蓝色系
                    }
                });
            });
        });

        var option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: function (o) {
                    if (o.dataType !== "edge") {
                        return '';
                    }
                    return o.data.source + ' - ' + o.data.target + "：" + o.data.value + '%'
                }
            },
            series: [
                {
                    type: 'sankey',
                    data: citylist,
                    links: data,
                    top: '10%',
                    right: '10%',
                    bottom: '5%',
                    nodeWidth: 80,
                    nodeGap: 0,
                    focusNodeAdjacency: 'allEdges',
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            borderColor: '#fff',
                            opacity: 1
                        }
                    },
                    label: {
                        normal: {
                            align: 'center',
                            padding: [0, 0, 0, -90],
                            fontSize: '14',
                            color: '#fff'
                        }
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0.5,
                            opacity: 0.5
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})