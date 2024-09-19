function redirectToExternalLink() {
    window.location.href = "http://www.wocean.xyz/";
}
function toggleheatBar(show) {
    var toggleheatBar = document.querySelector('.heat-bar');
    toggleheatBar.style.display = show ? 'block' : 'none';
}
function togglesaltyBar(show) {
    var togglesaltyBar = document.querySelector('.salty-bar');
    togglesaltyBar.style.display = show ? 'block' : 'none';
}
function toggleoxyBar(show) {
    var toggleoxyBar = document.querySelector('.oxy-bar');
    toggleoxyBar.style.display = show ? 'block' : 'none';
}
function show(){
    // 获取具有 id 为 "menu" 的元素
    var menuElement = document.getElementById("menu");
// 切换 "invisible" 和 "visible" 类
    menuElement.classList.toggle("invisible");
    menuElement.classList.toggle("visible");

}
// 隐藏元素
function hidetime() {
    // 获取需要操作的元素
    viewer.timeline.container.style.display="none";
    viewer.animation.container.style.display ='none';
}

// 显示元素
function showtime() {
    // 获取需要操作的元素
    viewer.timeline.container.style.display="";
    viewer.animation.container.style.display ="";
}
function wind(){
    setViewerImageryProvider("otherOption");
    toggleheatBar(false);
    togglesaltyBar(false);
    toggleoxyBar(false);
    hidetime();
    viewer.clock.shouldAnimate = false;
    viewer.clock.onTick.removeEventListener(eventListener);
    viewer.clock.onTick.removeEventListener(rotate);
    $.ajax({
        type: "get",
        url: "Global/sampledata/wind/2.json",//请求风场数据源json
        dataType: "json",
        success: function (response) {
            // console.log(response);
            var header = response[0].header;
            // console.log(header);
            viewer.scene.primitives.removeAll();
            windy = new Windy(response, viewer);
            redraw();
        },
        error: function (errorMsg) {
            alert("请求数据失败1!");
        }
    });
    var timer = null;
    //加载风场图
    function redraw() {
        timer = setInterval(function () {
            windy.animate();
        }, 300);
    }

    otherselect();

}
function curr(){
    setViewerImageryProvider("otherOption");
    toggleheatBar(false);
    togglesaltyBar(false);
    toggleoxyBar(false);
    hidetime();
    viewer.clock.shouldAnimate = false;
    viewer.clock.onTick.removeEventListener(eventListener);
    viewer.clock.onTick.removeEventListener(rotate);
    $.ajax({
        type: "get",
        url: "Global/sampledata/wind/20140131-surface-currents-oscar-0.33.json",//请求风场数据源json
        dataType: "json",
        success: function (response) {
            // console.log(response);
            var header = response[0].header;
            // console.log(header);
            viewer.scene.primitives.removeAll();
            windy = new Windy(response, viewer);

            redraw();
        },
        error: function (errorMsg) {
            alert("请求数据失败1!");
        }
    });
    var timer = null;
    //加载风场图
    function redraw() {
        timer = setInterval(function () {
            windy.animate();
        }, 300);
    }

    otherselect();
}
function pic(url){
    windy=[];
    // 加载 PNG 图像
    Cesium.Resource.fetchImage(url) // 替换为您的PNG图像路径
        .then(function(image) {
            // 创建 Canvas 元素
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;

            // 获取 Canvas 上下文
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);

            // 获取图像数据
            var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;

            // 将黑色部分设置为透明
            for (var i = 0; i < data.length; i += 4) {
                var red = data[i];
                var green = data[i + 1];
                var blue = data[i + 2];

                if (red === 0 && green === 0 && blue === 0) { // 如果颜色为黑色
                    data[i + 3] = 0; // 将透明度设置为完全透明
                }
            }

            // 将修改后的图像数据重新绘制到 Canvas
            context.putImageData(imageData, 0, 0);

            // 创建材质
            var material = new Cesium.Material({
                fabric: {
                    type: 'Image',
                    uniforms: {
                        image: canvas.toDataURL(), // 使用修改后的图像数据作为材质的图像源
                    },
                },
            });

            // 创建 Primitive
            var primitive = new Cesium.Primitive({
                id: 'image',
                geometryInstances: geometry,
                appearance: new Cesium.EllipsoidSurfaceAppearance({
                    aboveGround: false,
                    material: material,
                }),
                asynchronous: false,
                compressVertices: false,
            });
            viewer.scene.primitives.removeAll();
            // 添加 Primitive 到 Viewer
            viewer.scene.primitives.add(primitive);
        });

}
function qietu(x) {
    showtime();
    viewer.clock.onTick.removeEventListener(eventListener);
    // 设置起始时间和结束时间
    // console.log(x);
    // viewer.clock.shouldAnimate = true;
    var start = Cesium.JulianDate.fromIso8601('2023-01-01T00:00:00Z');
    var end = Cesium.JulianDate.fromIso8601('2023-12-31T23:59:59Z');
    viewer.timeline.zoomTo(start, end);
    viewer.clock.shouldAnimate = true;
    viewer.clock.startTime = Cesium.JulianDate.fromDate(new Date(start));
    viewer.clock.stopTime = Cesium.JulianDate.fromDate(new Date(end));
    viewer.clock.currentTime = viewer.clock.startTime;
    viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
    viewer.clock.multiplier = 86400 * 5;


    // 自传
    viewer.clock.onTick.addEventListener(rotate);
    setTimeout(function() {
        viewer.clock.onTick.removeEventListener(rotate);
    }, 35000);

    // 注册时间改变事件
    lm = 0;
    eventListener = function(clock) {
        var currentTime = clock.currentTime;
        var m = Cesium.JulianDate.toIso8601(currentTime).substring(5, 7);
        if (parseInt(m) !== lm) {
            pic(getImageUrl(parseInt(m), x));
            console.log(getImageUrl(parseInt(m), x));
        }
        lm = parseInt(m);
    };
    viewer.clock.onTick.addEventListener(eventListener);

    // 根据月份获取对应的图片路径
    function getImageUrl(month, x) {
        return 'Global/sampledata/wind/' + x + month + '.png';
    }
}

