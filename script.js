$(document ).ready(function (){
var id= prompt("enter your favorite youtuber channel id", "UCq-Fj5jknLsUf-MWSy4_brA")
$("button").click(function (){
setInterval(function() {
$.getJSON("https://cors-munnyreol.herokuapp.com/https://freewebtools.com/compteur-youtube/?channelId="+id, function (subss) {

        sub = subss.subscriberCount;
        view=subss.viewCount;
        title=subss.title;
        pic=subss.picture;
        
        $("#view").text(view)
        $(".title").text(title);
        $("#subs").text(sub);
        
        console.log("sub="+sub+"\n","view="+view)
        
         var image = document.querySelector('#user_pic'); image.src = pic;
         
        })
        }, 1000); 
    });
});
