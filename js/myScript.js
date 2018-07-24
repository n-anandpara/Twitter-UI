

var myObj, i, j, x = "";
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
for (i in myObj.News) {
    x += "<h4>" + myObj.News[i].postBy + "<small>" + "  " + myObj.News[i].postById + " . " + myObj.News[i].postTime + "</small></h4>" + "<p>" + myObj.News[i].post + "</p>";
    /*x += "<p>" + myObj.News[i].Post + "</p>"; */
    for (j in myObj.News[i].hashTag) {
        x += myObj.News[i].hashTag[j] + "&nbsp;";
    }
}



document.getElementById("demo").innerHTML = x;

/*$('#myModal').modal(options);*/