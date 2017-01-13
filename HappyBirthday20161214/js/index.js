


/*
$(document).ready(function(){
    var poem="关关雎鸠，在河之洲。#窈窕淑女，君子好求。#参差荇菜，左右流之；#窈窕淑女，寤寐求之。#求之不得，寤寐思服；#悠哉悠哉，辗转反侧。#参差荇菜，左右采之；#窈窕淑女，琴瑟友之。#参差荇菜，左右冒之；#窈窕淑女，钟鼓乐之。";
    var count=0;
    
    var int=self.setInterval(function(){
        console.log(poem.length+" "+count+poem.length<count)
        if(poem.length>count){
            if(poem[count]=="#"){
                $("#poem").append("<\/br>");
            }else{
                $("#poem").append(poem[count]);
            }
        }else{
            clearInterval(int)
        }
        count+=1;
    },100);
});*/

$(".mybutton").click(function(){
    $(".mybutton").hide();
    var poem="熠玮兄永远爱你#";
    var count=0;
    
    var int=self.setInterval(function(){
        console.log(poem.length+" "+count+poem.length<count)
        if(poem.length>count){
            if(poem[count]=="#"){
                $("#poem").append("😘");
            }else{
                $("#poem").append(poem[count]);
            }
        }else{
            clearInterval(int)
        }
        count+=1;
    },100);
});