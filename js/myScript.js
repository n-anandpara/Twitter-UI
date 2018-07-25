
var logoImg = new Array(10);
logoImg[0] = new Image();
logoImg[0].src = "../img/toi.jpg";

logoImg[1] = new Image();
logoImg[1].src = "../img/aol.jpg";

logoImg[2] = new Image();
logoImg[2].src = "../img/znews.jpg";



var myObj, i, j;
myObj = {
    "name":"posts",
    "News": [
        {	
        	"postBy":"Times Of India",
        	"postById": "@TimesofIndia",
        	"postTime": "40 min", 
        	"post": "21-year-old woman accuses cops of gang rape in Bhopal" ,
        	"hashTag": ["#News"]
        },
        
        {
        	"postBy":"Art Of Living", 
        	"postById": "@ArtOfLiving",
        	"postTime": "Jul 22",
        	"post": "When your mind is not complaining & is responsible, courageous, confident & hollow & empty, you become inexplicably beautiful." ,
        	"hashTag": ["#mondaymotivation", "#starttheweekright"]
        },

        {
        	"postBy":"ABP News", 
        	"postById": "@ABPNews",
        	"postTime": "1 Hr",
        	"post": "IN PICS: PM Modi Donates 200 Cows To Rwanda." ,
        	"hashTag": ["#Cows", "#Rwanda"]
        }
    ]
}

/*
for (i in myObj.News) {
    x +=  "<h4>" + myObj.News[i].postBy + "<small>" + "  " + myObj.News[i].postById + " . " + myObj.News[i].postTime + "</small></h4>" + "<p>" + myObj.News[i].post + "</p>";
    x += "<p>" + myObj.News[i].Post + "</p>";
    for (j in myObj.News[i].hashTag) {
        x += myObj.News[i].hashTag[j] + "&nbsp;";
    }
    x += "<hr>";
}
*/

var x =  "<h4>" + myObj.News[0].postBy + "<small>" + "  " + myObj.News[0].postById + " . " + myObj.News[0].postTime + "</small></h4>" + "<p>" + myObj.News[0].post + "</p>";
document.getElementById("demo1").innerHTML =  x;
document.getElementById("commentPopup1").innerHTML =  x;
document.getElementById("reTweet1").innerHTML =  x;
/*$('#myModal').modal(options);*/


var y =  "<h4>" + myObj.News[1].postBy + "<small>" + "  " + myObj.News[1].postById + " . " + myObj.News[1].postTime + "</small></h4>" + "<p>" + myObj.News[1].post + "</p>";
document.getElementById("demo2").innerHTML =  y;
document.getElementById("commentPopup2").innerHTML =  y;
document.getElementById("reTweet2").innerHTML =  y;

var z =  "<h4>" + myObj.News[2].postBy + "<small>" + "  " + myObj.News[2].postById + " . " + myObj.News[2].postTime + "</small></h4>" + "<p>" + myObj.News[2].post + "</p>";
document.getElementById("demo3").innerHTML =  z;
document.getElementById("commentPopup3").innerHTML =  z;
document.getElementById("reTweet3").innerHTML =  z;