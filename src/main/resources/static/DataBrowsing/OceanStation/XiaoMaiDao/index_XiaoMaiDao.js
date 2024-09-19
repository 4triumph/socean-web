$(function(){
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    echarts_6();
    function echarts_1(){
        var echart1 = echarts.init(document.getElementById('echart1'));
        option = {

            color: ['#80FFA5'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },

            grid: {
                right: '4%',
                left: '6%',
                bottom:'3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    // data: date,
                    axisLabel:{
                        interval:0,
                        rotate:40,
                        textStyle: {
                            color: "rgba(255,255,255,255)",
                            fontSize:12,
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel:{
                        textStyle: {
                            color: "rgba(255,255,255,255)",
                            fontSize: "12"
                        }
                    },

                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [140, 232, 101, 264]
                },

            ]
        };

        var www=[];

        var date = [];

        var data = [];

        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/wwwegiht",

            data: {},

            dataType: "json",

            // 回调函数

            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if (item.windwaveheight=="999.9")
                        item.windwaveheight="0.00";
                    www.push(item.windwaveheight);    //挨个取出类别并填入类别数组
                });
                var base = +new Date(2023, 6, 1,0);
                var oneHour =3600 * 1000;
                var targetDate = new Date(2023, 6, 31,23);
                data.push(www[0]);
                console.log(www[0]);
                var now = new Date(base);
                var i=1;
                var now1=[];
                function addData(shift) {
                    if(now>targetDate){
                        now = new Date(base);
                        i=0;
                    }
                    now1 = [ now.getMonth()+1, now.getDate()].join('/');
                    now1 = now1+" "+now.getHours()+":00";
                    date.push(now1);
                    data.push(www[i++]);
                    if (shift) {
                        date.shift();
                        data.shift();
                    }
                    now = new Date(+new Date(now) + oneHour);
                }
                for (var i = 1; i < 10; i++) {
                    addData();
                }
                setInterval(function () {
                    addData(true);
                    echart1.setOption({
                        xAxis: {
                            data: date
                        },
                        series: [
                            {
                                name: '风浪高度',
                                data: data
                            }
                        ]
                    });
                }, 1000);

            }


        })

        echart1.setOption(option);
        //屏幕自适应
        window.addEventListener("resize", function() {
            echart1.resize();
        });
    }

    function echarts_2(){
        var echart2 = echarts.init(document.getElementById('echart2'));
        option = {
            title : {
                text:"",
                x:'center',
                y:'top',
                textStyle:
                    {
                        color:'#fff',
                        fontSize:13
                    }
            },
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                top:"13%",
                containLabel: true
            },
            color:["#72b332",'#35a9e0'],
            legend: {
                data:['空气温度','海温'],
                show:true,

                right:'15%',
                y:"0",
                textStyle:{
                    color:"#999",
                    fontSize:'13'
                },
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    //data : ['2013','2014','2015','2016','2017','2018','2019','2020'],
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: '#2d3b53'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        },
                        alignWithLabel: true,
                        interval:0,
                        rotate:'35'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: '#2d3b53'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        }
                    },
                }
            ],
            series : [
                {
                    name:'空气温度',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    // data:[3,-3,1,3,2,-4,-6,8]
                },
                {
                    name:'海温',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    // data:[9,8,7.9,7.8,7.9,7.8,6,2]
                }
            ]
        };


        var airtemp=[];

        var seatemp=[];

        var adata = [];

        var sdata = [];

        var date = [];


        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/temp",

            data: {},

            dataType: "json",

            // 回调函数

            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    airtemp.push(item.airtemp);    //挨个取出类别并填入类别数组
                    seatemp.push(item.seatemp);
                    // console.log(airtemp);
                });
                var base = +new Date(2023, 6, 1,0);
                var oneHour =3600 * 1000;
                var targetDate = new Date(2023, 6, 31,23);
                adata.push(airtemp[0]);
                sdata.push(seatemp[0]);
                // console.log(www[0]);
                var now = new Date(base);
                var i=1;
                var now1=[];
                function addData(shift) {
                    if(now>targetDate){
                        now = new Date(base);
                        i=0;
                    }
                    now1 = [ now.getMonth()+1, now.getDate()].join('/');
                    now1 = now1+" "+now.getHours()+":00";
                    date.push(now1);
                    adata.push(airtemp[i++]);
                    sdata.push(seatemp[i++]);
                    if (shift) {
                        date.shift();
                        adata.shift();
                        sdata.shift();
                    }
                    now = new Date(+new Date(now) + oneHour);
                }
                for (var i = 1; i < 20; i++) {
                    addData();
                }


                // 重新载入 Option

                setInterval(function () {
                    addData(true);
                    echart2.setOption({
                        xAxis: {
                            data: date
                        },
                        series: [
                            {
                                data: adata
                            },
                            {
                                data: sdata
                            },
                        ]
                    });
                }, 1000);
            }

        })

        echart2.setOption(option);
        window.addEventListener("resize", function() {
            echart2.resize();
        });
    }

    function echarts_3(){
        var echart3 = echarts.init(document.getElementById('echart3'));

        var option = {
            tooltip: {
                trigger: 'item',
                textStyle: {
                    color: '#fff'
                }
            },
            color: ["#FFA800"],
            angleAxis: {
                type: 'category',
                data: ["北", "北东北", "东北", "东东北", "东", "东东南", "东南", "南东南", "南", "南西南", "西南", "西西南", "西", "西西北", "西北", "北西北"],
                boundaryGap: false, //标签和数据点都会在两个刻度之间的带(band)中间
                axisTick: {
                    show: false //是否显示坐标轴刻度
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color:"rgba(255,255,255,255)",
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,255)",
                        fontSize: "12"
                    },
                    interval: 1, //坐标轴刻度标签的显示间隔，在类目轴中有效
                },
            },
            radiusAxis: {
                min: 0,
                max: 400,

                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false //是否显示坐标轴刻度
                },
                axisLine: {
                    show: false //是否显示坐标轴轴线
                },
            },
            polar: {},
            series: [{
                name:"风向",
                type: 'bar',
                //data:wdata,
                coordinateSystem: 'polar',
                //name: legendName[0],
                stack: 'a'
            }]
        };
        var wdata=[];

        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/wind",

            data: {},

            dataType: "json",

            // 回调函数

            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                wdata = result;

                echart3.setOption({

                    series: [

                        {

                            name: '风向',

                            data: wdata

                        }

                    ]

                })
            }
        })

        echart3.setOption(option);
        window.addEventListener("resize", function() {
            echart3.resize();
        });
    }

    function echarts_4(){
        var echart4 = echarts.init(document.getElementById('echart4'));
        var option = {
            // backgroundColor:"rgba(10,44,128,0.7)",
            color: ["rgba(0,157,255,0.84)", "rgba(64,245,114,0.84)", "#fdd06c",  "#3DD1F9", "#FFAD05"],
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                x: "right",
                //top: "center",
                //padding:[0,50,0,0],
                // bottom: "0%",
                itemWidth: 16,
                itemHeight: 8,
                itemGap: 16,
                textStyle: {
                    color: '#A3E2F4',
                    fontSize: 12,
                    fontWeight: 0
                },
                data: ["短周期","中周期","长周期"]
            },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(0,157,255,0.84)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "rgba(0,157,255,0.84)",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(0,157,255,0.84)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    padding: [0, 0, 20, 0],
                    color: "rgba(0,157,255,0.84)",
                    fontSize: 16
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(0,157,255,0.84)",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [{
                name: '玫瑰图',
                stack: 'a',
                type: 'pie',
                radius: ['20%', '80%'],
                roseType: 'area',
                zlevel:10,
                label: {
                    normal: {
                        show:false,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 12,
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: []
            }, {
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                label:{
                    show:false
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,157,255,0.84)"
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ["90%", "95%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#fbfcfd"
                        }
                    }
                }]
            },]
        }
        var data=[];

        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/wwperiod",

            data: {},

            dataType: "json",

            // 回调函数

            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                data = result;

                echart4.setOption({

                    name: '玫瑰图',
                    series: [
                        {
                            data: [{
                                name: '短周期',
                                value: data[0],

                            },
                                {
                                    name: '中周期',
                                    value:data[1],

                                },
                                {
                                    name: '长周期',
                                    value: data[2],

                                },
                            ]
                        },{
                            data: [{
                                name: '短周期',
                                value: data[0],

                            },
                                {
                                    name: '中周期',
                                    value:data[1],

                                },
                                {
                                    name: '长周期',
                                    value: data[2],

                                },
                            ]
                        },{
                            data: [{
                                name: '短周期',
                                value: data[0],

                            },
                                {
                                    name: '中周期',
                                    value:data[1],

                                },
                                {
                                    name: '长周期',
                                    value: data[2],

                                },
                            ]
                        },


                    ]

                })
            }
        })
        window.addEventListener("resize", function() {
            echart4.resize();
        });
        echart4.setOption(option);
    }

    function echarts_5(){
        var angle = 0;
        var echart5 = echarts.init(document.getElementById('echart5'));
        var option;
        var seriesData = [];
//获取圆上某点的坐标(x0、y0表示坐标，r半径，angle角度)
        function getCirclePoint(x0, y0, r, angle) {
            let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
            let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
            return {
                x: x1,
                y: y1
            }
        }
        option = {
            tooltip: {
                trigger: 'item'
                // formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                top: 'center',
                right: '0%',
                show:false,
            },
            series: [
                {
                    name: '风向',
                    type: 'pie',
                    radius: ['40%', '63%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        formatter: '({d}%)'
                    },
                    color: ["rgba(0,157,255,0.84)", "rgba(64,245,114,0.84)", "#fdd06c",  "#3DD1F9", "#FFAD05"],
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 13,
                            fontWeight: 'bold'
                        }
                    },
                    data:seriesData
                },
                {
                    name: '风速',
                    type: 'pie',
                    radius: ['34%', '40%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    silent: true,
                    label: {
                        formatter: '({d}%)'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 13,
                            fontWeight: 'bold'
                        }
                    },
                    data: [
                    ]
                },
                {
                    type: 'custom',
                    coordinateSystem: 'none',
                    silent: true,
                    data: [0],
                    renderItem(params, api) {
                        //环形图半径
                        const r = Math.min(api.getWidth(), api.getHeight()) / 2
                        //圆心
                        const center = {
                            x: api.getWidth() / 2,
                            y: api.getHeight() / 2
                        }
                        //大圆半径
                        const rBig = r * 0.9
                        //小圆半径
                        const rSmall = r * 0.78
                        //大圆上的扇形
                        const bigSector = []
                        const smallSector = []
                        const circleOnCircle = [] //小圆上携带的小圆圈
                        const sectorSize = 60 //扇形长度（弧度）
                        const sectorInterval = 30 //扇形与扇形之间的间隔
                        const BigStartAngle = 310 //大扇形起始角度
                        for (let i = 0; i < 4; i++) {
                            const startAngle = ((i * (sectorInterval + sectorSize) + BigStartAngle) * Math.PI) / 180
                            const endAngle = startAngle + (sectorSize * Math.PI) / 180
                            const smallStartAngle = (Math.PI / 180) * (280 + angle + i * (sectorSize + sectorInterval))
                            const smallEndAngle = smallStartAngle + (sectorSize * Math.PI) / 180
                            bigSector.push({
                                type: 'sector',
                                shape: {
                                    cx: center.x,
                                    cy: center.y,
                                    r: rBig,
                                    r0: rBig * 0.93,
                                    startAngle,
                                    endAngle
                                },
                                style: {
                                    fill: '#55EAF1',
                                    lineWidth: 2
                                }
                            })
                            smallSector.push({
                                type: 'sector',
                                shape: {
                                    cx: center.x,
                                    cy: center.y,
                                    r: rSmall * 0.93,
                                    r0: rSmall * 0.87,
                                    startAngle: smallStartAngle,
                                    endAngle: smallEndAngle
                                },
                                style: {
                                    fill: '#14769f',
                                    lineWidth: 2
                                }
                            })
                            circleOnCircle.push({
                                type: 'circle',
                                shape: {
                                    cx: getCirclePoint(center.x, center.y, rSmall, 270 + i * 90 -angle).x,
                                    cy: getCirclePoint(center.x, center.y, rSmall, 270 + i * 90 - angle).y,
                                    r: 6
                                },
                                style: {
                                    fill: '#19ECFF',
                                    stroke: '#19ECFF',
                                    lineWidth: 2
                                }
                            })
                        }
                        return {
                            type: 'group',
                            children: [
                                {
                                    type: 'group',
                                    children: [
                                        ...bigSector,
                                        {
                                            // 外圆环
                                            type: 'arc',
                                            shape: {
                                                cx: center.x,
                                                cy: center.y,
                                                r: rBig
                                            },
                                            style: {
                                                fill: 'transparent',
                                                stroke: '#55EAF1',
                                                lineWidth: 2
                                            }
                                        }
                                    ]
                                },
                                {
                                    //内圆环
                                    type: 'group',
                                    children: [
                                        ...smallSector,
                                        ...circleOnCircle,
                                        {
                                            //内圆
                                            type: 'arc',
                                            shape: {
                                                cx: center.x,
                                                cy: center.y,
                                                r: rSmall
                                            },
                                            style: {
                                                fill: 'transparent',
                                                stroke: '#55EAF1',
                                                lineWidth: 2
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        }

        var data=[];


        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/windspeed",

            data: {},

            dataType: "json",

            // 回调函数

            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                data = result;
                console.log( data);

                for (var i = 0; i < data.length; i++) {
                    var item = {
                        name: i+'级',
                        value: data[i]
                    };
                    seriesData.push(item); // 将每个数据项添加到数组中
                }

                echart5.setOption({

                    series: [
                        {
                            data: seriesData,
                        }
                    ]

                })

            }
        })

        option &&echart5.setOption(option)
        //添加旋转动画
        let timer
        function play() {
            angle += 3
            option && echart5.setOption(option)
            if (timer) return
            timer = setTimeout(() => {
                requestAnimationFrame(play)
                timer = null
            }, 28)
        }

//过渡完成后开始动画
        echart5.on('finished', () => {
            play()
        })
    }

    function echarts_6(){
        console.log(9);
        var echart6 = echarts.init(document.getElementById('echart6'));
        var option;
        option = {
            color: ['#80FFA5'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },

            grid: {
                right: '4%',
                left: '6%',
                bottom:'3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    // data: date,
                    axisLabel:{
                        interval:0,
                        rotate:40,
                        textStyle: {
                            color: "rgba(255,255,255,255)",
                            fontSize:12,
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale:true,
                    axisLabel:{
                        textStyle: {
                            color: "rgba(255,255,255,255)",
                            fontSize: "12"
                        }
                    },

                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [140, 232, 101, 264]
                },

            ]
        };

        var airp = [];
        var data = [];
        var date = [];

        $.ajax({

            type: "post",

            async: true,

            url: "/station/XMD/airpressure",

            data: {},

            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if (item.airpressure=="999.9")
                        item.airpressure="0.00";
                    airp.push(item.airpressure);    //挨个取出类别并填入类别数组
                });
                var base = +new Date(2023, 6, 1,0);
                var oneHour =3600 * 1000;
                var targetDate = new Date(2023, 6, 31,23);
                data.push(airp[0]);
                console.log(airp[0]);
                var now = new Date(base);
                var i=1;
                var now1=[];
                function addData(shift) {
                    if(now>targetDate){
                        now = new Date(base);
                        i=0;
                    }
                    now1 = [ now.getMonth()+1, now.getDate()].join('/');
                    now1 = now1+" "+now.getHours()+":00";
                    date.push(now1);
                    data.push(airp[i++]);
                    if (shift) {
                        date.shift();
                        data.shift();
                    }
                    now = new Date(+new Date(now) + oneHour);
                }
                for (var i = 1; i < 10; i++) {
                    addData();
                }
                setInterval(function () {
                    addData(true);
                    echart6.setOption({
                        xAxis: {
                            data: date
                        },
                        series: [
                            {
                                name: '气压',
                                data: data
                            }
                        ]
                    });
                }, 1000);

            }


        })

        option && echart6.setOption(option);

    }
})