$(function () {




    history.scrollRestoration = "manual"

    // 마우스 휠 이벤트에 대한 핸들러 추가
    window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            // 마우스 휠을 아래로 스크롤할 때 실행할 코드
            $('header').addClass('wheel');
            $('.menu-wrap').css('display', 'block');
            // 여기에 아래로 스크롤할 때 실행할 동작을 추가합니다.
        }
    });

    // 스크롤 이벤트에 대한 핸들러 추가
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) { // 스크롤 위치가 최상단이 아닌 경우
            // 마우스 휠을 아래로 스크롤할 때와 동일한 동작 수행
            $('header').addClass('wheel');
            $('.menu-wrap').css('display', 'block');
            // 추가로 필요한 동작을 여기에 추가합니다.
        } else {
            // 스크롤이 최상단에 도달했을 때 실행할 코드
            $('header').removeClass('wheel');
            $('.menu-wrap').css('display', '');
            // 추가로 필요한 동작을 여기에 추가합니다.
        }
    });

    // .all-more 요소의 클릭 이벤트 핸들러 (이벤트 위임)
    $(document).on('click', '.all-more', function () {
        var menuNav = $('.menu-nav');
        if (menuNav.css('display') === 'none') {
            // 현재 메뉴가 숨겨진 상태일 때
            menuNav.css('display', 'block');


        } else {
            // 현재 메뉴가 표시된 상태일 때
            menuNav.css('display', 'none');
        }
        $('.menu-more').toggleClass('active');
        $('.all-more').toggleClass('open');
    });
    $('.left-menu-all .title').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('on').siblings('').stop().slideToggle()

    })
})