let mapEcharts = null;
let historyList = [];
let timeFn = null;

if (mapEcharts) {
    mapEcharts.dispose(); // 销毁实例，实例销毁后无法再被使用。
}
// 初始化图表
mapEcharts = echarts.init(document.getElementById("3dMap"));

historyList.push({
    code: "china",
    name: "中国",
});

// 加载效果
mapEcharts.showLoading();

initMap(china, "china", "中国");

mapEcharts.on("click", (params) => {
    // 当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);
    timeFn = setTimeout(function () {
        if (
            allAreaCode.filter((item) => item.name.indexOf(params.name) > -1)[0]
        ) {
            let areaCode = allAreaCode.filter(
                (item) => item.name.indexOf(params.name) > -1
            )[0].code;
            loadMap(
                `https://geo.datav.aliyun.com/areas_v3/bound/${areaCode}_full.json`
            )
                .then((data) => {
                    initMap(data, areaCode);
                })
                .catch(() => {
                    loadMap(
                        `https://geo.datav.aliyun.com/areas_v3/bound/${areaCode}.json`
                    )
                        .then((res) => {
                            initMap(res, areaCode);
                        })
                        .catch(() => {});
                });

            historyList.push({
                code: areaCode,
                name: params.name,
            });

            let result = [];
            let obj = {};
            for (let i = 0; i < historyList.length; i++) {
                if (!obj[historyList[i].code]) {
                    result.push(historyList[i]);
                    obj[historyList[i].code] = true;
                }
            }
            historyList = result;
        }
    }, 250);
});
//
// mapEcharts.on("dblclick", (params) => {
//     // 当双击事件发生时，清除单击事件，仅响应双击事件
//     clearTimeout(timeFn);
//     if (historyList.length == 1) {
//         alert("已经到达最上一级地图了");
//         return;
//     }
//     let map = historyList.pop();
//     console.log(historyList[historyList.length - 1])
//     if (historyList[historyList.length - 1].code == "china") {
//         initMap(china, "china", "中国");
//     } else {
//         loadMap(
//             `https://geo.datav.aliyun.com/areas_v3/bound/${
//                 historyList[historyList.length - 1].code
//             }_full.json`
//         )
//             .then((data) => {
//                 initMap(data, historyList[historyList.length - 1].code);
//             })
//             .catch(() => {
//                 loadMap(
//                     `https://geo.datav.aliyun.com/areas_v3/bound/${
//                         historyList[historyList.length - 1].code
//                     }.json`
//                 )
//                     .then((res) => {
//                         initMap(res, historyList[historyList.length - 1].code);
//                     })
//                     .catch(() => {});
//             });
//     }
// });

// mapEcharts.on("georoam", (params) => {
//     let option = mapEcharts.getOption(); //获得option对象
//     if (params.zoom != null && params.zoom != undefined) {
//         //捕捉到缩放时
//         option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
//         option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
//     } else {
//         //捕捉到拖曳时
//         option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
//     }
//     mapEcharts.setOption(option); //设置option
// });

// 地图数据请求
async function loadMap(url, pathName) {
    return await $.getJSON(url);
}

