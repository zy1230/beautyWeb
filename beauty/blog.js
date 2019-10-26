    var blog = document.getElementById("blog");
    var body = document.body;
    blog.onclick = function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('get', '../blog.json');
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var arr = JSON.parse(xmlHttp.responseText);
                var div4 = document.getElementById("div4");
                var div5 = document.getElementById("div5");
                var div6 = document.getElementById("div6");
                for (var i in arr) {
                    var product = arr[i];
                    div6.innerHTML = "";
                    div5.innerHTML ="";
                    div4.innerHTML="";
                    div5.style = product.divstyle;
                    var input = document.createElement("input");
                    input.style = product.inputstyle;
                    input.type = product.inputtype;
                    input.placeholder = product.inputplaceholder;
                    input.id = "in";
                    div5.appendChild(input);
                    var input = document.getElementById("in");
                    input.onfocus = function () {
                        input.style.backgroundColor="white";
                    }
                    input.onblur = function () {
                        input.style.backgroundColor="#dcd4c5";

                    }
                    var btn = document.createElement("button");
                    btn.style = product.buttonstyle;
                    btn.type = product.buttontype;
                    btn.innerHTML = product.buttoninn;
                    btn.id = "button1";
                    div5.appendChild(btn);

                    var img1 = document.createElement("img");
                    div5.appendChild(img1);
                    img1.src = product.img;
                    var p1 = document.createElement("p");
                    div5.appendChild(p1);
                    var i = document.createElement("i");
                    i.class = product.iclass;
                    i.style = product.istyle;
                    var span = document.createElement("span");
                    span.style = product.spanstyle;
                    span.innerHTML = product.spaninn;
                    p1.appendChild(i);
                    p1.appendChild(span);

                    var p2 = document.createElement("p");
                    p2.style = product.pstyle;
                    p2.innerHTML = product.pinn;
                    div5.appendChild(p2);

                    var hr = document.createElement("hr");
                    hr.style = product.hrstyle;
                    div5.appendChild(hr);

                    var br = document.createElement("br");
                    div5.appendChild(br);

                    var p3 = document.createElement("p");
                    div5.appendChild(p3);

                    var i1 = document.createElement("i");
                    i1.class = product.i1class;
                    i1.style = product.i1style;
                    p3.appendChild(i1);
                    var span1 = document.createElement("span");
                    span1.style = product.span1style;
                    span1.innerHTML = product.span1inn;
                    p3.appendChild(span1);

                    var p4 = document.createElement("p");
                    p4.style = product.p1style;
                    p4.innerHTML = product.p1inn;
                    div5.appendChild(p4);

                    var hr = document.createElement("hr");
                    hr.style = product.hrstyle;
                    div5.appendChild(hr);

                    var div1 = document.createElement("div");
                    div1.style = product.div1style;
                    div5.appendChild(div1);
                    var div111 = document.createElement("div");
                    div111.style = product.div111style;
                    div1.appendChild(div111);

                    var div11 = document.createElement("div");
                    div11.style = product.div11style;
                    div11.innerHTML = product.div11inn;
                    div11.id = "div11";
                    div1.appendChild(div11);

                    var div121 = document.createElement("div");
                    div121.style = product.div121style;
                    div1.appendChild(div121);

                    var div12 = document.createElement("div");
                    div12.style = product.div12style;
                    div12.innerHTML = product.div12inn;
                    div12.id = "div12";
                    div1.appendChild(div12);
                    var img1 = document.createElement("img");
                    img1.src = product.img1;
                    img1.style = product.img1style;
                    div1.appendChild(img1);

                    div6.style = product.leftdiv;
                    var leftdiv1 = document.createElement("div");
                    leftdiv1.style = product.leftdiv1;
                    div6.appendChild(leftdiv1);

                    var leftdiv11 = document.createElement("div");
                    leftdiv11.style = product.leftdiv11;
                    var leftdiv12 = document.createElement("div");
                    leftdiv12.style = product.leftdiv12;

                    leftdiv1.appendChild(leftdiv11);
                    leftdiv1.appendChild(leftdiv12);

                    var div12span1 = document.createElement("span");
                    div12span1.style = product.div12span1;
                    div12span1.innerHTML = product.div12span1inn;
                    div12span1.id = "span12";
                    leftdiv12.appendChild(div12span1);

                    var div12span2 = document.createElement("span");
                    div12span2.style = product.div12span2;
                    div12span2.innerHTML = product.div12span2inn;
                    leftdiv12.appendChild(div12span2);

                    var div12span21 = document.createElement("span");
                    div12span21.style = product.div12span21;
                    div12span21.innerHTML = product.div12span21inn;
                    div12span2.appendChild(div12span21);

                    var leftdiv13 = document.createElement("div");
                    leftdiv13.style = product.leftdiv13;
                    leftdiv1.appendChild(leftdiv13);

                    var div13span1 = document.createElement("span");
                    div13span1.style = product.div13span1;
                    div13span1.innerHTML = product.div13span1inn;
                    leftdiv13.appendChild(div13span1);

                    var div13span2 = document.createElement("span");
                    div13span2.style = product.div13span2;
                    div13span2.innerHTML = product.div13span2inn;
                    leftdiv13.appendChild(div13span2);

                    var br = document.createElement("br");
                    leftdiv1.appendChild(br);

                    var br1 = document.createElement("br");
                    leftdiv1.appendChild(br1);

                    var leftdiv14 = document.createElement("div");
                    leftdiv14.style = product.leftdiv14;
                    leftdiv1.appendChild(leftdiv14);

                    var div14span1 = document.createElement("span");
                    div14span1.style = product.div14span1;
                    div14span1.innerHTML = product.div14span1inn;
                    leftdiv14.appendChild(div14span1);

                    var br0 = document.createElement("br");
                    leftdiv14.appendChild(br0);

                    var div14span2 = document.createElement("span");
                    div14span2.style = product.div14span2;
                    div14span2.innerHTML = product.div14span2inn;
                    leftdiv14.appendChild(div14span2);

                    var leftdiv15 = document.createElement("div");
                    leftdiv15.style = product.leftdiv15;
                    leftdiv1.appendChild(leftdiv15);

                    var div15span1 = document.createElement("span");
                    div15span1.style = product.div15span1;
                    div15span1.innerHTML = product.div15span1inn;
                    leftdiv15.appendChild(div15span1);

                    var br2 = document.createElement("br");
                    leftdiv15.appendChild(br2);

                    var div15span2 = document.createElement("span");
                    div15span2.style = product.div15span2;
                    div15span2.innerHTML = product.div15span2inn;
                    leftdiv15.appendChild(div15span2);

                    var br3 = document.createElement("br");
                    leftdiv15.appendChild(br3);

                    var leftdiv16 = document.createElement("div");
                    leftdiv16.style = product.leftdiv16;
                    leftdiv1.appendChild(leftdiv16);

                    var div16span1 = document.createElement("span");
                    div16span1.style = product.div16span1;
                    div16span1.innerHTML = product.div16span1inn;
                    leftdiv16.appendChild(div16span1);

                    var br4 = document.createElement("br");
                    leftdiv16.appendChild(br4);

                    var div16span2 = document.createElement("span");
                    div16span2.style = product.div16span2;
                    div16span2.innerHTML = product.div16span2inn;
                    leftdiv16.appendChild(div16span2);

                    var br5 = document.createElement("br");
                    leftdiv16.appendChild(br5);

                    var lefthr = document.createElement("hr");
                    lefthr.style = product.lefthr;
                    leftdiv1.appendChild(lefthr);

                    var leftdiv2 = document.createElement("div");
                    leftdiv2.style = product.leftdiv2;
                    div6.appendChild(leftdiv2);

                    var leftdiv21 = document.createElement("div");
                    leftdiv21.style = product.leftdiv21;
                    leftdiv2.appendChild(leftdiv21);

                    var leftdiv22 = document.createElement("div");
                    leftdiv22.style = product.leftdiv22;
                    leftdiv2.appendChild(leftdiv22);

                    var div22span1 = document.createElement("span");
                    div22span1.style = product.div22span1;
                    div22span1.innerHTML = product.div22span1inn;
                    div22span1.id = "span22";
                    leftdiv22.appendChild(div22span1);

                    var div22span2 = document.createElement("span");
                    div22span2.style = product.div22span2;
                    div22span2.innerHTML = product.div22span2inn;
                    leftdiv22.appendChild(div22span2);

                    var div22span21 = document.createElement("span");
                    div22span21.style = product.div22span21;
                    div22span21.innerHTML = product.div22span21inn;
                    div22span2.appendChild(div22span21);

                    var leftdiv23 = document.createElement("div");
                    leftdiv23.style = product.leftdiv23;
                    leftdiv2.appendChild(leftdiv23);

                    var div23span1 = document.createElement("span");
                    div23span1.style = product.div23span1;
                    div23span1.innerHTML = product.div23span1inn;
                    leftdiv23.appendChild(div23span1);

                    var div23span2 = document.createElement("span");
                    div23span2.style = product.div23span2;
                    div23span2.innerHTML = product.div23span2inn;
                    leftdiv23.appendChild(div23span2);

                    var br8 = document.createElement("br");
                    leftdiv2.appendChild(br8);

                    var br9 = document.createElement("br");
                    leftdiv2.appendChild(br9);

                    var br10 = document.createElement("br");
                    leftdiv2.appendChild(br10);

                    var br11 = document.createElement("br");
                    leftdiv2.appendChild(br11);

                    var leftdiv2p = document.createElement("p");
                    leftdiv2p.style = product.leftdiv2p;
                    leftdiv2p.innerHTML = product.leftdiv2pinn;
                    leftdiv2.appendChild(leftdiv2p);

                    var leftdiv2p1 = document.createElement("p");
                    leftdiv2p1.style = product.leftdiv2p1;
                    leftdiv2p1.innerHTML = product.leftdiv2p1inn;
                    leftdiv2.appendChild(leftdiv2p1);

                    var leftdiv2p2 = document.createElement("p");
                    leftdiv2p2.style = product.leftdiv2p2;
                    leftdiv2p2.innerHTML = product.leftdiv2p2inn;
                    leftdiv2.appendChild(leftdiv2p2);

                    var leftdiv2img = document.createElement("img");
                    leftdiv2img.src = product.leftdiv2img;
                    leftdiv2img.style = product.leftdiv2imgstyle;
                    leftdiv2.appendChild(leftdiv2img);

                    var leftdiv2p3 = document.createElement("p");
                    leftdiv2p3.style = product.leftdiv2p3;
                    leftdiv2p3.innerHTML = product.leftdiv2p3inn;
                    leftdiv2.appendChild(leftdiv2p3);

                    var leftdiv2hr = document.createElement("hr");
                    leftdiv2hr.style = product.leftdiv2hr;
                    leftdiv2.appendChild(leftdiv2hr);

                    var br12 = document.createElement("br");
                    leftdiv2.appendChild(br12);

                    var leftdiv2p4 = document.createElement("p");
                    leftdiv2p4.style = product.leftdiv2p4;
                    leftdiv2p4.innerHTML = product.leftdiv2p4inn;
                    leftdiv2.appendChild(leftdiv2p4);

                    var leftdiv2img1 = document.createElement("img");
                    leftdiv2img1.src = product.leftdiv2img1;
                    leftdiv2img1.style = product.leftdiv2img1style;
                    leftdiv2.appendChild(leftdiv2img1);

                    var leftdiv2p5 = document.createElement("p");
                    leftdiv2p5.style = product.leftdiv2p5;
                    leftdiv2p5.innerHTML = product.leftdiv2p5inn;
                    leftdiv2.appendChild(leftdiv2p5);

                    var leftdiv2hr1 = document.createElement("hr");
                    leftdiv2hr1.style = product.leftdiv2hr1;
                    leftdiv2.appendChild(leftdiv2hr1);

                    var leftdiv3 = document.createElement("div");
                    leftdiv3.style = product.leftdiv3;
                    div6.appendChild(leftdiv3);

                    var leftdiv31 = document.createElement("div");
                    leftdiv31.style = product.leftdiv31;
                    leftdiv3.appendChild(leftdiv31);

                    var leftdiv32 = document.createElement("div");
                    leftdiv32.style = product.leftdiv32;
                    leftdiv3.appendChild(leftdiv32);

                    var div32span1 = document.createElement("span");
                    div32span1.style = product.div32span1;
                    div32span1.innerHTML = product.div32span1inn;
                    div32span1.id = "span32";
                    leftdiv32.appendChild(div32span1);

                    var div32span2 = document.createElement("span");
                    div32span2.style = product.div32span2;
                    div32span2.innerHTML = product.div32span2inn
                    leftdiv32.appendChild(div32span2);

                    var leftdiv33 = document.createElement("div");
                    leftdiv33.style = product.leftdiv33;
                    leftdiv3.appendChild(leftdiv33);

                    var div33span1 = document.createElement("span");
                    div33span1.style = product.div33span1;
                    div33span1.innerHTML = product.div33span1inn
                    leftdiv33.appendChild(div33span1);

                    var div33span2 = document.createElement("span");
                    div33span2.style = product.div33span2;
                    div33span2.innerHTML = product.div33span2inn
                    leftdiv33.appendChild(div33span2);

                    var br12 = document.createElement("br");
                    leftdiv3.appendChild(br12);

                    var br13 = document.createElement("br");
                    leftdiv3.appendChild(br13);

                    var br14 = document.createElement("br");
                    leftdiv3.appendChild(br14);

                    var br15 = document.createElement("br");
                    leftdiv3.appendChild(br15);

                    var leftdiv3p = document.createElement("p");
                    leftdiv3p.style = product.leftdiv3p;
                    leftdiv3p.innerHTML = product.leftdiv3pinn;
                    leftdiv3.appendChild(leftdiv3p);

                    var span = document.getElementById("span1");
                    span.style = product.leftdiv3pspan1;

                    var leftdiv3lable = document.createElement("lable");
                    leftdiv3lable.style = product.leftdiv3lable;
                    leftdiv3lable.innerHTML = product.leftdiv3lableinn;
                    leftdiv3.appendChild(leftdiv3lable);

                    var leftdiv3img1 = document.createElement("img");
                    leftdiv3img1.src = product.leftdiv3img1;
                    leftdiv3img1.style = product.leftdiv3img1style;
                    leftdiv3.appendChild(leftdiv3img1);

                    var leftdiv3lable1 = document.createElement("lable");
                    leftdiv3lable1.style = product.leftdiv3lable1;
                    leftdiv3lable1.innerHTML = product.leftdiv3lable1inn;
                    leftdiv3.appendChild(leftdiv3lable1);

                    var leftdiv3img2 = document.createElement("img");
                    leftdiv3img2.src = product.leftdiv3img2;
                    leftdiv3img2.style = product.leftdiv3img2style;
                    leftdiv3.appendChild(leftdiv3img2);

                    var leftdiv3hr = document.createElement("hr");
                    leftdiv3hr.style = product.leftdiv3hr;
                    leftdiv3.appendChild(leftdiv3hr);
                }
            }
        }
        xmlHttp.send();
    }