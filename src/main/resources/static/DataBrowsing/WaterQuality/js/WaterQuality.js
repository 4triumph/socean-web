$(document).ready(function () {
    // 监听年份选择变化
    $('#yearSelect').change(function() {
        var selectedYear = $(this).val(); // 获取选择的年份值
        updateEchartsData(selectedYear); // 更新 echarts 数据
    });

    // 初始加载 echarts 数据（默认加载 2018 年数据）
    updateEchartsData('2022');

    // 更新 echarts 数据的函数
    function updateEchartsData(year) {
        // 这里根据选择的年份加载不同的数据，然后更新 echarts 图表的 option 对象
        var chart_1_data= getChartDataForYear1(year);
        var chart_2_data = getChartDataForYear2(year);


        // 更新 echarts 图表
        echart_1(chart_1_data);
        echart_2(chart_2_data);
        echart_3();
        echart_4();
    }

    // 模拟根据年份获取数据的函数
    function getChartDataForYear1(year) {
        // 这里模拟生成一些示例数据
        var data = [];
        if (year === '2022') {
            data = [
                [26.046, 15.235, 95.009], // 化学需氧量（千吨）
                [76, 20, 265],    // 石油类（吨）
                [748, 431, 2454],    // 氨氮（吨）
                [9.381, 6.098, 33.656],    // 总氮（千吨）
                [138, 116, 664],    // 总磷（吨）
                [896.7, 237.8, 819.6],    // 六价铬（千克）
                [1866.3, 238.1, 2481.4],    // 铅（千克）
                [18.3, 23.1, 297.1],    // 汞（千克）
                [30.0, 37.8, 334.9],    // 镉（千克）
                [241.566, 86.161, 422.472], // 污水量（千吨）
            ]
            ;
        } else if (year === '2021') {
            data = [
                [28.253, 16.315, 97.273], // 化学需氧量（千吨）
                [116, 39, 428],    // 石油类（吨）
                [866, 372, 2818],    // 氨氮（吨）
                [8.839, 5.31, 32.512], // 总氮（千吨）
                [221, 118, 644],    // 总磷（吨）
                [700.4, 601.7, 689.8],    // 六价铬（千克）
                [2537.5, 542.4, 2610.3],    // 铅（千克）
                [64.3, 27.7, 240.9],    // 汞（千克）
                [13.8, 61.5, 966.1],    // 镉（千克）
                [26.135, 80.602, 401.051] // 污水量（千吨）
            ];
        } else if (year === '2020') {
            data = [
                [33.869, 23.004, 104.617], // 化学需氧量（千吨）
                [77.9, 207.7, 411.2],    // 石油类（吨）
                [1225, 980, 3220],    // 氨氮（吨）
                [6.753, 8.363, 35.946],    // 总氮（千吨）
                [138, 163, 898],    // 总磷（吨）
                [82.8, 553.1, 1581.4],    // 六价铬(千克）
                [719.3, 368.1, 5823.1],    // 铅(千克）
                [5.5, 32.9, 231.8],    // 汞(千克）
                [38.2, 161.0, 140.0],    // 镉(千克）
                [209.665, 78.961, 424.367], // 污水量（千吨）
            ];
        }else if (year === '2019') {
            data = [
                [27.413, 17.561, 103.927], // 化学需氧量（千吨）
                [109.7, 86.6, 453.5],    // 石油类（吨）
                [852, 536, 2868],    // 氨氮（吨）
                [5.592, 5.661, 35.611],    // 总氮（千吨）
                [146, 124, 1183],    // 总磷（吨）
                [489.9, 148.5, 1514.7],    // 六价铬(千克）
                [4176, 5488.6, 4436.3],    // 铅(千克）
                [40.1, 35.4, 306.7],    // 汞(千克）
                [162.1, 50.8, 379.6],    // 镉(千克）
                [258.511, 126.023, 416.555], // 污水量（千万吨）
            ];
        }else if (year === '2018') {
            data = [
                [32.078, 15.318, 100.229], // 化学需氧量（千吨）
                [92.7, 69.5, 295.4],    // 石油类（吨）
                [915, 921, 4381],    // 氨氮（吨）
                [5.984, 6.657, 38.232],    // 总氮（千吨）
                [124, 207, 949],    // 总磷（吨）
                [435.42, 482.89, 3053.74],    // 六价铬(千克）
                [2095.45, 1382.08, 4760.35],    // 铅(千克）
                [19.15, 42.50, 215.29],    // 汞(千克）
                [18.00, 128.38, 260.49],    // 镉(千克）
                [387.643, 83.641, 395.140], // 污水量（千万吨）
            ];
        }else if (year === '2017') {
            data = [
                [21.168, 24.081, 127.165], // 化学需氧量（千吨）
                [153.0, 290.0, 463.3],    // 石油类（吨）
                [711, 1946, 8102],    // 氨氮（吨）
                [3.594, 7.058, 45.973],    // 总氮（千吨）
                [120, 385, 1664],    // 总磷（吨）
                [360.96, 130.33, 1843.52],    // 六价铬(千克）
                [469.54, 422.94, 2965.26],    // 铅(千克）
                [1.78, 5.86, 235.72],    // 汞(千克）
                [8.97, 18.10, 516.33],    // 镉(千克）
                [162.033, 73.385, 400.624], // 污水量（千万吨）
            ];
        }else if (year === '2016') {
            data = [
                [29.983, 35.302, 133.270], // 化学需氧量（千吨）
                [103.5, 156.6, 528.1],    // 石油类（吨）
                [946, 5274, 9084],    // 氨氮（吨）
                [3.040, 11.714, 49.712],    // 总氮（千吨）
                [106, 586, 2047],    // 总磷（吨）
                [230.35, 191.46, 2497.65],    // 六价铬(千克）
                [588.78, 1098.47, 2977.35],    // 铅(千克）
                [2.38, 27.4, 188.63],    // 汞(千克）
                [34.01, 51.91, 374.08],    // 镉(千克）
                [211.873, 75.726, 369.831], // 污水量（千万吨）
            ];
        }

        return data;
    }

    function getChartDataForYear2(year) {
        var data = [];
        if (year === '2022') {
            data = [
                [6.278, 21.01, 77.042, 31.961], // 化学需氧量（千吨）
                [55, 80, 279, 48],    // 石油类（吨）
                [123, 614, 1732, 1165],    // 氨氮（吨）
                [2.755, 7.41, 28.216, 10.754],    // 总氮（千吨）
                [52, 159, 435, 272],    // 总磷（吨）
                [32, 655.6, 355.1, 911.4],    // 六价铬（千克）
                [2111.7, 856.9, 1424.9, 192.2],    // 铅（千克）
                [23.6, 110.4, 173.9, 30.6],    // 汞（千克）
                [28.9, 60.1, 280.6, 33.2],    // 镉（千克）
                [61.828, 89.907, 434.29, 164.173] // 污水量（千吨）
            ];
        } else if (year === '2021') {
            data = [
                [6.82, 21.855, 79.228, 339.38], // 化学需氧量（千吨）
                [32, 119, 377, 55],    // 石油类（吨）
                [195, 543, 2070, 1249],    // 氨氮（吨）
                [2.59, 6.416, 27.343, 10.312], // 总氮（千吨）
                [82, 162, 477, 262],    // 总磷（吨）
                [227.2, 400.4, 686.3, 678.3],    // 六价铬（千克）
                [2802, 972.2, 1215.5, 700.6],    // 铅（千克）
                [58.3, 87.2, 111.4, 76],    // 汞（千克）
                [11.3, 99, 899.1, 32],    // 镉（千克）
                [70.412, 89.719, 419.588, 148.07] // 污水量（千吨）
            ];
        } else if (year === '2020') {
            data = [
                [9.551, 27.647, 77.261, 344.41], // 化学需氧量（千吨）
                [76, 185.2, 299, 89.7],    // 石油类（吨）
                [209, 618, 2055, 1373],    // 氨氮（吨）
                [2.185, 9.564, 24.835, 10.281],    // 总氮（千吨）
                [75, 194, 391, 794],    // 总磷（吨）
                [111.2, 1086.2, 709, 246.8],    // 六价铬（千克）
                [5083.5, 1401.5, 811, 6084.6],    // 铅（千克）
                [50, 160.6, 124, 47.7],    // 汞（千克）
                [176.5, 44.4, 245.1, 126.5],    // 镉（千克）
                [82.897, 117.566, 376.512, 136.019], // 污水量（千吨）
            ];
        }else if (year === '2019') {
            data = [
                [7.858, 30.206, 81.108, 42.319], // 化学需氧量（千吨）
                [48.4, 92.0, 388.7, 167.7],    // 石油类（吨）
                [428, 973, 2013, 2011],    // 氨氮（吨）
                [2.531, 9.302, 27.338, 11.892],    // 总氮（千吨）
                [70, 198, 425, 506],    // 总磷（吨）
                [32.1, 1532.6, 139.5, 513.1],    // 六价铬（千克）
                [906.6, 2190.6, 2168.8, 1644.5],    // 铅（千克）
                [21.8, 77.6, 117.4, 53.4],    // 汞（千克）
                [77.7, 22.8, 61.7, 176.9],    // 镉（千克）
                [58.781, 107.240, 460.570, 174.499] // 污水量（千万吨）
            ];
        }else if (year === '2018') {
            data = [
                [7.227, 33.034, 79.800, 27.563], // 化学需氧量（千吨）
                [12.9, 116.4, 282.7, 45.7],    // 石油类（吨）
                [464, 1313, 2282, 2158],    // 氨氮（吨）
                [3.717, 9.961, 26.533, 10.662],    // 总氮（千吨）
                [59, 252, 458, 511],    // 总磷（吨）
                [297.10, 2007.29, 1283.82, 383.84],    // 六价铬（千克）
                [215.77, 3325.41, 1120.51, 3576.19],    // 铅（千克）
                [28.41, 133.12, 62.91, 52.51],    // 汞（千克）
                [68.06, 90.10, 116.21, 132.50],    // 镉（千克）
                [68.720, 117.183, 556.800, 123.722] // 污水量（千万吨）
            ];
        }else if (year === '2017') {
            data = [
                [6.981, 38.483, 99.842, 27.108], // 化学需氧量（千吨）
                [12.7, 314.7, 430.8, 148.1],    // 石油类（吨）
                [2548, 2524, 3843, 1844],    // 氨氮（吨）
                [4.327, 9.928, 31.975, 10.395],    // 总氮（千吨）
                [190, 467, 884, 627],    // 总磷（吨）
                [242.58, 244.51, 1757.28, 90.44],    // 六价铬（千克）
                [388.03, 158.16, 1400.94, 1910.61],    // 铅（千克）
                [12.09, 98.73, 106.69, 25.85],    // 汞（千克）
                [5.27, 95.64, 320.29, 122.20],    // 镉（千克）
                [23.595, 112.623, 387.990, 111.834] // 污水量（千万吨）
            ];
        }else if (year === '2016') {
            data = [
                [13.358, 59.894, 100.914, 24.389], // 化学需氧量（千吨）
                [10.7, 122.9, 435.3, 219.3],    // 石油类（吨）
                [2877, 6563, 4121, 1743],    // 氨氮（吨）
                [5.371, 16.938, 33.444, 8.713],    // 总氮（千吨）
                [317, 652, 1003, 767],    // 总磷（吨）
                [544.46, 215.55, 2121.23, 38.22],    // 六价铬（千克）
                [1155.37, 242.31, 753.52, 2513.4],    // 铅（千克）
                [9.23, 52.79, 123.9, 32.49],    // 汞（千克）
                [30.39, 41.35, 344.02, 44.24],    // 镉（千克）
                [23.678, 119.213, 409.019, 105.520] // 污水量（千万吨）
            ];
        }
        return data;
    }


});

