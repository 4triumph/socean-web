var canvas = document.getElementById('fishtank');
var context = canvas.getContext('2d');
var fishes = [];
var speedBoostCountdown = 100,
    speedBoost = 0,
    SPEED_BOOST = 2;
var fishBitmap = new Image();
fishBitmap.onload = function() {
    update();
};
fishBitmap.src = "OceanEnvironment/SeawaterMonitoring/fish.png";

var cursor = {
    x: 0,
    y: 0
};
var cursorDown = false,
    keyDown = false;

document.onmousemove = function(e) {
    cursor.x = e.pageX - canvas.offsetLeft;
    cursor.y = e.pageY - canvas.offsetTop;
};

document.onmouseout = function(e) {
    cursor.y = cursor.x = Number.MAX_VALUE;
};

document.onmousedown = function() {
    activateSpeedBoost();
    cursorDown = true;
};

document.onmouseup = function() {
    cursorDown = false;
};

document.onkeydown = function() {
    keyDown = true;
};

document.onkeyup = function() {
    keyDown = false;
};

function deltaAngle(f, o) {
    var r = f - o;
    return Math.atan2(Math.sin(r), Math.cos(r));
}

function affinityLine(f, o, c) {
    var grad = context.createLinearGradient(f.x, f.y, o.x, o.y);
    grad.addColorStop(0, c);
    grad.addColorStop(1, "black");

    context.strokeStyle = grad;
    context.beginPath();
    context.moveTo(f.x, f.y);
    context.lineTo(o.x, o.y);
    context.stroke();
}

function activateSpeedBoost() {
    speedBoostCountdown = 400 + Math.round(400 * Math.random());
    speedBoost = SPEED_BOOST;
}

function update() {
    if (fishes.length < 300) {
        fishes.push(new Fish());
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < fishes.length; i++) {
        var fish = fishes[i];
        fish.calc();
        draw(fish);
    }

    speedBoostCountdown--;
    if (speedBoostCountdown < 0) {
        activateSpeedBoost();
    }

    if (speedBoost > 0) {
        speedBoost -= SPEED_BOOST / 80;
    } else {
        speedBoost = 0;
    }

    requestAnimationFrame(update);
}

function draw(f) {
    var r = f.angle + Math.PI;

    context.save();
    context.translate(f.x, f.y);
    context.rotate(r);

    var w = 20;
    var acc = py(f.dx - f.ox, f.dy - f.oy) / 0.05;

    if (acc > 1) {
        w = 10 + 10 / acc;
    }

    context.drawImage(fishBitmap, 0, 0, w, 6);
    context.rotate(-r);
    context.translate(-f.x, -f.y);

    context.restore();
}

function py(a, b) {
    return Math.sqrt(a * a + b * b);
}


var FOLLOW_DISTANCE = 150; // 增加跟随距离