function heat(){
    setViewerImageryProvider("heat");
    qietu("t");
    toggleheatBar(true);
    togglesaltyBar(false);
    toggleoxyBar(false);

    otherselect();
}
function salty(){
    setViewerImageryProvider("salty");
    qietu("s");
    toggleheatBar(false);
    togglesaltyBar(true);
    toggleoxyBar(false);

    otherselect();
}
function oxy(){
    setViewerImageryProvider("oxy");
    qietu("o");
    toggleheatBar(false);
    togglesaltyBar(false);
    toggleoxyBar(true);

    otherselect();
}
function coral(url,color){
    windy=[];
    toggleheatBar(false);
    togglesaltyBar(false);
    toggleoxyBar(false);
    hidetime();
    viewer.clock.shouldAnimate = false;
    viewer.clock.onTick.removeEventListener(rotate);
    viewer.clock.onTick.removeEventListener(eventListener);
    viewer.scene.primitives.removeAll();
    var randomCount;
    var lon=[];
    var lat=[];
    $.ajax({
        type: "get",
        url: "/coral/"+url,
        async: false, // 设置为同步请求
        dataType: "json",
        success: function (result) {
            randomCount = result.length;
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                lat.push(item.latitude);    //挨个取出类别并填入类别数组
                lon.push(item.longitude);
                // console.log(airtemp);
            });
        },
        error: function (errorMsg) {
            alert("请求数据失败1!");
        }
    });
    var pointPrimitives = null;// 申明点渲染集合
    pointPrimitives = this.viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());

    // while (randomCount--) {
    //     var position = Cesium.Cartesian3.fromDegrees(lon[randomCount],lat[randomCount], 100);
    //     pointPrimitives.add({
    //         pixelSize: 5,
    //         color: Cesium.Color[color],
    //         outlineColor: Cesium.Color.BLACK,
    //         outlineWidth: 0,
    //         position: position
    //     });
    // }
    while (randomCount--) {
        var position = Cesium.Cartesian3.fromDegrees(lon[randomCount], lat[randomCount], 100);
        pointPrimitives.add({
            pixelSize: 5,
            color: Cesium.Color.fromCssColorString(color),
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 0,
            position: position
        });
    }

    otherselect();

}