// function echart_1(data) {
//     var myChart = echarts.init(document.getElementById('chart_1'));
//
//     // 准备 x 轴数据
//     var xAxisData = ['化学需氧量（千吨）', '石油类（吨）', '氨氮（吨）', '总氮（千吨）', '总磷（吨）', '六价铬（千克）', '铅（千克）', '汞（千克）', '镉（千克）', '污水量（千万吨）'];
//
//     const option = {
//
//         title: {
//             left: 'center',
//             text: '三类污染源污水及主要监测指标排放量',
//             textStyle: {
//                 color: '#fff'
//             },
//         },
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 type: 'cross',
//                 crossStyle: {
//                     color: '#fffefe' // 设置十字准星颜色
//                 }
//             },
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         toolbox: {
//             feature: {
//                 dataView: {show: true, readOnly: false},
//                 magicType: {show: true, type: ['line', 'bar']},
//                 restore: {show: true},
//                 saveAsImage: {show: true}
//             },
//             top: '10%'
//         },
//         legend: {
//             data: ['工业', '生活', '综合'],
//             textStyle: {
//                 color: '#fff'
//             },
//             top: '10%'
//
//         },
//         xAxis: [
//             {
//                 type: 'category',
//                 // data: ['化学需氧量（千吨）', '石油类（吨）', '氨氮（吨）', '总氮（千吨）', '总磷（吨）', '六价铬（千克）', '铅（千克）', '汞（千克）', '镉（千克）', '污水量（千万吨）'],
//                 data: xAxisData,
//                 axisPointer: {
//                     type: 'shadow'
//                 },
//                 axisLabel: {
//                     textStyle: {
//                         color: '#fff'
//                     }
//                 }
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 name: '指标值（吨/千克/千吨）',
//                 axisLabel: {
//                     textStyle: {
//                         color: '#fff'
//                     }
//                 }
//             }
//         ],
//         series: [
//             {
//                 name: '工业',
//                 type: 'line',
//                 data: data.map(item => item[0]),
//                 itemStyle: {
//                     color: '#0050bd'
//                 }
//             },
//             {
//                 name: '生活',
//                 type: 'line',
//                 data: data.map(item => item[1]),
//                 itemStyle: {
//                     color: 'rgba(0,157,255,0.84)'
//                 }
//             },
//             {
//                 name: '综合',
//                 type: 'line',
//                 data: data.map(item => item[2]),
//                 itemStyle: {
//                     color: '#ab9e08'
//                 }
//             }
//
//         ]
//     };
//     // 点击图表一的事件
//     myChart.on('click', function(params) {
//
//         var industrialData = []; // 工业数据
//         var livingData = []; // 生活数据
//         var comprehensiveData = []; // 综合数据
//
//         // 获取点击的柱子所在系列的名称（工业生活综合）
//         var seaArea = params.seriesName;
//         // 获取点击的柱子的数据索引
//         var dataIndex = params.dataIndex;
//         // 获取点击的柱子对应的污染物名称
//         var pollutant = xAxisData[dataIndex];
//         console.log('你点击了 ' + seaArea + ' 的 ' + pollutant);
//
//         industrialData =[
//             [29.983, 21.168, 32.078, 27.413, 33.869, 28.253, 26.046],
//             [103.5, 153.0, 92.7, 109.7, 77.9, 116, 76],
//             [946, 711, 915, 852, 1225, 866, 748],
//             [3.040, 3.594, 5.984, 5.592, 6.753, 8.839, 9.381],
//             [106, 120, 124, 146, 138, 221, 138],
//             [230.35, 360.96, 435.42, 489.9, 82.8, 700.4, 896.7],
//             [588.78, 469.54, 2095.45, 4176, 719.3, 2537.5, 1866.3],
//             [2.38, 1.78, 19.15, 40.1, 5.5, 64.3, 18.3],
//             [34.01, 8.97, 18.0, 162.1, 38.2, 13.8, 30.0],
//             [211.873, 162.033, 387.643, 258.511, 209.665, 26.135, 241.566],
//         ];
//         livingData = [
//             [35.302, 24.081, 15.318, 17.561, 23.004, 16.315, 15.235],
//             [156.6, 290.0, 69.5, 86.6, 207.7, 39, 20],
//             [5274, 1946, 921, 536, 980, 372, 431],
//             [11.714, 7.058, 6.657, 5.661, 8.363, 5.31, 6.098],
//             [586, 385, 207, 124, 163, 118, 116],
//             [191.46, 130.33, 482.89, 148.5, 553.1, 601.7, 237.8],
//             [1098.47, 422.94, 1382.08, 5488.6, 368.1, 542.4, 238.1],
//             [27.4, 5.86, 42.5, 35.4, 32.9, 27.7, 23.1],
//             [51.91, 18.1, 128.38, 50.8, 161.0, 61.5, 37.8],
//             [75.726, 73.385, 83.641, 126.023, 78.961, 80.602, 86.161],
//         ];
//         comprehensiveData = [
//             [133.27, 127.165, 100.229, 103.927, 104.617, 97.273, 95.009],
//             [528.1, 463.3, 295.4, 453.5, 411.2, 428, 265],
//             [9084, 8102, 4381, 2868, 3220, 2818, 2454],
//             [49.712, 45.973, 38.232, 35.611, 35.946, 32.512, 33.656],
//             [2047, 1664, 949, 1183, 898, 644, 664],
//             [2497.65, 1843.52, 3053.74, 1514.7, 1581.4, 689.8, 819.6],
//             [2977.35, 2965.26, 4760.35, 4436.3, 5823.1, 2610.3, 2481.4],
//             [188.63, 235.72, 215.29, 306.7, 231.8, 240.9, 297.1],
//             [374.08, 516.33, 260.49, 379.6, 140.0, 966.1, 334.9],
//             [369.831, 400.624, 395.14, 416.555, 424.367, 401.051, 422.472],
//         ];
//
//         var j = 0;
//         if (pollutant == '化学需氧量（千吨）'){
//             j = 0;
//         }else if (pollutant == '石油类（吨）'){
//             j = 1;
//         }else if (pollutant == '氨氮（吨）'){
//             j = 2;
//         }else if (pollutant == '总氮（千吨）'){
//             j = 3;
//         }else if (pollutant == '总磷（吨）'){
//             j = 4;
//         }else if (pollutant == '六价铬（千克）'){
//             j = 5;
//         }else if (pollutant == '铅（千克）'){
//             j = 6;
//         }else if (pollutant == '汞（千克）'){
//             j = 7;
//         }else if (pollutant == '镉（千克）'){
//             j = 8;
//         }else if (pollutant == '污水量（千万吨）'){
//             j = 9;
//         }
//
//         // if (seaArea == '工业'){
//         //     selectedData = industrialData[j];
//         // }else if(seaArea == '生活'){
//         //     selectedData = livingData[j];
//         // }else if(seaArea == '综合'){
//         //     selectedData = comprehensiveData[j];
//         // }
//
//         // echart_4(selectedData, pollutant);
//
//
//         // 在图表三中展示对应年份的污染物变化趋势
//         echart_3(pollutant, industrialData[j], livingData[j], comprehensiveData[j]);
//     });
//
//     myChart.setOption(option);
// }

function echart_1(data) {
    var myChart = echarts.init(document.getElementById('chart_1'));

    // 准备 x 轴数据
    var xAxisData = ['化学需氧量（千吨）', '石油类（吨）', '氨氮（吨）', '总氮（千吨）', '总磷（吨）', '六价铬（千克）', '铅（千克）', '汞（千克）', '镉（千克）', '污水量（千万吨）'];

    const option = {

        grid: {
            containLabel: true,
            bottom: '5%',
            top: '23%',
            left: '2%',
            right: '10%',
        },
        title: {
            left: 'center',
            text: '三类污染源污水及主要监测指标排放量',
            textStyle: {
                color: '#fff'
            },
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         crossStyle: {
        //             color: '#fffefe' // 设置十字准星颜色
        //         }
        //     },
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            },
            top: '10%'
        },
        legend: {
            top: '10%',
            data: ['工业', '生活', '综合'],
            itemGap: 10,
            textStyle: {
                color: '#fff',
            },
        },
        // xAxis: [
        //     {
        //         type: 'category',
        //         // data: ['化学需氧量（千吨）', '石油类（吨）', '氨氮（吨）', '总氮（千吨）', '总磷（吨）', '六价铬（千克）', '铅（千克）', '汞（千克）', '镉（千克）', '污水量（千万吨）'],
        //         data: xAxisData,
        //         axisPointer: {
        //             type: 'shadow'
        //         },
        //         axisLabel: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     }
        // ],
        xAxis: {
            triggerEvent: true,
            data: xAxisData,
            axisLabel: {
                // interval: 0,
                show: true,
                // fontSize: 14,
                color: '#fff',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#E0E6F1',
                },
            },

            axisTick: {
                show: false,
            },
        },
        // yAxis: [
        //     {
        //         type: 'value',
        //         name: '指标值（吨/千克/千吨）',
        //         axisLabel: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     }
        // ],
        yAxis: [
            {
                name: '吨/千克/千吨',
                type: 'value',
                nameTextStyle: {
                    color: '#fff',
                    // fontSize: 14,
                    padding: [0, 0, 0, 0],
                },
                splitNumber: 2,
                axisLabel: {
                    show: true,
                    // fontSize: 14,
                    color: '#fff'
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#E0E6F1',
                    },
                },
                minInterval: 1
            },
        ],
        series: [
            {
                name: '工业',
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                data: data.map(item => item[0]),
                itemStyle: {
                    color: '#0050bd'
                },
                lineStyle: {
                    width: 4,
                },
                smooth: true
            },
            {
                name: '生活',
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                data: data.map(item => item[1]),
                itemStyle: {
                    color: 'rgba(0,157,255,0.84)'
                },
                lineStyle: {
                    width: 4,
                },
                smooth: true
            },
            {
                name: '综合',
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                data: data.map(item => item[2]),
                itemStyle: {
                    color: '#ab9e08'
                },
                lineStyle: {
                    width: 4,
                },
                smooth: true
            }

        ]
    };
    // 点击图表一的事件
    myChart.on('click', function(params) {

        var industrialData = []; // 工业数据
        var livingData = []; // 生活数据
        var comprehensiveData = []; // 综合数据

        // 获取点击的柱子所在系列的名称（工业生活综合）
        var seaArea = params.seriesName;
        // 获取点击的柱子的数据索引
        var dataIndex = params.dataIndex;
        // 获取点击的柱子对应的污染物名称
        var pollutant = xAxisData[dataIndex];
        console.log('你点击了 ' + seaArea + ' 的 ' + pollutant);

        industrialData =[
            [29.983, 21.168, 32.078, 27.413, 33.869, 28.253, 26.046],
            [103.5, 153.0, 92.7, 109.7, 77.9, 116, 76],
            [946, 711, 915, 852, 1225, 866, 748],
            [3.040, 3.594, 5.984, 5.592, 6.753, 8.839, 9.381],
            [106, 120, 124, 146, 138, 221, 138],
            [230.35, 360.96, 435.42, 489.9, 82.8, 700.4, 896.7],
            [588.78, 469.54, 2095.45, 4176, 719.3, 2537.5, 1866.3],
            [2.38, 1.78, 19.15, 40.1, 5.5, 64.3, 18.3],
            [34.01, 8.97, 18.0, 162.1, 38.2, 13.8, 30.0],
            [211.873, 162.033, 387.643, 258.511, 209.665, 26.135, 241.566],
        ];
        livingData = [
            [35.302, 24.081, 15.318, 17.561, 23.004, 16.315, 15.235],
            [156.6, 290.0, 69.5, 86.6, 207.7, 39, 20],
            [5274, 1946, 921, 536, 980, 372, 431],
            [11.714, 7.058, 6.657, 5.661, 8.363, 5.31, 6.098],
            [586, 385, 207, 124, 163, 118, 116],
            [191.46, 130.33, 482.89, 148.5, 553.1, 601.7, 237.8],
            [1098.47, 422.94, 1382.08, 5488.6, 368.1, 542.4, 238.1],
            [27.4, 5.86, 42.5, 35.4, 32.9, 27.7, 23.1],
            [51.91, 18.1, 128.38, 50.8, 161.0, 61.5, 37.8],
            [75.726, 73.385, 83.641, 126.023, 78.961, 80.602, 86.161],
        ];
        comprehensiveData = [
            [133.27, 127.165, 100.229, 103.927, 104.617, 97.273, 95.009],
            [528.1, 463.3, 295.4, 453.5, 411.2, 428, 265],
            [9084, 8102, 4381, 2868, 3220, 2818, 2454],
            [49.712, 45.973, 38.232, 35.611, 35.946, 32.512, 33.656],
            [2047, 1664, 949, 1183, 898, 644, 664],
            [2497.65, 1843.52, 3053.74, 1514.7, 1581.4, 689.8, 819.6],
            [2977.35, 2965.26, 4760.35, 4436.3, 5823.1, 2610.3, 2481.4],
            [188.63, 235.72, 215.29, 306.7, 231.8, 240.9, 297.1],
            [374.08, 516.33, 260.49, 379.6, 140.0, 966.1, 334.9],
            [369.831, 400.624, 395.14, 416.555, 424.367, 401.051, 422.472],
        ];

        var j = 0;
        if (pollutant == '化学需氧量（千吨）'){
            j = 0;
        }else if (pollutant == '石油类（吨）'){
            j = 1;
        }else if (pollutant == '氨氮（吨）'){
            j = 2;
        }else if (pollutant == '总氮（千吨）'){
            j = 3;
        }else if (pollutant == '总磷（吨）'){
            j = 4;
        }else if (pollutant == '六价铬（千克）'){
            j = 5;
        }else if (pollutant == '铅（千克）'){
            j = 6;
        }else if (pollutant == '汞（千克）'){
            j = 7;
        }else if (pollutant == '镉（千克）'){
            j = 8;
        }else if (pollutant == '污水量（千万吨）'){
            j = 9;
        }
        // 在图表三中展示对应年份的污染物变化趋势
        echart_3(pollutant, industrialData[j], livingData[j], comprehensiveData[j]);
    });

    myChart.setOption(option);
}