// 地图初始化
function initMap(mapData, mapName) {
    // 注册地图
    echarts.registerMap(mapName, mapData);
    var data = [
        { name: 'XiaoMaiDao', value: ["0"] },
        // { name: 'LvSi', value: ["0"] },
        { name: 'DongShan', value: ["0"] },
        { name: 'NanJi', value: ["0"] },
        { name: 'ZhenHai', value: ["0"] },
        { name: 'ShengShan', value: ["0"] },
        { name: 'ZheLang', value: ["0"] },
        { name: 'ZhiFuDao', value: ["0"] },
        { name: 'LaoHuTan', value: ["0"] },
        { name: 'XiaoChangShan', value: ["0"] },
        { name: 'BeiShuang', value: ["0"] },
        { name: 'DaChen', value: ["0"] },
        { name: 'LianYunGang', value: ["0"] }
    ];

    var geoCoordMap = {
        'XiaoMaiDao': [120.4, 36.0],
        // 'LvSi': [121.6, 32.1],
        'DongShan': [117.5, 23.8],
        'NanJi': [121.1, 27.5],
        'ZhenHai': [121.7, 29.9],
        'ShengShan': [122.8, 30.8],
        'ZheLang': [115.6, 22.7],
        'ZhiFuDao': [121.4, 37.6],
        'LaoHuTan': [121.7, 38.9],
        'XiaoChangShan': [122.7, 39.2],
        'BeiShuang': [120.3, 26.7],
        'DaChen': [121.9, 28.5],
        'LianYunGang': [119.4, 34.8]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var data1=[];

    var data2=[];

    var data3=[];

    var data4=[];

    var data5=[];
    // 配置项
    let options = {
        title: {
            text: '全国历年数据一览',
            subtext: '点击海洋站点可查看站点监测信息~',
            left: 'center',
            top: '160',
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                color: '#fff'
            }
        },
        legend: {
            data: ["海洋站","一类海水监测点","二类海水监测点","三类海水监测点","四类海水监测点","劣四类海水监测点"],
            show:true,
            orient: 'vertical',
            left: '200px',
            bottom:"5%",
            textStyle:{
                color:'#fff',
                fontSize:'13'
            },
        },
        tooltip: {
            formatter:function (params) {
                var relVal;
                if(params.seriesName=="海洋站"){
                    relVal = params.seriesName+"<br/>"+params.marker+params.name;
                }
                else if(params.seriesName=="劣四类海水监测点"){
                    relVal = "海水监测点"+"<br/>"+params.marker+params.name+"&nbsp;&nbsp;&nbsp;"+"劣四类";
                }
                else{
                    relVal = "海水监测点"+"<br/>"+params.marker+params.name+"&nbsp;&nbsp;&nbsp;"+params.seriesName[0]+params.seriesName[1];
                }

                return relVal;
            },
            trigger: 'item'
        },
        geo: {
            map: mapName, //地图类型。
            zoom: 1,
            // roam: true,
            animation: false,
            itemStyle: {
                // 区域样式
                areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                        {
                            offset: 0,
                            color: "rgba(147, 235, 248, 1)", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(2, 99, 206, 1)", // 100% 处的颜色
                        },
                    ],
                    globalCoord: false, // 缺省为 false
                },
                shadowColor: "#105781", //地图区域的阴影颜色。
                shadowOffsetX: 0,
                shadowOffsetY: 10,
            },
        },
        series: [
            {
                name: '一类海水监测点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:data1,
                symbolSize: 4,
                symbol: 'circle',  // 设置散点的符号，这里设置为圆形
                encode: {
                    value:2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow' // 设置新系列的散点颜色
                    }
                }
            },
            {
                name: '二类海水监测点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:data2,
                symbolSize: 4,
                symbol: 'circle',  // 设置散点的符号，这里设置为圆形
                encode: {
                    value: 2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'green' // 设置新系列的散点颜色
                    }
                }
            },
            {
                name: '三类海水监测点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:data3,
                symbolSize:4,
                symbol: 'circle',  // 设置散点的符号，这里设置为圆形
                encode: {
                    value: 2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'pink' // 设置新系列的散点颜色
                    }
                }
            },
            {
                name: '四类海水监测点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:data3,
                symbolSize:4,
                symbol: 'circle',  // 设置散点的符号，这里设置为圆形
                encode: {
                    value: 2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyl: {
                    normal: {
                        color: 'orange' // 设置新系列的散点颜色
                    }
                }
            },
            {
                name: '劣四类海水监测点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:data4,
                symbolSize: 4,
                symbol: 'circle',  // 设置散点的符号，这里设置为圆形
                encode: {
                    value: 2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red' // 设置新系列的散点颜色
                    }
                }
            },
            {
                name: '海洋站',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: 25,
                symbol: "pin",
                encode: {
                    value: 2
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#F57474"
                    },

                }
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: null
            },
            {
                name: "map",
                type: "map", // 地图
                map: mapName, // 加载注册的地图
                selectedMode: false, // 不让单独选中
                // roam: true, // 开始鼠标事件，scale缩放、move移动
                // 图形上的文本标签
                label: {
                    show: true,
                    color: "#000a3c",
                },
                // 地图样式
                itemStyle: {
                    // 区域样式
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 3,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(223, 231, 242, 1)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(2, 99, 206, 1)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    borderWidth: 1, // 边框大小
                    borderColor: "rgba(104, 152, 190, 1)", // 边框样式
                    shadowColor: "rgba(128, 217, 248, 1)", // 阴影颜色
                    shadowOffsetX: -2, // 阴影水平方向上的偏移距离
                    shadowOffsetY: 2, // 阴影垂直方向上的偏移距离
                    shadowBlur: 10, // 文字块的背景阴影长度
                },
                // 选中状态下样式
                emphasis: {
                    label: {
                        color: "#ffffff",
                    },
                    itemStyle: {
                        areaColor: "#a5d4fe",
                    },
                },
            },
        ],
    };
    $.ajax({

        type: "post",

        async: true,

        url: "/point/location",

        data: {},

        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                if( item.waterquality=="一类"){
                    data1.push({
                        name:item.area,
                        value:[item.longitude,item.latitude]
                    })
                }
                else if( item.waterquality=="二类"){
                    data2.push({
                        name:item.area,
                        value:[item.longitude,item.latitude]
                    })
                }
                else if( item.waterquality=="三类"){
                    data3.push({
                        name:item.area,
                        value:[item.longitude,item.latitude]
                    })
                }
                else  if( item.waterquality=="四类"){
                    data4.push({
                        name:item.area,
                        value:[item.longitude,item.latitude]
                    })
                }
                else{
                    data5.push({
                        name:item.area,
                        value:[item.longitude,item.latitude]
                    })
                }
            });
            console.log(data1);
            console.log(convertData(data));

            mapEcharts.setOption({

                series: [{
                    data:data1
                },{
                    data:data2
                },{
                    data:data3
                },{
                    data:data4
                },{
                    data:data5
                }

                ]

            })
        }
    })
    mapEcharts.setOption(options); // 实例配置项与数据
    window.addEventListener("resize", function () {
        mapEcharts.resize();
    });

    mapEcharts.on('click', function (params) {
        // window.open('../OceanStation/' + params.name + '/' + params.name + '.html', '_self');
        window.open(   params.name + '.html', '_self');
    });
    // 隐藏loading
    mapEcharts.hideLoading();
}