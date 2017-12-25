// Comming Soon Timer

$( document ).ready(function() {
	
    function timer(){
        var FullDate = new Date()
        var FinalDate = new Date("2018-02-01 00:00:00")
        var DifDate = new Date(FinalDate - FullDate)
        
        var NowDay = Math.round( DifDate/1000/60/60/24 );
        var NowMinute = DifDate.getMinutes()
        var NowHour = DifDate.getHours()
        var NowSecond = DifDate.getSeconds()
        $("#CommingSoon .container-fluid .row .col-md-12 .content .timer .days strong").text(function day() {
        if(NowDay.toString().length == 1){
            NowDay = '0' + NowDay
        }
        return NowDay
    })
    $("#CommingSoon .container-fluid .row .col-md-12 .content .timer .hour strong").text(function hour() {
        if(NowHour.toString().length == 1){
            NowHour = '0' + NowHour
        }
        return NowHour
    })
    $("#CommingSoon .container-fluid .row .col-md-12 .content .timer .minute strong").text(function minute() {
        if(NowMinute.toString().length == 1){
            NowMinute = '0' + NowMinute
        }
        return NowMinute
    })
    $("#CommingSoon .container-fluid .row .col-md-12 .content .timer .second strong").text(function second() {
        if(NowSecond.toString().length == 1){
            NowSecond = '0' + NowSecond
        }
        return NowSecond
    })
    }
    
    var SS =  setInterval(function(){ timer() }, 1000)

	

});


// Comming Soon Timer END

//Flags Drop

$(document).ready(function(){
    var count = 1
    $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flags").hide()
    $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .Triangle").hide()
    $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flaglink a").click(function(){
       if(count==1){
             $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flags").show(100).animate({
            top: "36px",
        })
     $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .Triangle").show(100)              
        // $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flaglink a i").animate({
        //     transform: 'rotate(' + 90 + 'deg)',
        //      transform: 'translateX(50px)'
        // })   
             count++
       }else{
            $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flags").hide(50)
            $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .Triangle").hide(50)
            $("#header .headerTop .container .row .search .container-fluid .row .col-md-4 .FlagDrop .flags").css("top", "40px")

            count--
       }
    });
});
//Flags Drop END

//DropDownClick
var TextOfParent
$("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item .nav-link i").click(function(event) {
    if($(this).parent().width()>200){
        var HeightofDrop = $(this).parent().next().height()
        var WidthofParent = $(this).parent().width()
        console.log(TextOfParent)
        if(TextOfParent == null){
          
             TextOfParent = $(this).parent().text()

              $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item").css({"margin-top": "0px"})
                 $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item .dropDrownItems")
                 .css({"visibility": "hidden" ,
                    "opacity": "0" ,
                    "z-index": "-1" ,
                    "transform": "translateY(-2em)"})
                $(this).parent().parent().next().css({"margin-top": HeightofDrop+"px"})
                $(this).parent().next().css({"visibility": "visible" ,
                 "opacity": "1",
                  "z-index": "1",
                   "transform": "translateY(0px)",
                   "transition-delay": "0s, 0s, 0.3s"})
                $(this).parent().next().children().width(WidthofParent-80)
        }else{
           
            if(TextOfParent == $(this).parent().text()){
                console.log("2")
                TextOfParent = null
                 $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item").css({"margin-top": "0px"})
                 $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item .dropDrownItems")
                 .css({"visibility": "hidden" ,
                    "opacity": "0" ,
                    "z-index": "-1" ,
                    "transform": "translateY(-2em)"})
            }else{
                console.log($(this).parent().text())
                TextOfParent = $(this).parent().text()
                 $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item").css({"margin-top": "0px"})
                 $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item .dropDrownItems")
                 .css({"visibility": "hidden" ,
                    "opacity": "0" ,
                    "z-index": "-1" ,
                    "transform": "translateY(-2em)"})
                $(this).parent().parent().next().css({"margin-top": HeightofDrop+"px"})
                $(this).parent().next().css({"visibility": "visible" ,
                 "opacity": "1",
                  "z-index": "1",
                   "transform": "translateY(0px)",
                   "transition-delay": "0s, 0s, 0.3s"})
                $(this).parent().next().children().width(WidthofParent-80)
            }
        }
       
    }
})
//DropDownClick END
// Close DropDown When Rezing
 var LastSize
$(window).resize(function(){
       TextOfParent = null
       $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item").css({"margin-top": "0px"})
       $("header .NavBar .container .row .col-lg-12 .collapse .navbar-nav .nav-item .dropDrownItems")
       .css({"visibility": "hidden" ,
            "opacity": "0" ,
            "z-index": "-1" ,
            "transform": "translateY(-2em)"})     
   
       
})
// Close DropDown When Rezing
$("#inlineFormInputGroup").click(function(){
    $(".input-group-addon").addClass("color-org");

});




$(".icon1").click(function(){
$(".lightBox").css({"transform": "scale(3,3)", "transform": "rotateY(20deg)"});





$(this).css("display","none")

});



