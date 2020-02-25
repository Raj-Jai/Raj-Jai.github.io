var myArray = ['Joy', 'Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];
var d = new Date();

var n = d.getDay();

var g = new Date();

var h = g.getHours();

function random() {
    document.getElementById("love").innerHTML = (concat);

    if ((n == 1 && h > 9) || (n == 2 && h <= 9)) {
        document.getElementById("tuesday").classList.add("current");
    } else if ((n == 2 && h > 9) || (n == 3 && h <= 9)) {
        document.getElementById("wednesday").classList.add("current");
    } else if ((n == 3 && h > 9) || (n == 4 && h <= 9)) {
        document.getElementById("thursday").classList.add("current");
    } else if ((n == 4 && h > 9) || (n == 5 && h <= 9)) {
        document.getElementById("friday").classList.add("current");
    } else if ((n == 5 && h > 9) || (n == 6 && h <= 9)) {
        document.getElementById("saturday").classList.add("current");
    } else if ((n == 6 && h > 9) || (n == 6 && h <= 23)) {
        document.getElementById("sunday").innerHTML = "Enjoy! tommorow is Sunday.";
    } else if ((n == 0 && h > 9) || (n == 1 && h <= 9)) {
        document.getElementById("monday").classList.add("current");
    } else if ((n == 0 && h >= 0) || (n == 0 && h <= 8)) {
        document.getElementById("sunday").innerHTML = "Enjoy! today is Sunday.";
    }
    
     if ((h >= 18) || (h <= 6)) {
        document.getElementById('pagestyle').setAttribute('href', "dark.css");
    } else {
        document.getElementById('pagestyle').setAttribute('href', "style.css");
    }
}

function swapStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}