function echart_3(pollutant, industrialData, livingData, comprehensiveData) {
    if (industrialData && industrialData.length > 0) {}
        else {
            //初始化趋势图
        pollutant = '化学需氧量（千吨）',
        industrialData = [29.983, 21.168, 32.078, 27.413, 33.869, 28.253, 26.046],
        livingData = [35.302, 24.081, 15.318, 17.561, 23.004, 16.315, 15.235],
        comprehensiveData = [133.27, 127.165, 100.229, 103.927, 104.617, 97.273, 95.009];
    }
    var myChart = echarts.init(document.getElementById('chart_3'));
    const option = {
        grid: {
            containLabel: true,
            bottom: '5%',
            top: '23%',
            left: '2%',
            right: '10%',
        },
        title: {
            left: 'center',
            text: pollutant + ' - 近年变化趋势',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#fffefe'
                }
            },
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            name: '工业',
            type: 'line',
            data: industrialData,
            itemStyle: {
                color: '#0050bd'
            }
        },
            {
                name: '生活',
                type: 'line',
                data: livingData,
                itemStyle: {
                    color: 'rgba(0,157,255,0.84)'
                }
            },
            {
                name: '综合',
                type: 'line',
                data: comprehensiveData,
                itemStyle: {
                    color: '#ab9e08'
                }
            },
        ]
    };

    myChart.setOption(option);
}


