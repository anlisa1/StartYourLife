
$("start-button").click(function(){
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
});