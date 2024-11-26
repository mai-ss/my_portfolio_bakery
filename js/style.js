

$(document).ready(function(){
    $('.slide_items').slick({
        arrows: false,//左右の矢印はなし
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 4,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [
            {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1.5,//スライドを画面に1.5枚見せる
            }
        }
    ]
    });
    });


// containerを上部に固定

    $(function () {
        var $container = $('.container'); // 対象のコンテナを指定
        var containerOffset = $container.offset().top; // コンテナの初期位置を取得
    
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= containerOffset) {
                $container.addClass('fixed'); // 固定用のクラスを追加
            } else {
                $container.removeClass('fixed'); // 固定を解除
            }
        });
    });



    $(document).ready(function() {
        // スクロールして要素が表示されたらアニメーションを追加
        $(window).on('scroll', function() {
            // .slide_left 要素に対して
            $(".__slide_left").each(function() {
                const targetOffset = $(this).offset().top;
                const windowScroll = $(window).scrollTop();
                const windowHeight = $(window).height();
    
                if (windowScroll > targetOffset - windowHeight + $(this).outerHeight()) {
                    $(this).addClass("slide_in_left"); // 要素が画面に入ったらクラスを追加
                }
            });
    
            // .slide_right 要素に対して
            $(".__slide_right").each(function() {
                const targetOffset = $(this).offset().top;
                const windowScroll = $(window).scrollTop();
                const windowHeight = $(window).height();
    
                if (windowScroll > targetOffset - windowHeight + $(this).outerHeight()) {
                    $(this).addClass("slide_in_right"); // 要素が画面に入ったらクラスを追加
                }
            });
        });
    
        // ページ読み込み時にも最初に表示される要素のアニメーションをチェック
        $(window).trigger('scroll');
    });
    

    $(document).ready(function () {
        // アニメーションを適用する要素を取得
        const fadeUpElements = $('.fadeup');
    
        // スクロールイベントを監視
        $(window).on('scroll', function () {
            fadeUpElements.each(function () {
                const elementTop = $(this).offset().top; // 要素の上端位置
                const windowBottom = $(window).scrollTop() + $(window).height(); // ウィンドウの下端位置
    
                // 要素が画面内に入ったらアニメーションを開始
                if (windowBottom > elementTop + 30) {
                    $(this).addClass('active');
                }
            });
        });
    });
    