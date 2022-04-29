/**
 * Bài 1:
 */
var sum = 0;
for (var i = 0; sum < 10000; i++) {
    sum += i;
    document.getElementById("footerBai1").innerHTML = i;
}

/**
 * Bài 2
 */
function getEle(id) {
    return document.getElementById(id);
}

getEle("btnBai2").onclick = function () {
    var soX = getEle("soX").value * 1;
    var soN = getEle("soN").value * 1;
    var tong = 0;
    for (j = 1; j <= soN; j++) {
        tong += soX ** j;
        // tong += Math.pow(soX, j)
        getEle("footerBai2").innerHTML = tong;
    }
}

/**
 * Bài 3
 */
getEle("btnBai3").onclick = function () {
    var soN_bai3 = getEle("soN_bai3").value * 1;
    var giaiThua = 1;
    for (k=1; k <= soN_bai3; k++) {
        giaiThua *= k;
        getEle("footerBai3").innerHTML = "Giai thừa: " + giaiThua;
    }
}

/**
 * Bài 4
 */
getEle("taoDiv").style.border = "black 5px solid";
getEle("btnBai4").onclick = function () {
    var content = "";
    var divNho = document.querySelector('.divNho');
    for (l = 1; l <= 10; l++) {
        // content += "<div class=divNho style = height:30px></div>";
        if (l % 2 === 0) {
            content += "<div class=divNho style = background-color:blue;color:white>Div chẵn: " + l + "</div>";

        } else if (l % 2 !== 0) {
            content += "<div class=divNho style = background-color:red;color:white>Div lẻ: " + l + "</div>";
        }
    }
    getEle("taoDiv").innerHTML = content;
}