var myArray = ['Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css', 'Logic', 'Common Sense'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];
var d = new Date();

var n = d.getDay();

var g = new Date();

var h = g.getHours();

function random() {
    document.getElementById("love").innerHTML = (concat);

    if (n == 2) {
        document.getElementById("tuesday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1tuesday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2tuesday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3tuesday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4tuesday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5tuesday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6tuesday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7tuesday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8tuesday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9tuesday").classList.add("ctime");
        }



    } else if (n == 3) {
        document.getElementById("wednesday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1wednesday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2wednesday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3wednesday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4wednesday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5wednesday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6wednesday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7wednesday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8wednesday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9wednesday").classList.add("ctime");
        }

    } else if (n == 4) {
        document.getElementById("thursday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1thursday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2thursday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3thursday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4thursday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5thursday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6thursday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7thursday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8thursday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9thursday").classList.add("ctime");
        }

    } else if (n == 5) {
        document.getElementById("friday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1friday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2friday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3friday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4friday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5friday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6friday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7friday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8friday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9friday").classList.add("ctime");
        }

    } else if (n == 6) {
        document.getElementById("saturday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1saturday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2saturday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3saturday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4saturday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5saturday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6saturday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7saturday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8saturday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9saturday").classList.add("ctime");
        }

    } else if (n == 0) {
        document.getElementById("sunday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1sunday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2sunday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3sunday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4sunday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5sunday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6sunday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7sunday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8sunday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9sunday").classList.add("ctime");
        }

    } else if (n == 1) {
        document.getElementById("monday").classList.add("current");

        if (h >= 5 && h <= 6) {
            document.getElementById("1monday").classList.add("ctime");
        } else if (h >= 6 && h <= 8) {
            document.getElementById("2monday").classList.add("ctime");
        } else if (h >= 8 && h <= 9) {
            document.getElementById("3monday").classList.add("ctime");
        } else if (h >= 9 && h <= 10) {
            document.getElementById("4monday").classList.add("ctime");
        } else if (h >= 10 && h <= 13) {
            document.getElementById("5monday").classList.add("ctime");
        } else if (h >= 13 && h <= 15) {
            document.getElementById("6monday").classList.add("ctime");
        } else if (h >= 15 && h <= 16) {
            document.getElementById("7monday").classList.add("ctime");
        } else if (h >= 16 && h <= 19) {
            document.getElementById("8monday").classList.add("ctime");
        } else if (h >= 19 && h <= 21) {
            document.getElementById("9monday").classList.add("ctime");
        }

    }

    if ((h >= 18) || (h <= 6)) {
        document.getElementById('pagestyle').setAttribute('href', "darkLock.css");
    } else {
        document.getElementById('pagestyle').setAttribute('href', "styleLock.css");
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


Mousetrap.bind('s', function(e) {
    swapStyleSheet('dark.css');
});
