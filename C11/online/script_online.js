var myArray = ['Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css', 'Logic', 'Common Sense','Safety'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];
var d = new Date();

var n = d.getDay();
var m = d.getMinutes();
var h = d.getHours();
var hm = h * 60 + m;

function random() {
    document.getElementById("love").innerHTML = (concat);

    if (n == 2) {
        document.getElementById("tuesday").classList.add("current");

        if (hm>= 900 && hm<= 990) {
            document.getElementById("t1").classList.add("ctime");
        } else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("t2").classList.add("ctime");
        } else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }



    } else if (n == 3) {
        document.getElementById("wednesday").classList.add("current");
        if (hm>= 900 && hm<= 990) {
            document.getElementById("w1").classList.add("ctime");
        } else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("w2").classList.add("ctime");
        } else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }


    } else if (n == 4) {
        document.getElementById("thursday").classList.add("current");
        if (hm>= 900 && hm<= 990) {
            document.getElementById("th1").classList.add("ctime");
        }  else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("th2").classList.add("ctime");
        } else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }


    } else if (n == 5) {
        document.getElementById("friday").classList.add("current");

        if (hm>= 900 && hm<= 990) {
            document.getElementById("f1").classList.add("ctime");
        } else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("f2").classList.add("ctime");
        } else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }


    }
     else if (n == 6) {
        document.getElementById("wednesday").classList.add("current");
        if (hm>= 900 && hm<= 990) {
            document.getElementById("s1").classList.add("ctime");
        } else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("s2").classList.add("ctime");
        } else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }


    }
    
    else if (n == 0 ) {
        document.getElementById("sunday").innerHTML = ("Revise Karo!!");




    } else if (n == 1) {
        document.getElementById("monday").classList.add("current");

        if (hm>= 900 && hm<= 990) {
            document.getElementById("m1").classList.add("ctime");
        } else if (hm>= 1035 && hm<= 1125) {
            document.getElementById("m2").classList.add("ctime");
        }else {
            document.getElementById("sunday").innerHTML = ("It's break Time");
        }



    }


    if ((h >= 18) || (h <= 6)) {
        document.getElementById('pagestyle').setAttribute('href', "dark_style_online.css");
    } else {
        document.getElementById('pagestyle').setAttribute('href', "style_online.css");
    }
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('Clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}


function swapStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

function onrun() {
    random();
    startTime();
}
