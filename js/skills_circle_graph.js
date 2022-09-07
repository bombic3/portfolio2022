$(function(){
    let skills_info ={
        "HTML" : 95,
        "JAVASCRIPT" : 90,
        "CSS" : 95,
        "JQUERY" : 90,
        "AJAX" : 80,
        "NODEJS" : 75,
        "PUG": 70,
        "REACT":80,
        "PHP" : 65,
        "MYSQL" : 65,
        "AI" : 100,
        "PS" : 100,
        "POWERPOINT" : 100,
        "WORD" : 90
    }
    let event_temp = "";
    $(".skills_content_icon").on("click",(e)=>{
        if(!event_temp == ""){ clearInterval(event_temp);}
        $.each( skills_info, function( i_i, i_v ){
            switch(e.target.id){
                case i_i +"_logo":
                    deg_temp = i_v*3.6;
                    $(".skills_circle_inner_cover").html( i_i + " "+ i_v + "%" );
                    let temp_value = 0;
                        clearInterval(event_temp);
                        event_temp = setInterval( add_count = ()=>{
                        if( temp_value < deg_temp ){
                            temp_value++;
                            $(".skills_circle_box").css({"background":"conic-gradient( #fd8400 " + temp_value + "deg,  #f5f5f5 " + temp_value + "deg)"});
                        }
                    } , 1);
                break;
            }
        })
    })
})