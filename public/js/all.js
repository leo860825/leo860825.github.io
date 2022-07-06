new WOW().init();

//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
let windowWidth = $(window).width()

// 進網頁直接執行一次 判斷
if ( windowWidth >= 768 ){
    // 大於等於768執行
    // $('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function(){
        // 滑鼠滑入執行
        $(this).find('.submenu').addClass('active')
    }, function(){
        // 滑鼠滑出執行
        $(this).find('.submenu').removeClass('active')

    })
}else{
    // 小於768執行
    $('#btn-nav-switch').on('click', function(){
        $('nav').toggleClass('active')
    })// btn-nav-switch end
    
    $('nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('active')
    })// nav>ul>li end
}// windowWidth>=768 end

// 每一次縮放視窗的時候執行
$(window).resize(function(){
    gsapAnimate()
    console.log( $(window).width() )
    // widthWidth 在每次縮放視窗寬度時，換上當前的視窗寬度的數值
    windowWidth = $(window).width()
    if ( windowWidth >= 768 ){
        // 大於等於768執行
        // $('nav>ul>li').hover(function(){}, function(){})
        $('nav>ul>li').hover(function(){
            // 滑鼠滑入執行
            $(this).find('.submenu').addClass('active')
        }, function(){
            // 滑鼠滑出執行
            $(this).find('.submenu').removeClass('active')
    
        })
    }else{
        // 小於768執行
        $('#btn-nav-switch').on('click', function(){
            $('nav').toggleClass('active')
        })// btn-nav-switch end
        
        $('nav>ul>li').on('click',function(){
            $(this).find('.submenu').toggleClass('active')
        })// nav>ul>li end
    }// windowWidth>=768 end
})// window resize end



// 捲軸事件

// 定義捲軸高變數
let offsetTop
let product1Top = $('.product-section-1').offset().top 
$(window).scroll(function(){
    offsetTop = $(window).scrollTop()
    //console.log( '捲軸高', offsetTop )
    // console.log('product1',product1Top)
//    if( offsetTop >=  product1Top){
//         console.log('test')
//    }


    // 捲軸高度>=900，會出現page-top的按鈕
    if( offsetTop >= 900){
        $('.page-top').addClass('active')
    }else{
        $('.page-top').removeClass('active')
    }
})//scroll end

// 點按page-top回到最上方
$('.page-top').on('click', function(){
    $('html, body').animate({ scrollTop: 0 })
})//.page-top



$('nav>ul>li').on('click',function(e){
    e.preventDefault()

    //當前的li，底下的a，屬性href  / #news #product1 
    // console.log( $(this).find('a').attr('href') )
    
    // 指定叫做 "當前的li，底下的a，屬性href" 的選取器
    // console.log( $( $(this).find('a').attr('href') ) )

    // console.log($( $($(this).find('a').attr('href')).offset().top ))

    // 指定一個名為currentAHref變數找到當前的 href (字串)
    let currentAHref = $(this).find('a').attr('href')
    
    // 包在$()內變成選取器找到的元素名稱，並得到位移的高度
    // console.log( $(currentAHref).offset().top)

    $('html,body').animate({scrollTop: $(currentAHref).offset().top - 80 })
    
    
})// nav>ul>li end

function gsapAnimate(){
    // console.log('gsap')
    if( $(window).width() >= 768 ){
        $(window).scroll(function(){
            offsetTop = $(window).scrollTop()
            // console.log(offsetTop/10)
            gsap.to(".deco-1", {y: -offsetTop/10, duration: 1})
            gsap.to(".deco-2", {y: -offsetTop/5, duration: 1})
            
        }) // scroll end
    }else{
        $(window).scroll(function(){
            offsetTop = $(window).scrollTop()
            // console.log(offsetTop/3)
            gsap.to(".deco-1", {y: -offsetTop/5, duration: 1})
            gsap.to(".deco-2", {y: -offsetTop/3, duration: 1})
            
        }) // scroll end
    }
}
gsapAnimate()