function bc(){

    setViewerImageryProvider("otherOption");
    coral("blackcoral","white");
    showPopup('黑角珊瑚(black coral)', '六放珊瑚亚纲之黑珊瑚目下的珊瑚，一般称为黑珊瑚。黑角珊瑚主要分布在世界各地的深海环境中，特别是在热带和亚热带海域。它们生活在水深几十米至几千米的范围内，通常生长在岩石、海底悬崖和沉船等底栖物体上', 'Global/img/bc.jpg');
    updateCameraPosition();
}
function cs(){
    setViewerImageryProvider("otherOption");
    coral("calcareoussponge","green");
    showPopup('钙质海绵(calcareous sponge)', '钙质海绵具有由碳酸钙（方解石或文石）组成的骨架，使其具有坚硬且通常脆弱的质地。它们通常具有简单的体型结构，由一系列小管道和腔室组成。主要分布在海洋环境中，从浅海沿岸水域到深海栖息地均有发现。它们附着在硬质基底上，如岩石、珊瑚礁和贝壳上，通过过滤周围水体中的微生物和有机颗粒获取食物。', 'Global/img/cs.jpg');
}
function ds(){
    setViewerImageryProvider("otherOption");
    coral("demosponge","green");
    showPopup('寻常海绵(demosponge)', '又称漏斗海绵。通常具有不规则的形状，表面覆盖着许多小孔，这些小孔称为气孔。它们的体壁由几层细胞组成，其中包括中胶质细胞、骨刺细胞和原细胞。身体结构相对简单，没有真正的组织器官或神经系统。主要分布在海洋环境中，可以生活在各种不同的水域，从浅海到深海，从热带到极地。它们通常栖息在岩石、珊瑚礁、海底沙泥或其他硬质基底上。', 'Global/img/ds.jpg');
}
function gs(){
    setViewerImageryProvider("otherOption");
    coral("glasssponge","green");
    showPopup('玻璃海绵(glasss ponge)', '玻璃海绵的身体结构呈玻璃般透明，因此得名。它们通常具有规则的形状，如球形、杯形或筒状，表面覆盖着规则排列的小孔。玻璃海绵的体壁由硅质骨刺和胶质物质组成，使其具有坚硬的质地。主要分布在深海环境中，特别是在寒冷的极地水域。它们通常栖息在海底的硬质基底上，如岩石、珊瑚礁或其他海底结构上。', 'Global/img/gs.jpg');
}
function gc(){
    setViewerImageryProvider("otherOption");
    coral("goldcoral","white");
    showPopup('金珊瑚(Euphyllia ancora)', '金珊瑚通常呈现出金黄色或橙色，因此得名。其分枝状的形态具有典型的珊瑚外观，叶片状的珊瑚体上有很多小的口。' +
        '它们在水下生长，通常是珊瑚礁的一部分。金珊瑚根据其生长环境可分为深水金珊瑚和浅水金珊瑚两个品种。深水金珊瑚产于太平洋地区中途岛海域水深约900米至2500米之间。' +
        '浅水金珊瑚则是生长在夏威夷群岛的茂伊岛与台湾西南部海域水深约350米至600米之间。', 'Global/img/gc.png');
}