// echart_2 函数更新图表2的数据
function echart_2(data) {
    var myChart = echarts.init(document.getElementById('chart_2'));

    // 准备 x 轴数据
    var xAxisData = ['化学需氧量（千吨）', '石油类（吨）', '氨氮（吨）', '总氮（千吨）', '总磷（吨）', '六价铬（千克）', '铅（千克）', '汞（千克）', '镉（千克）', '污水量（千万吨）'];

    // 准备 series 数据
    var seriesData = [];
    var legendData = ['渤海', '黄海', '东海', '南海'];
    var colors = ['#5470C6', '#f3d226', '#edf1f6', 'rgba(0,157,255,0.84)']; // 指定颜色，可以根据需要自行调整
    for (var i = 0; i < legendData.length; i++) {
        var seriesItem = {
            type: 'bar',
            name: legendData[i],
            data: data.map(function (item) {
                return item[i]; // 选取每个海区对应的指标值
            }),
            itemStyle: {
                color: colors[i] // 指定柱状图颜色
            }
        };
        seriesData.push(seriesItem);
    }

    var option = {
        grid: {
            top: 80,
            bottom: 50
        },
        title: {
            left: 'center',
            text: '四大海区污水及主要检测指标受纳量',
            textStyle: {
                color: '#fff'
            }
        },
        toolbox: {
            show: true,
            padding: 5,
            orient: "vertical",
            feature: {
                mark: {
                    show: false
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {
            show: true
        },
        legend: {
            data: legendData,
            textStyle: {
                color: '#fff'
            },
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '吨/千克/千吨', // 更换为合适的 y 轴单位名称
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: seriesData
    };
    var data1 = [];
    //渤海
    data1=[
        [13.358, 6.981, 7.227, 7.858, 9.551, 6.82, 6.278],
        [10.7, 12.7, 12.9, 48.4, 76, 32, 55],
        [2877, 2548, 464, 428, 209, 195, 123],
        [5.371, 4.327, 3.717, 2.531, 2.185, 2.59, 2.755],
        [317, 190, 59, 70, 75, 82, 52],
        [544.46, 242.58, 297.1, 32.1, 111.2, 227.2, 32],
        [1155.37, 388.03, 215.77, 906.6, 5083.5, 2802, 2111.7],
        [9.23, 12.09, 28.41, 21.8, 50, 58.3, 23.6],
        [30.39, 5.27, 68.06, 77.7, 176.5, 11.3, 28.9],
        [23.678, 23.595, 68.72, 58.781, 82.897, 70.412, 61.828],
        ];
    var data2 = [];
    //黄海
    data2=[
        [59.894, 38.483, 33.034, 30.206, 27.647, 21.855, 21.01],
        [122.9, 314.7, 116.4, 92.0, 185.2, 119, 80],
        [6563, 2524, 1313, 973, 618, 543, 614],
        [16.938, 9.928, 9.961, 9.302, 9.564, 6.416, 7.41],
        [652, 467, 252, 198, 194, 162, 159],
        [215.55, 244.51, 2007.29, 1532.6, 1086.2, 400.4, 655.6],
        [242.31, 158.16, 3325.41, 2190.6, 1401.5, 972.2, 856.9],
        [52.79, 98.73, 133.12, 77.6, 160.6, 87.2, 110.4],
        [41.35, 95.64, 90.1, 22.8, 124, 99, 60.1],
        [119.213, 112.623, 117.183, 107.24, 117.566, 89.719, 89.907],
        ];
    var data3 = [];
    //东海
    data3=[
        [100.914, 99.842, 79.8, 81.108, 77.261, 79.228, 77.042],
        [435.3, 430.8, 282.7, 388.7, 299, 377, 279],
        [4121, 3843, 2282, 2013, 2055, 2070, 1732],
        [33.444, 31.975, 26.533, 27.338, 24.835, 27.343, 28.216],
        [1003, 884, 458, 425, 391, 477, 435],
        [2121.23, 1757.28, 1283.82, 139.5, 709, 686.3, 355.1],
        [753.52, 1400.94, 1120.51, 1215.5, 811, 700.6, 1424.9],
        [123.9, 106.69, 62.91, 117.4, 124, 111.4, 173.9],
        [344.02, 320.29, 116.21, 61.7, 245.1, 899.1, 280.6],
        [409.019, 387.99, 556.8, 460.57, 376.512, 419.588, 434.29],
        ];
    var data4 = [];
    //南海
    data4=[
        [24.389, 27.108, 27.563, 42.319, 344.41, 339.38, 31.961],
        [219.3, 148.1, 45.7, 167.7, 89.7, 55, 48],
        [1743, 1844, 2158, 2011, 1373, 1249, 1165],
        [8.713, 10.395, 10.662, 11.892, 10.281, 10.312, 10.754],
        [767, 627, 511, 506, 794, 262, 272],
        [38.22, 90.44, 383.84, 513.1, 246.8, 678.3, 911.4],
        [2513.4, 1910.61, 3576.19, 1644.5, 6084.6, 700.6, 192.2],
        [32.49, 25.85, 52.51, 53.4, 47.7, 76, 30.6],
        [44.24, 122.2, 132.5, 176.9, 126.5, 32, 33.2],
        [105.52, 111.834, 123.722, 174.499, 136.019, 148.07, 164.173],
        ];
    myChart.on('click', function(params) {
        // 判断点击的图形类型是否为柱状图
        if (params.componentType === 'series' && params.seriesType === 'bar') {
            // 获取点击的柱子所在系列的名称（海区）
            var seaArea = params.seriesName;
            // 获取点击的柱子的数据索引
            var dataIndex = params.dataIndex;
            // 获取点击的柱子对应的污染物名称
            var pollutant = xAxisData[dataIndex];

            var selectedData = []; // 初始化选中的数据

            // 在这里可以根据需要进行处理，例如弹出提示框或者执行其他操作
            console.log('你点击了 ' + seaArea + ' 的 ' + pollutant);
            var j = 0;
                if (pollutant == '化学需氧量（千吨）'){
                    j = 0;
                }else if (pollutant == '石油类（吨）'){
                    j = 1;
                }else if (pollutant == '氨氮（吨）'){
                    j = 2;
                }else if (pollutant == '总氮（千吨）'){
                    j = 3;
                }else if (pollutant == '总磷（吨）'){
                    j = 4;
                }else if (pollutant == '六价铬（千克）'){
                    j = 5;
                }else if (pollutant == '铅（千克）'){
                    j = 6;
                }else if (pollutant == '汞（千克）'){
                    j = 7;
                }else if (pollutant == '镉（千克）'){
                    j = 8;
                }else if (pollutant == '污水量（千万吨）'){
                    j = 9;
                }

                if (seaArea == '渤海'){
                    selectedData = data1[j];
                }else if(seaArea == '黄海'){
                    selectedData = data2[j];
                }else if(seaArea == '东海'){
                    selectedData = data3[j];
                }else if(seaArea == '南海'){
                    selectedData = data4[j];
                }

                echart_4(selectedData, seaArea, pollutant);
        }
    });



    myChart.setOption(option);
}

// echart_4 函数更新图表4的数据
// function echart_4(data, seaArea, indicator) {
//     if (data && data.length > 0) {
//     } else {
//         data = [13.358, 6.981, 7.227, 7.858, 9.551, 6.82, 6.278],
//             indicator = '化学需氧量（千吨）',
//             seaArea = '渤海';
//     }
//     var myChart = echarts.init(document.getElementById('chart_4'));
//     var option = {
//         title: {
//             left: 'center',
//             text: seaArea + ' - ' + indicator + '- 近年变化趋势',
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 type: 'cross',
//                 crossStyle: {
//                     color: '#fffefe' // 设置十字准星颜色
//                 }
//             },
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         xAxis: {
//             type: 'category',
//             data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'], // 年份数据
//             axisLabel: {
//                 textStyle: {
//                     color: '#fff'
//                 }
//             }
//         },
//         yAxis: {
//             type: 'value',
//             name: '指标值',
//             axisLabel: {
//                 textStyle: {
//                     color: '#fff'
//                 }
//             }
//         },
//         series: [
//             {
//                 name: indicator,
//                 type: 'line',
//                 data: data,
//                 itemStyle: {
//                     color: '#0050bd' // 设置线条颜色
//                 }
//             }
//         ]
//     };
//     myChart.setOption(option);
// }
//
function echart_4(data, seaArea, indicator) {
    if (data && data.length > 0) {
    } else {
        data = [13.358, 6.981, 7.227, 7.858, 9.551, 6.82, 6.278],
            indicator = '化学需氧量（千吨）',
            seaArea = '渤海';
    }
    var myChart = echarts.init(document.getElementById('chart_4'));
    var option = {
        color: ['#0C65F6', '#00D68A'],
        tooltip: {
            confine: true,
        },
        grid: {
            containLabel: true,
            bottom: '10%',
            top: '20%',
            left: '2%',
            right: '4%',
        },
        title: {
            left: 'center',
            text: seaArea + ' - ' + indicator + '- 近年变化趋势',
            textStyle: {
                color: '#fff'
            }
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         crossStyle: {
        //             color: '#fffefe' // 设置十字准星颜色
        //         }
        //     },
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    // color: 'rgba(255,255,255,0.45)',
                    color: '#fff'
                },
            },
            axisLabel: {
                // fontSize: 12,
                color: '#fff'
            },
            axisTick: {
                show: false,
            },
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        },
        yAxis: {
            type: 'value',
            name: '指标值',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            minInterval: 1,
            nameTextStyle: {
                // fontSize: 12,
                color: '#BAE7FF',
                align: 'center',
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.15)',
                    // type: 'dashed', // dotted 虚线
                },
            },
            splitArea: { show: false },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                // fontSize: 12,
                fontFamily: 'Bebas',
                color: '#6A93B9',
            },
        },
        series: [
            {
                type: 'bar',
                barWidth: '2',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#29acff',
                            },

                            {
                                offset: 1,
                                color: 'rgba(0, 0, 0, 0.1)',
                            },
                        ]),
                        barBorderRadius: 6,
                    },
                },
                data: data
            },
            {
                smooth: false, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 5, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    normal: {
                        color: "#29acff",
                        borderWidth: 5,
                        shadowColor: "#29acff",
                        shadowBlur: 10,
                        borderColor: "#29acff"
                    }
                },

                type: 'line',
                // showSymbol: false,
                smooth: true,
                name: indicator, // 图例对应类别
                data: data, // 纵坐标数据
                barWidth: 2,
                areaStyle: { // 区域颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(12, 101, 246, 0.6)',
                    }, {
                        offset: 1,
                        color: 'rgba(12, 101, 246, 0.1)',
                    }]),
                },

            },
        ],
    };
    myChart.setOption(option);
}
