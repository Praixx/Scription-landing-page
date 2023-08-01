// Smooth Scroll

    // To handle when the nav ul are clicked

$("#page header nav ul li a").click(function(){
    const clickedId = $(this).attr("href");
       

    $("html, body").stop().animate({
        scrollTop: $(clickedId).offset().top -103
    }, 400, "easeInCirc");
});


    //To handle the logo when it is clicked

$("#page header .logo-section a").click(function(){
       
    $("html, body").stop().animate({
     scrollTop: $("#page").offset().top
    }, 400, "easeInCirc");    

});




// Flexslider

$(window).on("load", function(){
    $(".flexslider").flexslider({
        animation: "slide",
        slideshowSpeed: 2000,
        pauseOnHover: true,
        before: function(){
            $(".cta").css("bottom", "-300px")
        },
      
        after:function(){
            $(".cta").animate({
                bottom: "0px"
            }, 600, "easeInCirc")
        }
    })
});



// Tabs

$("#tabs ul li a").click( function(){
    const clickedTab = $(this).attr("href");
   $("#tabs ul li a").css("background-color", "var(--tea-green)");
   $(this).css("background-color", "var(--tea-green-light)");

   $("#tabs > div:visible").fadeOut(200, function(){
    $(clickedTab).fadeIn(200);
   });




})



// Content Rotator

let counter = 1;

function contentRotator(){

    $(`#listen #cont-rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){
        if( $(this).is($("#listen #cont-rotator blockquote:last-child")) ){
            setTimeout(function(){
                $(`#listen #cont-rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                    counter = 1;
                    contentRotator()
                })
            }, 7000)
        }else{
            setTimeout(function(){
                $(`#listen #cont-rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                    counter++;
                    contentRotator()
                })
            }, 7000) 
        }
    })

};

contentRotator();


// Features Rotator 

let counterr = 1;
let topPx = 0;

const featureLength = $("#features ul:first-of-type li").length;
let featureClone = $("#features ul:first-of-type").clone();
$("#features").append(featureClone);

$("#features ul:first-of-type li:nth-child(1)").css({
    color: "#ff5964",
    fontWeight: "600"
});


function featureRotator(){
    setTimeout(function(){
        if(counterr <= featureLength){
            topPx -=30;
            $("#features").animate({
                top:`${topPx}px` 
            }, 500, function(){
                $("#features ul:first-of-type li:nth-child("+(counterr+1)+")").css({
                    color: "#ff5964",
                    fontWeight: "600"
                });
                counterr++;
                featureRotator();
            })
        }else{
            $("#features ul:first-of-type").remove();
            featureClone = $("#features ul:first-of-type").clone();
            $("#features").css("top", "0");
            $("#features").append(featureClone);
            counterr = 1, topPx = 0,
            $("#features ul:first-of-type li:nth-child("+(counterr+1)+")").css({
                color: "#ff5964",
                fontWeight: "600"
            });
            featureRotator();

        }


    }, 1500);
};

featureRotator();











// let t=1,
// e=0;
// const o=$("#features ul:first-of-type li").length;
// let n=$("#features ul:first-of-type").clone();
// $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"}),
// $("#features").append(n)
// (function i(){
//     setTimeout(function(){
//         t<=o?(e-=30,$("#features").animate({
//             top:e+"px"
//         },500,function(){
//             $("#features ul:first-of-type li:nth-child("+(t+1)+")").css({color:"#FF5964",fontWeight:"600"}),
//             t++,
//             i()
//         })):
//         ($("#features ul:first-of-type").remove(),
//         n=$("#features ul:first-of-type").clone(),
//         $("#features").css("top","0"),
//         $("#features").append(n),
//         e=0,t=1,
//         $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"}),
//         i()
//         )
//     },1500)
// }())




