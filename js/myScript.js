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



/* Like Button Code*/
var likeFirst = false;
var likeSecond = false;
var likeThird = false;


var counter1 = document.getElementById("like1").innerHTML;
function myFunction(){
    if(likeFirst == false) {
        likeFirst = true;
        counter1++;
        document.getElementById("like1").innerHTML = " " + counter1;
    }

    else {
        likeFirst = false;
        counter1--;
        document.getElementById("like1").innerHTML = " " + counter1;
    }
}


var counter2 = document.getElementById("like2").innerHTML;
function myFunction1(){
    if(likeSecond == false) {
        likeSecond = true;
        counter2++;
        document.getElementById("like2").innerHTML = " " + counter2;
    }

    else {
        likeSecond = false;
        counter2--;
        document.getElementById("like2").innerHTML = " " + counter2;
    }
}



var counter3 = document.getElementById("like3").innerHTML;
function myFunction2(){
    if(likeThird == false) {
        likeThird = true;
        counter3++;
        document.getElementById("like3").innerHTML = " " + counter3;
    }

    else {
        likeThird = false;
        counter3--;
        document.getElementById("like3").innerHTML = " " + counter3;
    }
}