function Fish() {
    this.ox = this.dx = Math.random() - 0.5;
    this.oy = this.dy = Math.random() - 0.5;
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.following = null;

    this.angleToClosestFish = function(otherFish) {
        otherFish = otherFish || this.following;
        if (otherFish) {
            return Math.atan2(otherFish.y - this.y, otherFish.x - this.x);
        } else {
            return Number.MAX_VALUE;
        }
    };

    this.angleFromFishDirectionToClosestFish = function(otherFish) {
        otherFish = otherFish || this.following;
        if (otherFish) {
            return Math.abs(deltaAngle(this.angle, this.angleToClosestFish(otherFish)));
        } else {
            return Number.MAX_VALUE;
        }
    };

    this.angleDirectionDifference = function(otherFish) {
        otherFish = otherFish || this.following;
        if (otherFish) {
            return Math.abs(deltaAngle(this.angle, otherFish.angle));
        } else {
            return Number.MAX_VALUE;
        }
    };

    this.calc = function() {
        this.ox = this.dx;
        this.oy = this.dy;
        var maxSpeed = 1;

        if (this.following == null || py(this.x - this.following.x, this.y - this.following.y) > FOLLOW_DISTANCE) {
            this.following = null;
            var closestDistance = Number.MAX_VALUE;

            for (var i = 0; i < fishes.length; i++) {
                var fish = fishes[i];
                if (fish != this) {
                    var distance = py(this.x - fish.x, this.y - fish.y);
                    if (
                        distance < closestDistance &&
                        fish.following != this &&
                        distance < FOLLOW_DISTANCE &&
                        this.angleFromFishDirectionToClosestFish(fish) < Math.PI * 0.25
                    ) {
                        closestDistance = distance;
                        this.following = fish;
                    }
                }
            }
        }

        if (this.following != null) {
            this.followingDistance = py(this.x - this.following.x, this.y - this.following.y);
            this.distanceFactor = 1 - this.followingDistance / FOLLOW_DISTANCE;

            if (this.angleDirectionDifference() > (Math.PI * 0.9) && this.angleFromFishDirectionToClosestFish() < (Math.PI * 0.2)) {
                this.dx += this.following.x * 0.1;
                this.dy += this.following.y * 0.1;
                if (keyDown) affinityLine(this.following, this, "yellow");
            } else if (this.followingDistance > FOLLOW_DISTANCE * 0.3) {
                this.dx += Math.cos(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
                this.dy += Math.sin(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
                if (keyDown) affinityLine(this.following, this, "red");
            }
        }

        if (this.x < canvas.width * 0.1 || this.x > canvas.width * 0.9 || this.y < canvas.height * 0.2 || this.y > canvas.height * 0.8) {
            this.dx += (canvas.width / 2 - this.x) / 5000;
            this.dy += (canvas.height / 2 - this.y) / 5000;
        }

        if (py(this.x - cursor.x, this.y - cursor.y) < FOLLOW_DISTANCE * 0.75) {
            this.dx -= (cursor.x - this.x) / 500;
            this.dy -= (cursor.y - this.y) / 500;
            maxSpeed = 4;
            if (keyDown) affinityLine(cursor, this, "green");
        }

        this.angle = Math.atan2(this.dy, this.dx);
        var speed = Math.max(0.1, Math.min(maxSpeed, py(this.dx, this.dy)));
        this.dx = Math.cos(this.angle) * (speed + speedBoost);
        this.dy = Math.sin(this.angle) * (speed + speedBoost);
        this.x += this.dx;
        this.y += this.dy;
    };
}





// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 注册地图
echarts.registerMap('china', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":710000,"name":"台湾省","center":[121.509062,25.044332],"centroid":[120.971485,23.749452],"childrenNum":0,"level":"province","acroutes":[100000],"parent":{"adcode":100000}},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.443558,22.441245],[120.517584,22.408536],[120.569903,22.361728],[120.640505,22.241347],[120.659209,22.15432],[120.662001,22.066983],[120.651464,22.033165],[120.667691,21.983168],[120.70157,21.927065],[120.743246,21.915569],[120.78155,21.923957],[120.85468,21.883333],[120.87291,21.897387],[120.866482,21.98436],[120.907315,22.033208],[120.904154,22.119757],[120.914955,22.302718],[120.981658,22.528305],[121.015009,22.584168],[121.033292,22.650725],[121.078498,22.669656],[121.170544,22.723133],[121.210481,22.770665],[121.237931,22.836327],[121.324708,22.945666],[121.354687,23.01006],[121.370388,23.084347],[121.409535,23.102669],[121.430294,23.137196],[121.415015,23.195973],[121.440358,23.272096],[121.479558,23.3223],[121.497788,23.419789],[121.521497,23.483198],[121.523078,23.538708],[121.587778,23.76102],[121.621604,23.92075],[121.659381,24.006893],[121.639992,24.064276],[121.643838,24.097713],[121.678085,24.133906],[121.689044,24.174401],[121.809172,24.339055],[121.826717,24.423579],[121.867498,24.478978],[121.885464,24.529677],[121.892524,24.617912],[121.862598,24.671515],[121.837993,24.76015],[121.845053,24.836269],[121.932883,24.938645],[122.012178,25.001469],[121.980776,25.03079],[121.947425,25.031955],[121.917077,25.137908],[121.842155,25.135332],[121.782407,25.160425],[121.750531,25.160716],[121.707327,25.191493],[121.700319,25.226913],[121.655324,25.241859],[121.623026,25.294694],[121.584986,25.308926],[121.535038,25.307515],[121.444415,25.270624],[121.413487,25.238912],[121.371864,25.159885],[121.319281,25.140691],[121.209322,25.127104],[121.133135,25.078728],[121.102102,25.075153],[121.024704,25.040479],[121.009688,24.993649],[120.960899,24.940227],[120.908475,24.852012],[120.892299,24.767526],[120.823753,24.688321],[120.762371,24.658335],[120.688661,24.600678],[120.64277,24.490172],[120.589187,24.432354],[120.546299,24.370413],[120.521009,24.312038],[120.470534,24.24259],[120.451461,24.182691],[120.392029,24.11824],[120.316158,23.984881],[120.278276,23.927798],[120.245768,23.840553],[120.175377,23.807385],[120.102773,23.700981],[120.094817,23.587466],[120.121741,23.504664],[120.107831,23.341264],[120.081434,23.29191],[120.018947,23.073115],[120.029537,23.048623],[120.131382,23.002118],[120.149138,22.896715],[120.200403,22.721101],[120.274272,22.560181],[120.297191,22.531315],[120.443558,22.441245]]],[[[124.542984,25.903911],[124.586346,25.913777],[124.572805,25.93974],[124.541825,25.931031],[124.542984,25.903911]]],[[[123.445286,25.725966],[123.472104,25.713024],[123.508933,25.723237],[123.514834,25.751226],[123.483063,25.768587],[123.444496,25.746514],[123.445286,25.725966]]],[[[119.64597,23.55091],[119.701081,23.550657],[119.678057,23.600041],[119.610089,23.603953],[119.594388,23.577245],[119.566306,23.584732],[119.562565,23.530377],[119.573788,23.505885],[119.609141,23.503864],[119.64597,23.55091]]],[[[123.667207,25.914066],[123.707092,25.916873],[123.678008,25.938667],[123.667207,25.914066]]],[[[119.506031,23.625567],[119.505241,23.575814],[119.472416,23.557136],[119.523207,23.563699],[119.525578,23.624895],[119.506031,23.625567]]],[[[119.49739,23.386683],[119.495125,23.350156],[119.516885,23.349903],[119.49739,23.386683]]],[[[119.557454,23.666474],[119.604083,23.616989],[119.615516,23.660925],[119.586485,23.675974],[119.557454,23.666474]]],[[[121.46823,22.676644],[121.476502,22.64166],[121.513541,22.631833],[121.5147,22.67639],[121.46823,22.676644]]],[[[121.510538,22.087185],[121.507693,22.048523],[121.534089,22.022146],[121.594522,21.995382],[121.604586,22.022699],[121.575028,22.037122],[121.575607,22.084421],[121.510538,22.087185]]],[[[122.097533,25.500168],[122.093581,25.47183],[122.124825,25.475932],[122.097533,25.500168]]],[[[119.421467,23.216684],[119.421309,23.18935],[119.453396,23.217697],[119.421467,23.216684]]],[[[120.355042,22.327259],[120.395454,22.342287],[120.383072,22.355573],[120.355042,22.327259]]]]}}]});

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '台湾省',
            type: 'map',
            map: 'china',
            label: {
                show: true
            },
            itemStyle: {
                areaColor: 'rgba(86,204,239,0.8)',
                borderColor: '#000'
            },
            data:[
                {name: '台湾省', value: Math.round(Math.random() * 1000)}
            ]
        }
    ]
};
myChart.setOption(option);


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


