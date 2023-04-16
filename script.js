$(".hide").hide();
$(".game-content").hide();
$("#start-button").click(function(){
    $('.start').hide();
    console.log("click");
    if($('input[name="icon"]:checked').val() == 'cat'){
        $('.game-image').attr('src','./user_image/cat.png');
    }
    else if($('input[name="icon"]:checked').val() == 'rabbit'){
        $('.game-image').attr('src','./user_image/rabbit.png');   
    }
    else if($('input[name="icon"]:checked').val() == 'bear'){
        $('.game-image').attr('src','./user_image/bear.png');
    }
    $(".game-content").show();
    $(".1").show();
});

$(".1").click(function(){
    $(".1").hide();
    $(".2").show();
});

// first half done
$("#greet").click(function(){
    $(".hide").hide();
    $(".21").show();
});

$(".21").click(function(){
    $(".hide").hide();
    $(".211").show();
});

// together route done
$("#together").click(function(){
    $(".hide").hide();
    $(".2111").show();
});

// run route done
$("#run").click(function(){
    $(".hide").hide();
    $(".21111").show();
});

// sleep route ending
$("#sleep").click(function(){
    $(".hide").hide();
    $(".211111").show();
});

$(".211111").click(function(){
    $(".hide").hide();
    $(".2111113").show();
});

$(".2111113").click(function(){
    $(".hide").hide();
    $(".21111133").show();
    $(".advice-button").show();
});


// awake route
$("#awake").click(function(){
    $(".hide").hide();
    $(".211112").show();
    $("#mental").css("width",'80%');
});

// awake route done

// eat alone route
$("#eatalone").click(function(){
    $(".hide").hide();
    $(".21111211").show();
});

$(".21111211").click(function(){
    $(".hide").hide();
    $(".211112113").show();
});

$(".211112113").click(function(){
    $(".hide").hide();
    $(".2111121133").show();
    $(".advice-button").show();
});


$("#studytogether").click(function(){
    $(".hide").hide();
    $(".2111121").show();
    $("#mental").css("width",'100%');
    $("#health").css("width",'100%');
});
// wander alone ending
$("#wander").click(function(){
    $(".hide").hide();
    $(".21111212").show();
});

$("#ouch1").click(function(){
    $(".hide").hide();
    $(".211112123").show();
});

$("#ouch2").click(function(){
    $(".hide").hide();
    $(".211112123").show();
});

$(".211112123").click(function(){
    $(".hide").hide();
    $(".211112123").show();
    $(".advice-button").show();
});
// play alone ending
$("#playalone").click(function(){
    $(".hide").hide();
    $(".2111122").show();
    $("#mental").css("width",'60%');
});

$(".2111122").click(function(){
    $(".hide").hide();
    $(".21111223").show();
});

$(".21111223").click(function(){
    $(".hide").hide();
    $(".211112233").show();
    $(".advice-button").show();
});

// late ending here
$("#late").click(function(){
    $(".hide").hide();
    $(".21112").show();
});

$(".21112").click(function(){
    $(".hide").hide();
    $(".211123").show();
});
$("211123").click(function(){
    $(".hide").hide();
    $(".2111233").show();
    $(".advice-button").show();
});
// alone route below done, no other options
$("#alone").click(function(){
    $(".hide").hide();
    $(".2112").show();
    $("#mental").css('width','40%');
    $("#health").css('width','60%');
});

$(".2112").click(function(){
    $(".hide").hide();
    $(".21123").show();
    $("#mental").css('width','60%');
    $("#health").css('width','80%');
});

$(".21123").click(function(){
    $(".hide").hide();
    $(".211233").show();
    $(".advice-button").show();
});
// second half in index.html
$("#nogreet").click(function(){
    $(".hide").hide();
    $(".22").show();
});

// interupt route
$("#interupt").click(function(){
    $(".hide").hide();
    $(".221").show();
});

$("#endure2").click(function(){
    $(".hide").hide();
    $(".2213").show();
});

$("#talk3").click(function(){
    $(".hide").hide();
    $(".2213").show();
});

$(".2213").click(function(){
    $(".hide").hide();
    $(".22133").show();
});

$(".22133").click(function(){
    $(".hide").hide();
    $(".221333").show();
});

$("#home3").click(function(){
    $(".hide").hide();
    $(".2213332").show();
    $(".advice-button").show();
});

$("#gathering").click(function(){
    $(".hide").hide();
    $(".2213331").show();
});

$("#talk4").click(function(){
    $(".hide").hide();
    $(".22133311").show();
});

$(".22133311").click(function(){
    $(".hide").hide();
    $(".221333113").show();
});

$("#home4").click(function(){
    $(".hide").hide();
    $(".22133312").show();
});

$(".22133312").click(function(){
    $(".hide").hide();
    $(".221333123").show();
    $(".advice-button").show();
});
// ignore route done
$("#ignore2").click(function(){
    $(".hide").hide();
    $(".222").show();
});
$(".222").click(function(){
    $(".hide").hide();
    $(".2223").show();
});
$(".2223").click(function(){
    $(".hide").hide();
    $(".22233").show();
});

$(".22233").click(function(){
    $(".hide").hide();
    $(".222333").show();
    $(".advice-button").show();
});



// for after endings

$(".advice-button").click(function(){
    $(".hide").hide();
    $(".game-content").hide();
    $(".advice-column").show();
    $(".restart").show();
});

$(".restart").click(function(){
    $("#mental").css('width','100%');
    $("#health").css('width','100%');
    $(".hide").hide();
    $(".game-content").hide();
    $(".start").hide();
});