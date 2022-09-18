$(function(){
// HOME AREA================================================================================
// 스크롤 이벤트===================================
$(window).on("scroll",function(e){
    let scroll_val = $(window).scrollTop()
    console.log(scroll_val); // 스크롤이 얼마나 내려가는지 확인
    // 메인캐릭터
    $("#im_bombi").css({"margin-top": $(this).scrollTop()-150, "opacity":"1","z-index":"7000"});
    if($(this).scrollTop()>730){
        $("#im_bombi").css({"margin-top": $(this).scrollTop(), "opacity":"0", "z-index":"0"});
    } else if($(this).scrollTop()<830 && $(this).scrollTop()>350){
        //왼쪽으로 옮기기
        $("#im_bombi").css({"margin-left": -$(this).scrollTop()+400});
    } else if($(this).scrollTop()<350){
        $("#im_bombi").css({"margin-left": 0});
    }
    // 커튼
    // $(".curtain01").css({"margin-top": -$(this).scrollTop()});
    $(".curtain02").css({"margin-left": -$(this).scrollTop()});
    $(".curtain03").css({"margin-right": -$(this).scrollTop()});
    $(".main_index_area").css({"margin-right": -$(this).scrollTop()});
    // $(".coral_pink").css({"margin-left": $(this).scrollTop()});
    // $(".coral_purple").css({"margin-left": $(this).scrollTop()});
    //메인인포 위에서 아래로 효과(코드로 세상과 소통하는~~ + 이미지)
    // if($(this).scrollTop()<1000 && $(this).scrollTop()>600){
    if($(this).scrollTop()>550){
        // $(".main_information_menu_bar").css({"margin-top": "0","opacity":"1","transition":"0.5s"});
        // $(".main_information_string").css({"margin-top": "200px","opacity":"1","transition":"0.5s"});
        $(".main_information_img").css({"margin-top": "0", "opacity":"1","transition":"0.5s"});
    }else if($(this).scrollTop()<900){
        // $(".main_information_menu_bar").css({"margin-top": "0","opacity":"0","transition":"0.5s"});
        // $(".main_information_string").css({"opacity":"0"});
        $(".main_information_img").css({"opacity":"0"});
    }
    //백그라운드컬러 바뀌게 하는 효과
    if($(this).scrollTop()>660 && $(this).scrollTop()<1200){
        $(".bg_level").css({"background-color":"#f5f5f5", "transition":"0.5s"})
    }else if($(this).scrollTop()>=1700){
        $(".main_area").css({"background-color":"#f5f5f5", "transition":"0.5s"})
        $(".bg_level").css({"background-color":"#f5f5f5", "transition":"0.3s"})
    } else{
        $(".main_area").css({"background-color":"#333", "transition":"0.5s"})
        $(".bg_level").css({"background-color":"#333", "transition":"0.5s"})
    }

})
// 키보드로 제어 이벤트===================================================================
// $(document).on("keyup",function(e){
//     // console.log(e.key); //무슨 키를 눌렀는지 확인
//     switch(e.key){
//         //i를 눌렀을 때 information 구간으로 이동
//         case "i" :
//         case "I" :
//             $("#im_seoa").css({"margin-top":"2000px"});
//             $(window).scrollTop(2000);
//             break;
//         //p를 눌렀을 때 portfolio 구간으로 이동
//         case "p" :
//         case "P" :
//             $("#im_seoa").css({"margin-top":"2500px"});
//             $(window).scrollTop(2500);
//             break;
//         //스페이스바를 눌렀을 때 메인구간으로 이동
//         case " ":
//             $(".info_area").css();
//     }
//     })

//MAIN_INDEX_STRING=============================================================================================
//시간지연함수=======
setTimeout(() => {
    // $(window).on("load",function(){
        $('.main_index_area').css({"left":"89%"})
    // })
}, 500);
//CLICK하면 이동=====================================================================================
$('.header_string').on("click",(e)=>{
    $(window).scrollTop(551);
    console(scrollTop);
})
// $('.main_info_menu').on("click", (e)=>{
//     switch(e.target.innerHTML){
//         case "HOME":
//             $(window).scrollTop(0);
//         break;
//         case "ABOUT ME":
//             $(window).scrollTop(2125);
//         break;
//         case "SKILLS":
//             $(window).scrollTop(2500);
//         break;
//         case "PORTFOLIO":
//             $(window).scrollTop(3422);
//         break;
//     }
// })
$(document).on("click",(e)=>{
    switch(e.target.id){
        case "home_arrow":
        $(window).scrollTop(551);
        break;
        case "move_up_btn":
        $(window).scrollTop(0);
        break;
        case "move_down_btn":
        $(window).scrollTop(2125);
        case "info_move_up_btn":
        $(window).scrollTop(1030);
        break;
        case "info_move_down_btn":
        $(window).scrollTop(3422);
        break;
        case "portfolio_arrow":
        $(window).scrollTop(0);
    }
})
//호버 이벤트 ====================================================
// 캐릭터 호버
// $("#im_seoa_char").on("mouseenter", function(){
//     $(".im_seoa_info").css({"opacity":"1"});
// })
// $("#im_seoa_char").on("mouseleave", function(){
//     $(".im_seoa_info").css({"opacity":"0"});
// })
//Contect================================================================================
// $(".click_btn_for_contect, .click_name_for_contect").on("mouseover",()=>{
//     $(".main_contect_box").css("display","block");
// }).on("mouseout",()=>{
//     $(".main_contect_box").css("display","none");
// })

//ABOUT AREA =========================================================================================================
// information에서 각 버튼 눌렀을 때 상세 팝업 나오는 이벤트
// 팝업창 눌렀을 때 사라지게 하는 이벤트
$(document).on("click",(e)=>{
    // console.log(e.target.id);
    switch(e.target.id){
        //각 버튼을 눌렀을 때 박스가 보이게 하는 이벤트
        case "possibility_btn":
        case "xi-emoticon-smiley":
            $("#possibility_info_box").css({"display":"block"});
            $("#aboutme_info_box").css({"display":"none"});
            $("#skills_info_box").css({"display":"none"});
            break;
        case "aboutme_btn":
        case "xi-emoticon-happy":
            $("#aboutme_info_box").css("display","block");
            $("#possibility_info_box").css({"display":"none"});
            $("#skills_info_box").css({"display":"none"});
            break;
        case "skills_btn":
        case "xi-emoticon-cool":
            $("#skills_info_box").css({"display":"block"});
            $("#possibility_info_box").css({"display":"none"});
            $("#aboutme_info_box").css({"display":"none"});
            break;
    }

// 팝업창 눌렀을 때 사라지게 하는 이벤트
    let pe_0 = e.target.id;
    let pe_1 = e.target.parentElement.id;
    let pe_2 = e.target.parentElement.parentElement.id;
    let pe_3 = e.target.parentElement.parentElement.parentElement.id;
    let pe_4 = e.target.parentElement.parentElement.parentElement.parentElement.id;
    let pe_5 = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    // console.log(
    //     pe_0+"::::::"+
    //     pe_1+"::::::"+
    //     pe_2+"::::::"+
    //     pe_3+"::::::"+
    //     pe_4+"::::::"+
    //     pe_5+"::::::"
    // )
    switch("possibility_info_box"){
        case pe_0:
        case pe_1:
        case pe_2:
        case pe_3:
        case pe_4:
        // case pe_5:
            $("#possibility_info_box").css({"display":"none"});
            break;
    }
    switch("aboutme_info_box"){
        case pe_0:
        case pe_1:
        case pe_2:
        case pe_3:
        case pe_4:
        // case pe_5:
            $("#aboutme_info_box").css({"display":"none"});
            break;
    }
    switch("skills_info_box"){
        case pe_0:
        case pe_1:
        case pe_2:
        case pe_3:
        case pe_4:
        // case pe_5:
            $("#skills_info_box").css({"display":"none"});
            break;
    }
})
// POTPOLIO AREA========================================================================================================================
$('button').on("click",(e)=>{
        //클릭 했을 때 해당 페이지로 넘어감===================================
        switch(e.target.id){
            case 'kirby_story_go_site':
                window.open('../kirby_story');
                break;
            case 'cafe_kiosk_go_site':
                window.open('../Kiosk/');
                break;
            case 'detail_page_go_site':
                window.open('../Detail_page/');
                break;
            case 'tulip_festival_go_site':
                window.open('../Tulip_festival/');
                break;
            case 'happy_doll_pos_go_site':
                window.open('../Doll_pos/');
                break;
            case 'matrix_calculator_go_site':
                window.open('../Matrix_calculator/');
                break;
            case 'phantom_of_the_opera_go_site':
                window.open('../PHANTOM_OF_THE_OPERA');
                break;
    //클릭 했을 때 pdf 열림=========================================================
            case 'kirby_story_pdf':
                window.open('../kirby_story/ppt/KIRBY_PPT.pdf');
                break;
            case 'cafe_kiosk_pdf':
                window.open('../Kiosk/kiosk_starbucks.pdf');
                break;
            case 'detail_page_pdf':
                window.open('../Detail_page/CAMERA/');
                break;
            case 'tulip_festival_pdf':
                window.open('../Tulip_festival/Tulip_festival.pdf');
                break;
            case 'happy_doll_pos_pdf':
                window.open('../Doll_pos/DOLL_PPT.pdf');
                break;
            case 'matrix_calculator_pdf':
                window.open('../Matrix_calculator/matrix_calculator.pdf');
                break;
            case 'phantom_of_the_opera_pdf':
                window.open('../PHANTOM_OF_THE_OPERA/ppt/PHANTOM.pdf');
                break;
            }
            
    })
//      //포트폴리오 이름에 호버했을 때 폰트색상바뀌고 이미지 보여지게
//     $(".portfolio_subject").on("mouseover", (e)=>{
//         switch(e.target.innerHTML){
//             case "Let's KIRBY":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"110px","opacity":"1"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                 $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                 $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                 $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                 $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//                 case "CAFE KIOSK":
//                     $(e.target).css({"color":"#000dc1"});
//                     $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                     $("#cafe_kiosk_box").css({"height":"110px","opacity":"1"});
//                     $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                     $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                     $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                     $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                     $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//             case "DETAIL PAGE":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"110px","opacity":"1"});
//                 $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                 $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                 $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                 $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//             case "TULIP FESTIVAL":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                 $("#tulip_festival_box").css({"height":"100px","opacity":"1"});
//                 $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                 $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                 $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//             case "HAPPY DOLL POS":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                 $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                 $("#happy_doll_pos_box").css({"height":"110px","opacity":"1"});
//                 $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                 $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//             case "MATRIX CALCULATOR":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                 $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                 $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                 $("#matrix_calculator_box").css({"height":"110px","opacity":"1"});
//                 $("#phantom_of_the_opera_box").css({"height":"0px","opacity":"0"});
//                 break;
//             case "PHANTOM OF THE OPERA":
//                 $(e.target).css({"color":"#000dc1"});
//                 $("#kirby_story_box").css({"height":"0px","opacity":"0"});
//                 $("#cafe_kiosk_box").css({"height":"0px","opacity":"0"});
//                 $("#detail_page_box").css({"height":"0px","opacity":"0"});
//                 $("#tulip_festival_box").css({"height":"0px","opacity":"0"});
//                 $("#happy_doll_pos_box").css({"height":"0px","opacity":"0"});
//                 $("#matrix_calculator_box").css({"height":"0px","opacity":"0"});
//                 $("#phantom_of_the_opera_box").css({"height":"110px","opacity":"1"});
//                 break;
//             default:
//                 $(".portfolio_contents_box").css({"height":"0px","opacity":"0"});
//                 break;
//             }
//         })
//         //포트폴리오 설명 & 버튼영역에 마우스 올렸을 때
//         $(".portfolio_contents_box").on("mouseover", (e)=>{
//             console.log(e.target.className);
//             switch(e.target.className){
//                 case  "kirby_story":
//                     $("#kirby_story_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "cafe_kiosk":
//                     $("#cafe_kiosk_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "detail_page":
//                     $("#detail_page_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "tulip_festival":
//                     $("#tulip_festival_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "happy_doll_pos":
//                     $("#happy_doll_pos_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "matrix_calculator":
//                     $("#matrix_calculator_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 case  "phantom_of_the_opera":
//                     $("#phantom_of_the_opera_box").css({"height":"110px","opacity":"1"});
//                 break;
//                 default:
//                 $(".portfolio_contents_box").css({"height":"0px","opacity":"0"});
//                 break;
//             }
//         }) 

//         $(".portfolio_subject").on("mouseleave",(e)=>{
//             switch(e.target.innerHTML){
//                 case "Let's KIRBY":
//                 $(e.target).css({"color":"#000330"});
//                 $("#kirby_story_box").css({"height":"0","opacity":"0"});
//                 break;
//                 case "CAFE KIOSK":
//                     $(e.target).css({"color":"#000330"});
//                     $("#cafe_kiosk_box").css({"height":"0","opacity":"0"});
//                 break;
//             case "DETAIL PAGE":
//                 $(e.target).css({"color":"#000330"});
//                 $("#detail_page_box").css({"height":"0","opacity":"0"});
//                 break;
//             case "TULIP FESTIVAL":
//                 $(e.target).css({"color":"#000330"});
//                 $("#tulip_festival_box").css({"height":"0","opacity":"0"});
//                 break;
//             case "HAPPY DOLL POS":
//                 $(e.target).css({"color":"#000330"});
//                 $("#happy_doll_pos_box").css({"height":"0","opacity":"0"});
//                 break;
//             case "MATRIX CALCULATOR":
//                 $(e.target).css({"color":"#000330"});
//                 $("#matrix_calculator_box").css({"height":"0","opacity":"0"});
//                 break;
//             case "PHANTOM OF THE OPERA":
//                 $(e.target).css({"color":"#000330"});
//                 $("#phantom_of_the_opera_box").css({"height":"0","opacity":"0"});
//                 break;
//             default:
//                 $(".portfolio_contents_box").css({"height":"0px","opacity":"0"});
//                 break;
//             }
//         })
//         $(".portfolio_subject").on("mouseleave",()=>{
//             $(".portfolio_img").css("opacity","0");
//         })
//         //click to go 돌아가게
//         let deg_counter = 0;
//         setInterval(() => {
//             deg_counter++;
//             $(".click_to_go_circle").css({"transform":"rotate("+deg_counter +"deg)"})
//         }, 80);
})