function ggc(){
    setViewerImageryProvider("otherOption");
    coral("gorgoniancoral","white");
    showPopup('柳珊瑚(gorgonian coral)', '也称海扇，海柳，海鞭，角珊瑚，为珊瑚纲八放珊瑚亚纲的一目。多数种类的群体组成扇形、鞭形或枝状，故名。通常呈现出分支状或扇形的形态，具有许多多孔的结构，其颜色多样，包括红色、橙色、黄色、紫色和白色等。一些品种在紫外光下会显示出荧光颜色。广泛分布于全球的海洋环境中，主要生活在浅热带和亚热带水域。它们依附在岩石或珊瑚礁等硬质基底上，通过过滤水体中的浮游生物获取营养。', 'Global/img/ggc.jpg');
}
function hs(){
    setViewerImageryProvider("otherOption");
    coral("homoscleromorphsponge","green");
    showPopup('同爪海绵(homoscleromorph sponge)', '通常具有扁平或球形的体型，其体壁由一层细胞组成，没有明显的中胶质细胞或骨刺。它们的细胞结构比其他海绵更复杂，具有多种类型的细胞。主要生活在海洋环境中，通常分布在浅海的岩石表面、珊瑚礁或其他硬质底质上。它们也被发现生活在淡水环境中，如河流、湖泊等。', 'Global/img/hs.jpg');
}
function lc(){
    setViewerImageryProvider("otherOption");
    coral("lacecoral","white");
    showPopup('蕾丝珊瑚(lace coral)', '外观独特，有时呈现出细腻的线状或网状结构，因此得名。它们的骨架通常是脆弱的，由钙质或硅质构成。在水下环境中，蕾丝珊瑚可以展现出华丽而精细的结构，有时呈现出仿佛蕾丝般的美丽。主要生长在热带和亚热带的海域，通常在较深的水域中发现。它们可以生长在岩石、沉船、珊瑚礁等硬质基底上。', 'Global/img/lc.jpg');
}
function llc(){
    setViewerImageryProvider("otherOption");
    coral("lithotelestidcoral","white");
    showPopup('石髓珊瑚(lithotelestid coral)', '外观类似于硬珊瑚，通常有分枝状或网状的结构。它们的体型相对较小，而且通常是透明或半透明的。主要栖息在岩石或其他硬质底质上，通常生活在海洋环境中。它们可以在各种深度和环境中发现，包括浅海和深海区域。', 'Global/img/llc.jpg');
}
function oc(){
    setViewerImageryProvider("otherOption");
    coral("othercoral-likehydrozoan","yellow");
    showPopup('其他类珊瑚的水螅动物(other coral-like hydrozoan)', '通常具有珊瑚般的外观，具有分枝状或网状的结构。它们的体形相对较小，通常是珊瑚的许多倍，而且通常是透明或半透明的。主要生活在海洋环境中，通常栖息在珊瑚礁、岩石或其他硬质底质上。它们也可以生活在淡水环境中，如河流、湖泊等。', 'Global/img/oc.jpg');
}
function sp(){
    setViewerImageryProvider("otherOption");
    coral("seapen","white");
    showPopup('海鞭(sea pen)', '通常具有细长的柔软身体，形状类似于一支笔或鞭子，因此得名。它们的身体表面覆盖着细小的鳞片，有时会呈现出各种颜色。海鞭的两端通常呈现出尖锐或钝化的形态。广泛分布于世界各大洋的浅海和深海水域中。它们通常生活在海底沉积物中，也有些种类生活在珊瑚礁附近或其他海底结构附近。', 'Global/img/sp.jpg');
}
function sc(){
    setViewerImageryProvider("otherOption");
    coral("softcoral","white");
    showPopup('软珊瑚科(soft coral)', '软珊瑚的身体通常柔软而灵活，没有硬的外骨骼。它们的结构由许多细小的多孔细胞组成，这些细胞通过共生藻类进行光合作用。广泛分布于全球的海洋中，主要生活在温暖的浅海水域，特别是在热带和亚热带地区。它们生活在各种海洋生态系统中，包括珊瑚礁、岩石、泥沙和深海底等。', 'Global/img/sc.png');
}
function su(){
    setViewerImageryProvider("otherOption");
    coral("sponge(unspecified)","blue");
    showPopup('未特定种类的海绵(sponge)', '海绵的外观形态多样，包括球状、扁平状、分枝状等。它们通常由多孔的身体构成，表面覆盖着微小的孔道，用于水流的进出和过滤。海绵的颜色也各不相同，可能是白色、黄色、橙色、褐色等。', 'Global/img/su.png');
}
function stc(){
    setViewerImageryProvider("otherOption");
    coral("stoloniferancoral","white");
    showPopup('匍匐珊瑚(stoloniferan coral)', '具有从结壳的水平分枝匍匐茎上萌芽的独立息肉。骨骼包括针状体或由角质外角质层组成。通常生长在海洋环境中，特别是在浅热带和亚热带水域，那里有充足的阳光照射。它们可以附着在岩石、贝壳或其他珊瑚骨架上。', 'Global/img/stc.jpg');
}
function scb(){
    setViewerImageryProvider("otherOption");
    coral("stonycoral(branching)","white");
    showPopup('硬珊瑚(分枝状,stony coral)', '通常具有分枝状的结构，呈现出树枝般的外观。这些分枝可以在水中延伸，并且有时会呈现出复杂的立体结构。它们的外形和颜色因物种而异，可能是白色、黄色、粉红色等。主要生长在热带和亚热带海域的浅水区域，通常附着在岩石、沙粒或其他硬质底质上。', 'Global/img/scb.jpg');
}
function scc(){
    setViewerImageryProvider("otherOption");
    coral("stonycoral(cupcoral)","white");
    showPopup('杯状硬珊瑚(cupcoral)', '杯状或碗状的结构，通常呈现出圆形或椭圆形的外观。这些杯状结构通常由钙质骨架构成，珊瑚虫（珊瑚动物）生活在其中。主要生长在热带和亚热带海域的浅水区域，通常附着在岩石、珊瑚礁或其他硬质底质上。', 'Global/img/scc.png');
}

