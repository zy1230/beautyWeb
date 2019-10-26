window.onload = function () {
    var btn = document.getElementsByClassName("d111")[0];
    btn.onclick = function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('get', '../carol.json');
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var arr = JSON.parse(xmlHttp.responseText);
                var a1 = document.getElementsByTagName("img")[1];
                var a2 = document.getElementsByTagName("img")[2];
                var h1 = document.getElementsByClassName("h1")[0];
                var span = document.getElementsByClassName("span1")[0];
                var p = document.getElementsByClassName("p1")[0];
                var hr = document.getElementsByClassName("hr1")[0];
                var hr1 = document.getElementsByClassName("hr1")[1];
                for (var i in arr) {
                    var product = arr[i];
                    a1.src = product.src;
                    a2.src = product.src1;
                    h1.innerHTML = product.h1;
                    span.innerHTML = product.span1;
                    p.innerHTML = product.p1;
                    h1.setAttribute("word-spacing", "-1px");
                    hr.css.width = "5px";
                    hr1.css.width = "5px";
                }
            }
        }
        xmlHttp.send();
    }

}
