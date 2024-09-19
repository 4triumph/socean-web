document.addEventListener('DOMContentLoaded', function() {
    // 确保DOM加载完成后再执行以下代码
    document.querySelector('.back-button').addEventListener('click', function() {
        window.location.href = 'ChinaCatalogue.html'; // 点击箭头时跳转到AnotherPage.html页面
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu-item');
    var currentPage = window.location.pathname.split('/').pop(); // 获取当前页面的文件名

    menuItems.forEach(function(item) {
        var link = item.getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active'); // 如果菜单项链接和当前页面相同，添加 active 类
        }
    });
});
$(window).load(function() {
    $(".loading").fadeOut()
});



// // 初始加载 echarts 数据（默认加载 2018 年数据）
// updateEchartsData('渤海');

// // 更新 echarts 数据的函数
// function updateEchartsData(area) {
//     // 这里根据选择的年份加载不同的数据，然后更新 echarts 图表的 option 对象
//     var chart_5_data= getChartDataForArea(area);
//
//     // 更新 echarts 图表
//     echart_5(chart_5_data);
// }

$(function () {

    // 监听海区选择变化
    $('#areaSelect').change(function() {
        var selectedArea = $(this).val(); // 获取选择的海区
        echarts_5(selectedArea); // 更新 echarts 数据
    });
    echarts_2();
    echarts_3();
    echarts_5('渤海');
    echarts_6();
    echarts_7();


    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));
        var hours = ['南海', '东海', '黄海', '渤海', '管辖海域'];
        var days = ['轻度', '中度', '重度'];

        var data = [
            [0,0,1510],[0,1,5380],[0,2,1480],[0,3,1480],[0,4,9850],
            [1,0,770],[1,1,4460],[1,2,110],[1,3,970],[1,4,6310],
            [2,0,1130],[2,1,10820],[2,2,0],[2,3,850],[2,4,12800]
        ];

        var option = {
            tooltip: {
                formatter: function (params) {
                    return '海域: ' + hours[params.value[0]] + '<br/>状态: ' + days[params.value[1]] + '<br/>数值: ' + params.value[2];
                }
            },
            visualMap: {
                max: 10000,
                calculable: true,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                dimension: 2,
                orient: 'vertical',
                left: 10,
                bottom: 10,
                text: ['高', '低'],  // 文本，默认为数值文本
                textStyle: {
                    color: '#fff' // 文本颜色
                }
            },
            xAxis3D: {
                type: 'category',
                name: '',
                data: hours,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff' // x 轴线颜色
                    }
                },
                axisLabel: {
                    color: '#ffffff' // x 轴标签颜色
                }
            },
            yAxis3D: {
                type: 'category',
                name: '',
                data: days,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff' // y 轴线颜色
                    }
                },
                axisLabel: {
                    color: '#ffffff' // y 轴标签颜色
                }
            },
            zAxis3D: {
                type: 'value',
                name: '',
                axisLine: {
                    lineStyle: {
                        color: '#ffffff' // z 轴线颜色
                    }
                },
                axisLabel: {
                    color: '#ffffff' // z 轴标签颜色
                }
            },
            grid3D: {
                boxWidth: 150,
                boxHeight: 80,
                boxDepth: 80,
                light: {
                    main: {
                        intensity: 1.2
                    },
                    ambient: {
                        intensity: 0.7
                    }
                }
            },
            series: [{
                type: 'bar3D',
                data: data.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]],
                        label: {
                            show: true,
                            textStyle: {
                                color: ['#313695', '#4575b4', '#74add1'][item[1]] // 数值对应的颜色
                            }
                        }
                    }
                }),
                shading: 'color',
                itemStyle: {
                    opacity: 0.9
                },
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 20,
                            color: '#5e0303'
                        }
                    },
                    itemStyle: {
                        color: '#5e0303'
                    }
                }
            }]
        };

        myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));

        var l1 = "优良";
        var l2 = "劣四类";

        var data1 = [
            ['2017年', l1, 70.7],
            ['2018年', l1, 71.3],
            ['2019年', l1, 76.6],
            ['2020年', l1, 77.4],
            ['2021年', l1, 81.3],
            ['2022年', l1, 81.9],
            ['2023年', l1, 85.0]
        ];

        var data2 = [
            ['2017年', l2, 12.6],
            ['2018年', l2, 13.5],
            ['2019年', l2, 11.7],
            ['2020年', l2, 9.4],
            ['2021年', l2, 9.6],
            ['2022年', l2, 8.9],
            ['2023年', l2, 7.9]
        ];
        option = ({


            //  grid3D
            grid3D: {
                show: true,
                boxWidth: 250,
                boxHeight: 200,
                boxDepth: 80,
                // background: '#003bc9', // 将背景颜色设置为白色
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                        opacity: 1,
                    },
                },
                axisPointer: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#666666',
                        width: 1,
                        type: 'solid',
                    },
                },

                environment: 'rgba(5,37,143,0.95)',

                viewControl: {
                    distance: 300,
                    alpha: 10,
                    beta: 30,
                    animation: true,
                    autoRotate: true,
                    rotateSpeed: 10,
                },
            },

            // 三维坐标轴
            xAxis3D: {
                max: 6,
                type: 'category',
                data: ['2017年', '2018年', '2019年', '2020年', '2021年', '2022年', '2023年'],
                name: '',
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    },
                    axisLabel: {
                        color: '#ffffff',
                    },
                },
            },
            yAxis3D: {
                name: '',
                type: 'category',
                data: [l2, l1],
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    },
                    axisLabel: {
                        color: '#ffffff',
                    },
                },
            },
            zAxis3D: {
                max: 100,
                name: '',
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    },
                    axisLabel: {
                        color: '#ffffff',
                    },
                },
            },
            tooltip: {
                trigger: 'item', // 设置 tooltip 触发方式为数据项触发
                formatter: function(params) { // 自定义 tooltip 的内容
                    var year = params.value[0];
                    var category = params.value[1];
                    var value = params.value[2];
                    return '年份：' + year + '<br>' + '类别：' + category + '<br>' + '数值：' + value;
                }
            },
            series: [
                {
                    type: 'line3D',
                    name: '优良',
                    lineStyle: {
                        width: 4,
                    },
                    data: data1,
                },
                {
                    type: 'line3D',
                    name: '劣四类',
                    color: '#00FFFF',
                    lineStyle: {
                        width: 4,
                    },
                    data: data2,
                }
            ],
            legend: {
                data: [l1, l2],
                textStyle: {
                    color: '#ffffff',
                },
            },
        });

        myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5(area) {
        var areadata = [];
        if (area == '渤海') {
            areadata = [10910, 3790, 2150, 7800];
        } else if (area == '黄海') {
            areadata = [9850, 1650, 1000, 1210];
        } else if (area == '东海') {
            areadata = [11190, 4030, 2370, 11350];
        } else if (area == '南海') {
            areadata = [2440, 1560, 1020, 4520];
        }
        var myChart = echarts.init(document.getElementById('echart5'));
        var data = [
            {
                name: "二类水质",
                value: areadata[0]
            },
            {
                name: "三类水质",
                value: areadata[1]
            },
            {
                name: "四类水质",
                value: areadata[2]
            },
            {
                name: "劣四类水质",
                value: areadata[3]
            }
        ];
        arrName = getArrayValue(data, "name");
        arrValue = getArrayValue(data, "value");
        sumValue = eval(arrValue.join('+'));
        objData = array2obj(data, "name");
        optionData = getData(data);

        function getArrayValue(array, key) {
            var key = key || "value";
            var res = [];
            if (array) {
                array.forEach(function(t) {
                    res.push(t[key]);
                });
            }
            return res;
        }

        function array2obj(array, key) {
            var resObj = {};
            for (var i = 0; i < array.length; i++) {
                resObj[array[i][key]] = array[i];
            }
            return resObj;
        }

        function getData(data) {
            var res = {
                series: [],
                yAxis: []
            };
            for (let i = 0; i < data.length; i++) {
                res.series.push({
                    name: '海域面积',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
                    center: ["36%", "50%"],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 5,
                        barBorderRadius: 20,
                    },
                    data: [{
                        value: data[i].value,
                        name: data[i].name
                    }, {
                        value: sumValue - data[i].value,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            barBorderRadius: 20
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }]
                });
                res.series.push({
                    name: '',
                    type: 'pie',
                    silent: true,
                    z: 1,
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
                    center: ["36%", "50%"],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 5,
                        barBorderRadius: 20,
                    },
                    data: [{
                        value: 12,
                        itemStyle: {
                            color: "#153A7F",
                            borderWidth: 4,
                            barBorderRadius: 20,
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }, {
                        value: 4.5,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)",
                            borderWidth: 4,
                            barBorderRadius: 20,
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }]
                });
                res.yAxis.push(data[i].value)
            }
            return res;
        }
        option = {
            // backgroundColor: '#051C43',
            legend: {
                show: true,
                top: "center",
                right: '2%',
                data: arrName,
                itemWidth: 11,
                itemHeight: 11,
                width: 50,
                itemGap: 15,
                formatter: function(name) {
                    return "{title|" + name + "}{value|" + (objData[name].value) + "}"
                },
                textStyle: {
                    rich: {
                        title: {
                            fontSize: 18,
                            lineHeight: 10,
                            color: "#9FA5AD",
                            padding: [0, 20, 0, 0],
                            width: 60
                        },
                        value: {
                            fontSize: 19,
                            lineHeight: 18,
                            color: 'rgba(255,255,255,.8)',
                        }
                    }
                },
            },
            tooltip: {
                show: true,
                trigger: "item",
                formatter: "{a}<br>{b}:{c}",
                backgroundColor: 'rgba(18, 57, 60, .8)', //设置背景颜色
                textStyle: {
                    color: '#fff'
                },
                borderColor: "rgba(18, 57, 60, .8)",
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0, 11, 34, .4)',
                    }
                },
            },
            color: ['#0080FF', '#1EA6F4', '#46FDFF', '#36FFCC', '#1AD397'],
            grid: {
                top: '5%',
                bottom: '64%',
                left: "37%",
                containLabel: true
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    inside: true,
                    textStyle: {
                        // color: "#fff",
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 14,
                    },
                    show: true
                },
                data: optionData.yAxis
            }],
            xAxis: [{
                show: false
            }],
            series: optionData.series
        };

        myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echart6'));
        let pieData = [
            { value: 6070, name: '劣四类水质' },
            { value: 4800, name: '四类水质' },
            { value: 8450, name: '三类水质' },
            { value: 10850, name: '二类水质' },

        ];