function scu(){
    setViewerImageryProvider("otherOption");
    coral("stonycoral(unspecified)","yellow");
    showPopup('硬珊瑚(未指定,stonycoral)', '硬珊瑚的外观形态多样，包括分枝状、杯状、球状等。它们的颜色也各异，可能是白色、黄色、橙色、粉红色等。在光线充足的情况下，珊瑚通常会与共生的藻类形成共生关系，使其表面呈现出丰富的色彩。主要生长在热带和亚热带海域的浅水区域，通常附着在岩石、珊瑚礁或其他硬质底质上。', 'Global/img/scu.jpg');
}

// var image_Source = new Cesium.UrlTemplateImageryProvider({
//     //url: 'http://mt0.google.cn/vt/lyrs=t,r&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
//     //url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//     url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
//     //tilingScheme : new Cesium.GeographicTilingScheme(),

//     credit: ''
// });
var imageryProvider1 = new Cesium.UrlTemplateImageryProvider({
    // url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    url: "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=2fd9db455b8fc0149674b2252576020d",
    minimumLevel: 3,
    maximumLevel: 18
});
var imageryProvider2 = new Cesium.UrlTemplateImageryProvider({
    url:"https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{x}/{y}"
    // url: "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=2fd9db455b8fc0149674b2252576020d",
    // minimumLevel: 3,
    // maximumLevel: 18
});
var viewer = new Cesium.Viewer('cesiumContainer', {
    selectionIndicator: false,
    animation:true,
    baseLayerPicker:false,
    geocoder: false,
    timeline: true,
    sceneModePicker: true,
    navigationHelpButton: false,
    infoBox: false,
    fullscreenButton: true,
    // imageryProvider: image_Source
    // imageryProvider: imageryProvider
    imageryProvider: imageryProvider1
});

// 定义函数根据不同选项设置不同的底图提供者
function setViewerImageryProvider(option) {
    if (option === "heat" || option === "salty" || option === "oxy") {
        viewer.imageryLayers.removeAll();
        viewer.imageryLayers.addImageryProvider(imageryProvider2);
    } else {
        viewer.imageryLayers.removeAll();
        viewer.imageryLayers.addImageryProvider(imageryProvider1);
    }
}
hidetime();
//隐藏logo
hideMapLogo();
//隐藏太阳
viewer.scene.globe.enableLighting = false;
viewer.shadows = false;
viewer.scene.sun.show=false;
/**
 * 隐藏logo以及地图服务版权信息
 * @method hideMapLogo
 * @param
 * @return
 */
function hideMapLogo(){
    viewer._cesiumWidget._creditContainer.style.display = "none";
}

const rectangle = new Cesium.RectangleGeometry({
    ellipsoid : Cesium.Ellipsoid.WGS84,
    height : 10000.0,
    rectangle: Cesium.Rectangle.fromDegrees(
        -180,
        -90,
        180,
        90
    ),
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
});

const reactgeometry = Cesium.RectangleGeometry.createGeometry(rectangle);

const geometry = new Cesium.GeometryInstance({
    geometry: reactgeometry,
});
//定义事件
var eventListener;
var i = Date.now();
function rotate() {
    var a = 0.1;
    var t = Date.now();
    var n = (t - i) / 1000;
    i = t;
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -a * n);
}

// function showPopup(title, text, imagePath) {
//     var popupContainer = document.getElementById('popupContainer');
//     var titleElement = document.getElementById('popupTitle');
//     var textElement = document.getElementById('popupText');
//     var imageElement = document.getElementById('popupImage');
//
//     // 填充标题和文字内容
//     titleElement.textContent = title;
//     textElement.textContent = text;
//
//     // 设置图片路径
//     imageElement.src = imagePath;
//
//     // 显示弹窗
//     popupContainer.style.display = 'flex';
// }

// // 函数用于关闭弹窗
// function closePopup() {
//     var popupContainer = document.getElementById('popupContainer');
//     popupContainer.style.display = 'none';
// }