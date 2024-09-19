
$(function () {
    // 定义字体大小
    function placeholderPic() {
        w = document.documentElement.clientWidth / 80;
        document.documentElement.style.fontSize = w + 'px';
    }

    placeholderPic()

    // TOP5颜色循环
    function topColor() {
        var ele = $('.top5-content ul').children();
        var length = ele.length;
        var i = 1;
        setInterval(function () {
            $(ele[i]).find('.cicle').css({
                'background': 'url(DataBrowsing/ChinaAchievements/images/orange.png) no-repeat center',
                'backgroundSize': '100%'
            })
            $(ele[i]).find('.li-content').css({
                'background': 'url(DataBrowsing/ChinaAchievements/images/border2.png) no-repeat center',
                'backgroundSize': 'contain'
            })
            $(ele[i]).siblings().find('.cicle').css({
                'background': 'url(DataBrowsing/ChinaAchievements/images/green.png) no-repeat center',
                'backgroundSize': '100%'
            })
            $(ele[i]).siblings().find('.li-content').css({
                'background': 'url(DataBrowsing/ChinaAchievements/images/border.png) no-repeat center',
                'backgroundSize': 'contain'
            })
            i++
            if (i == length) {
                i = 0
            }
        }, 3000)
    }

    topColor()

    // 中间背景雨
    function rainBg() {
        var c = document.querySelector(".rain");
        var ctx = c.getContext("2d");//获取canvas上下文
        var w = c.width = document.querySelector('.total').clientWidth;
        var h = c.height = document.querySelector('.total').clientHeight;

        //设置canvas宽、高

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function RainDrop() {
        }

        //雨滴对象 这是绘制雨滴动画的关键
        RainDrop.prototype = {
            init: function () {
                this.x = random(0, w);//雨滴的位置x
                this.y = h;//雨滴的位置y
                this.color = 'hsl(180, 100%, 50%)';//雨滴颜色 长方形的填充色
                this.vy = random(4, 5);//雨滴下落速度
                this.hit = 0;//下落的最大值
                this.size = 2;//长方形宽度
            },
            draw: function () {
                if (this.y > this.hit) {
                    var linearGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.size * 30)
                    // 设置起始颜色
                    linearGradient.addColorStop(0, '#14789c')
                    // 设置终止颜色
                    linearGradient.addColorStop(1, '#090723')
                    // 设置填充样式
                    ctx.fillStyle = linearGradient
                    ctx.fillRect(this.x, this.y, this.size, this.size * 50);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
                }
                this.update();//更新位置
            },
            update: function () {
                if (this.y > this.hit) {
                    this.y -= this.vy;//未达到底部，增加雨滴y坐标
                } else {
                    this.init();
                }
            }
        };

        function resize() {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
        }

        //初始化一个雨滴

        var rs = []
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                var r = new RainDrop();
                r.init();
                rs.push(r);
            }, i * 300)
        }

        function anim() {
            ctx.clearRect(0, 0, w, h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
            for (var i = 0; i < rs.length; i++) {
                rs[i].draw();//绘制雨滴
            }
            requestAnimationFrame(anim);//控制动画帧
        }

        window.addEventListener("resize", resize);
        //启动动画
        anim()

    }

    rainBg()

    //堆叠柱状图
    function stackchart() {

        var myChart = echarts.init(document.querySelector('.stackChart'));

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle:{
                    color:'#fff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min:0,
                max:100,
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年', '2023年'],
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '海洋第一产业',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [5.1, 5.1, 4.7, 4.4, 4.2, 4.9, 5.0, 4.6, 4.7]
                },
                {
                    name: '海洋第二产业',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [42.4, 39.7, 37.7, 36.5, 35.8, 33.4, 33.4, 36.5, 35.8]
                },
                {
                    name: '海洋第三产业',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [52.7, 55.2, 57.6, 59.1, 60.0, 61.7, 61.6, 58.9, 59.5]
                },
            ]
        };
        var index = 0;
        var mTime = setInterval(function () {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index >= 9) {
                index = 0;
            }
        }, 1500);

        myChart.setOption(option);
    }
    stackchart();

    // 柱状图
    function barchart() {
        var myChart = echarts.init(document.querySelector('.barChart'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['海洋生产总值', '占比'],
                textStyle:{
                    color:'#fff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    name: '区域',
                    data: ['北部', '东部', '南部'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '海洋生产总值（亿元）',
                    nameTextStyle: {
                        color: '#fff'
                    },
                    position: 'left',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    type: 'value',
                    name: '占比（%）',
                    nameTextStyle: {
                        color: '#fff'
                    },
                    position: 'right',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '海洋生产总值',
                    type: 'bar',
                    data: [25867, 29000, 35518]
                },
                {
                    name: '占比',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [28.6, 32.1, 39.3]
                }
            ]
        };
        var index = 0;
        var mTime = setInterval(function () {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index >= 3) {
                index = 0;
            }
        }, 1500);

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    barchart();

    // 折线图
    function lineChart(ele, newData) {
        var chart = echarts.init(document.querySelector(ele));

        var xdata = [];
        var dataArr = newData; // 使用传入的新数据数组
        for (var i = 2015; i < 2024; i++) {
            xdata.push(i);
        }
        var max = Math.max.apply(null, dataArr);

        var seriesName = '';
        option = {
            grid: {
                left: "5%",
                bottom: "5%",
                top: "15%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: xdata,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 0.5 * w
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'transparent',
                        width: 2
                    }
                }
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: function (params) {
                    return params.name + '：' + params.value + '亿元';
                }
            },
            yAxis: [{
                type: 'value',
                name: '亿元',
                min: 20000,
                max: 100000,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff',
                        fontSize: 0.5 * w
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'transparent',
                        width: 2
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: seriesName,
                type: 'line',
                stack: '总量',
                symbol: 'none',
                smooth: false,
                symbol: "circle",
                itemStyle: {
                    normal: {
                        color: '#34a39a',
                        lineStyle: {
                            color: "#34a39a",
                            width: 2
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#08808b"
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,0,0.2)',
                            }])
                        }
                    }
                },
                data: dataArr
            },]
        };

        var index = 0;
        var mTime = setInterval(function () {
            chart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index > xdata.length) {
                index = 0;
            }
        }, 1500);

        chart.setOption(option);
    }

    lineChart('.lineChart', [64669, 70507, 77611, 83415, 89415, 80010, 90385, 94628, 99097]);

    // 中间虚线
    function dashed() {
        var canvas = document.querySelector('.dashed')
        var ctx = canvas.getContext('2d')
        var w = canvas.width = document.querySelector('.total').clientWidth
        var h = canvas.height = document.querySelector('.total').clientHeight / 3 * 2
        ctx.lineWidth = 3
        ctx.setLineDash([3, 3]);
        ctx.fillStyle = '#93f8fb'
        ctx.shadowOffsetX = 0;
        // 阴影的y偏移
        ctx.shadowOffsetY = 0;
        // 阴影颜色
        ctx.shadowColor = '#93f8fb';
        // 阴影的模糊半径
        ctx.shadowBlur = 15;
        ctx.save()  //缓存初始状态
        // 绘制第一条曲线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 11 * 2, h / 3, w / 5 * 2, h);
        grd.addColorStop(0, "#54e2e6");
        grd.addColorStop(1, "#065261");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2, h)
        ctx.quadraticCurveTo(w / 5, h / 6 * 5, w / 11 * 2, h / 3);
        ctx.stroke();
        // 绘制第一条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 11 * 2, h / 3)
        ctx.arc(w / 11 * 2, h / 3, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第二条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 11 * 3.3, h / 2, w / 3 * 1.1, h / 6 * 5);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 3 * 1.1, h / 6 * 5)
        ctx.quadraticCurveTo(w / 5 * 1.5, h / 6 * 4.2, w / 11 * 3.3, h / 2);
        ctx.stroke();
        // 绘制第二条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 11 * 3.3, h / 2)
        ctx.arc(w / 11 * 3.3, h / 2, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第三条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 3 * 1.4, h / 5, w / 5 * 2, h / 2);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2, h / 2 )
        ctx.quadraticCurveTo(w / 3 * 1.2, h / 4 * 1.4, w / 3 * 1.4, h / 5);
        ctx.stroke();
        // 绘制第三条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 3 * 1.4, h / 5)
        ctx.arc(w / 3 * 1.4, h / 5, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第四条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.1, h / 3*1.2, w / 5 * 3.2, h / 2 * 1.5);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 3.2, h / 2 * 1.5)
        ctx.quadraticCurveTo(w / 5 * 3.35, h / 2 * 1.2, w / 5 * 3.1, h / 3*1.2);
        ctx.stroke();
        // 绘制第四条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo( w / 5 * 3.1, h / 3*1.2)
        ctx.arc( w / 5 * 3.1, h / 3*1.2, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第五条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.3, h / 4, w / 5 * 3.2, h / 2 * 1.9);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 3.03, h / 2 * 1.9)
        // ctx.quadraticCurveTo(w / 5 * 3.8, h / 2 * 1.2, w / 5 * 3.3, h / 4);
        ctx.quadraticCurveTo(w / 5 * 3.8, h / 2 * 1.2, w / 5 * 3.7, h / 2.8);
        ctx.stroke();
        // 绘制第五条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 5 * 3.3, h / 4)
        ctx.arc(w / 5 * 3.7, h / 2.8, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第六条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.8, h / 2*1.2, w / 5 * 2.9, h);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2.9, h)
        ctx.quadraticCurveTo(w / 5 * 3.7, h / 2 * 1.6, w / 5 * 3.8, h / 2*1.2);
        ctx.stroke();
        // 绘制第六条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 5 * 3.8, h / 2*1.2)
        ctx.arc(w / 5 * 3.8, h / 2*1.2, 5, 0, Math.PI * 2)
        ctx.fill()
    }
    dashed()

})