var myChart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
    xAxis: {
        type: 'category',
        data: ['2023年9月18日', '2023年9月19日', '2023年9月22日', '2023年9月23日', '2023年9月24日'],
        axisLabel: {
            color: '#e0e6f8',
            shadowColor: 'blue',
            shadowBlur: 10
        },
        axisLine: {
            lineStyle: {
                color: '#41bbfc'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '活度',
        axisLine: {
            lineStyle: {
                color: '#41bbfc'
            }
        }
    },
    title: {
        text: '北太平洋海域海水检测数据(含秋刀魚公海渔场)',
        left: 'center',
        textStyle: {
            color: '#e0e6f8',
            fontSize: 20,
        }
    },
    grid: {
        top: '25%',
    },
    series: [
        {
            data: [1.15, 1.17, 0.92, 1.37, 0.95],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 10,
            lineStyle: {
                color: '#e0e6f8',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
            }
        }
    ]
};
myChart1.setOption(option1);


var myChart2 = echarts.init(document.getElementById('chart2'));
var option2 = {
    dataset: [
        {
            source: [
                ['日期', '活度'],
                ['2023年6月6日', 0.92],
                ['2023年6月10日', 0.8],
                ['2023年6月11日', 1.3],
                ['2023年7月21日', 1.33],
                ['2023年8月17日', 1.31],
                ['2023年8月25日', 1.36],
                ['2023年8月27日', 1.08],
                ['2023年9月24日', 1.11],
                ['2023年9月28日', 1.22],
                ['2023年10月1日', 1.17],
                ['2023年10月2日', 1.15],
                ['2023年10月4日', 1.21],
                ['2023年10月12日', 1.31],
                ['2023年10月17日', 0.79],
                ['2023年10月18日', 1.32],
                ['2024年1月31日', 5.29]
            ]
        }
    ],
    title: {
        text: '台湾海域海水核种銫-137活度变化',
        left: 'center',
        textStyle: {
            color: '#e0e6f8',
            fontSize: 20,
        }
    },
    grid: {
        top: '20%',
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        nameLocation: 'middle',
        axisLine: {
            lineStyle: {
                color: '#41bbfc'
            }
        },
        axisLabel: {
            color: '#e0e6f8',
            shadowColor: 'blue',
            shadowBlur: 10
        },
    },
    yAxis: {
        type: 'value',
        name: '活度',
        axisLine: {
            lineStyle: {
                color: '#41bbfc'
            }
        }
    },
    series: [
        {
            type: 'line',
            encode: {
                x: '日期',
                y: '活度'
            },
            lineStyle: {
                width: 2,
                color: "#fced8d"
            },
            label: { // 显示数据标签
                show: true,
                position: 'top',
                textStyle: {
                    color: '#e0e6f8'
                }
            }
        }
    ]
};
myChart2.setOption(option2);



function showPopup(id) {
    var overlay = document.querySelector('.overlay');
    var popup = document.getElementById('popup' + id);
    if (popup && overlay) {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }
}

function hidePopup() {
    var overlay = document.querySelector('.overlay');
    var popups = document.querySelectorAll('.popup');
    if (overlay && popups) {
        overlay.style.display = 'none';
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
    }
}
