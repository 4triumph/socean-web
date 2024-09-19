var currentPopupTitle = "";
var currentPopupText = "";
var currentPopupPicture = "";
function showPopup(title, content, picture) {
    currentPopupTitle = title;
    currentPopupText = content;
    currentPopupPicture = picture;
    var popupTitle = document.getElementById("popupTitle");
    var popupText = document.getElementById("popupText");
    var popupPicture = document.getElementById("popupImage");

    switch (title) {
        case "黑角珊瑚(black coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "金珊瑚(Euphyllia ancora)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "钙质海绵(calcareous sponge)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "寻常海绵(demosponge)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "柳珊瑚(gorgonian coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "同爪海绵(homoscleromorph sponge)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "蕾丝珊瑚(lace coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "石髓珊瑚(lithotelestid coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "其他类珊瑚的水螅动物(other coral-like hydrozoan)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "海鞭(sea pen)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "软珊瑚科(soft coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "未特定种类的海绵(sponge)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "匍匐珊瑚(stoloniferan coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "硬珊瑚(分枝状,stony coral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "杯状硬珊瑚(cupcoral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        case "硬珊瑚(未指定,stonycoral)":
            popupTitle.innerText = title;
            popupText.innerText = content;
            popupPicture.src = picture;
            break;
        default:
            hidePopup();
    }

    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";

    var showPopupButton = document.getElementById("showPopupButton");
    showPopupButton.innerText = "关闭弹窗";
    showPopupButton.style.display = "block";
}

function hidePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";

    var showPopupButton = document.getElementById("showPopupButton");
    showPopupButton.innerText = "显示弹窗";
}

function togglePopup() {
    var popupContainer = document.getElementById("popupContainer");
    var showPopupButton = document.getElementById("showPopupButton");

    if (popupContainer.style.display === "none") {
        // 如果弹窗是隐藏的，则显示
        showPopup(currentPopupTitle, currentPopupText, currentPopupPicture);

    } else {
        // 如果弹窗是显示的，则隐藏
        hidePopup();
    }
}

function otherselect(){
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";

    var showPopupButton = document.getElementById("showPopupButton");
    showPopupButton.style.display = "none";
}