// 默认配色
        let colorsList = ['#25c897', '#b5dbe3', '#d1c157', '#6663ec', '#2abee6'];
        const sum = pieData.reduce((p, i) => p += i.value, 0);
        const option = {
            color: colorsList,
            tooltip: {
                formatter: '{b} : {c} ',
            },
            title: [
                {
                    text: sum,
                    left: 'center', // 图表内容水平居中
                    top: '40%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 24,
                        fontWeight: 'bold',
                        width: 95,
                    },
                },
                {
                    text: '活性磷酸盐',
                    left: 'center', // 图表内容水平居中
                    top: '52%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 12,
                        width: 56,
                    },
                },
                {
                    text: '平方千米',
                    left: 'center', // 图表内容水平居中
                    top: '58%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 12,
                        width: 52,
                    },
                },
            ],
            // 图表配置
            series: [
                {
                    type: 'pie', // 图表类型为饼图
                    radius: ['60%', '76%'], // 控制内外圆环的半径，18%代表内圆，26%代表外圆
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true, // 是否启用防止标签重叠策略
                    showEmptyCircle: true, // 是否在无数据的时候显示一个占位圆
                    label: {
                        show: true, // 是否显示引导文本
                        normal: {
                            // formatter: '{b}{d}%',
                            formatter: "{b|{b}}\n{c|{c}}",
                            rich: {
                                d: {
                                    fontSize: 12,
                                    padding: [5, 0, 0, 0],
                                    // color: '#2D3C59',
                                    color: 'rgba(255,255,255,.7)',
                                },
                                b: {
                                    fontSize: 12,
                                    padding: [0, 0, 5, 0],
                                    // color: '#2D3C59',
                                    color: 'rgba(255,255,255,.7)',
                                },
                            },
                        }
                    },
                    data: pieData, // 饼图数据
                    labelLine: {
                        normal: {
                            length: 10,
                            length2: 25,
                        },
                    },
                },
                {
                    type: 'pie',
                    tooltip: {
                        show: false,
                    },
                    center: ['50%', '50%'],
                    radius: ['54%', '54%'],
                    label: {
                        show: false, // 不展示data中的value和name
                    },
                    data: [
                        {
                            value: 1, // 此处的值无所谓是多少
                            name: '', // 因为不展示label，可不填
                            itemStyle: {
                                // 边框样式，浅蓝色，颜色可自行修改
                                borderWidth: 2, // 边框宽度
                                borderColor: '#b3c9d5', // 边框颜色
                            },
                        },
                    ],
                },
            ],
        }

        myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_7() {
        var myChart = echarts.init(document.getElementById('echart7'));
        let pieData = [
            // { value: 72000, name: '未达第一类水质标准' },
            { value: 24580, name: '劣四类水质' },
            { value: 5980, name: '四类水质' },
            { value: 10590, name: '三类水质' },
            { value: 30850, name: '二类水质' },

        ];
// 默认配色
        let colorsList = ['#25c897', '#b5dbe3', '#d1c157', '#6663ec', '#2abee6'];
        const sum = pieData.reduce((p, i) => p += i.value, 0);
        const option = {
            color: colorsList,
            tooltip: {
                formatter: '{b} : {c} ',
            },
            title: [
                {
                    text: sum,
                    left: 'center', // 图表内容水平居中
                    top: '40%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 24,
                        fontWeight: 'bold',
                        width: 95,
                    },
                },
                {
                    text: '无机氮',
                    left: 'center', // 图表内容水平居中
                    top: '52%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 12,
                        width: 56,
                    },
                },
                {
                    text: '平方千米',
                    left: 'center', // 图表内容水平居中
                    top: '58%', // 图表内容垂直居中
                    textStyle: {
                        // color: '#2D3C59',
                        color: 'rgba(255,255,255,.7)',
                        fontSize: 12,
                        width: 52,
                    },
                },
            ],
            // 图表配置
            series: [
                {
                    type: 'pie', // 图表类型为饼图
                    radius: ['60%', '76%'], // 控制内外圆环的半径，18%代表内圆，26%代表外圆
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true, // 是否启用防止标签重叠策略
                    showEmptyCircle: true, // 是否在无数据的时候显示一个占位圆
                    label: {
                        show: true, // 是否显示引导文本
                        normal: {
                            // formatter: '{b}{d}%',
                            formatter: "{b|{b}}\n{c|{c}}",
                            rich: {
                                d: {
                                    fontSize: 12,
                                    padding: [5, 0, 0, 0],
                                    // color: '#2D3C59',
                                    color: 'rgba(255,255,255,.7)',
                                },
                                b: {
                                    fontSize: 12,
                                    padding: [0, 0, 5, 0],
                                    // color: '#2D3C59',
                                    color: 'rgba(255,255,255,.7)',
                                },
                            },
                        }
                    },
                    data: pieData, // 饼图数据
                    labelLine: {
                        normal: {
                            length: 10,
                            length2: 25,
                        },
                    },
                },
                {
                    type: 'pie',
                    tooltip: {
                        show: false,
                    },
                    center: ['50%', '50%'],
                    radius: ['54%', '54%'],
                    label: {
                        show: false, // 不展示data中的value和name
                    },
                    data: [
                        {
                            value: 1, // 此处的值无所谓是多少
                            name: '', // 因为不展示label，可不填
                            itemStyle: {
                                // 边框样式，浅蓝色，颜色可自行修改
                                borderWidth: 2, // 边框宽度
                                borderColor: '#b3c9d5', // 边框颜色
                            },
                        },
                    ],
                },
            ],
        }

        myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    var doscroll = function () {
        var $parent = $('.js-slide-list');
        var $first = $parent.find('li:first');
        var height = $first.height();
        $first.animate({
            marginTop: -height + 'px'
        }, 500, function () {
            $first.css('marginTop', 0).appendTo($parent);
        });
    };

    setInterval(function () { doscroll() }, 2000);

})
