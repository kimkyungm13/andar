// 마우스 휠 이벤트에 대한 핸들러 추가
window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        // 마우스 휠을 아래로 스크롤할 때 실행할 코드
        $('header').addClass('wheel');
        $('.menu-wrap').css('display', 'block');
        $('.all-more').click(function () {
            $('.menu-nav').toggleClass('active');
            $('.menu-more').toggleClass('active')
        })
        // 여기에 아래로 스크롤할 때 실행할 동작을 추가합니다.
    }
});
// 스크롤 이벤트에 대한 핸들러 추가
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        // 스크롤이 최상단에 도달했을 때 실행할 코드
        $('header').removeClass('wheel');
        $('.menu-wrap').css('display', '');

        // 여기에 최상단에 도달했을 때 실행할 동작을 추가합니다.
    }
});
