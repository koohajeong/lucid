$(document).ready(function () {
    $('.list a').click(function () {
        /* 모든 버튼 클래스 제거 */
        $('.list a').removeClass('active');

        /* 클릭한 것만 클래스 추가 */
        $(this).addClass('active');

        /* 부모인 li의 인덱스 번호를 담는 변수 */
        var i = $(this).parent().index();

        /* 모든 자손 박스는 안보이게 처리 */
        $('.contents > li').fadeOut(0);

        /* 클릭한 버튼과 같은 박스만 보이게 처리 */
        $('.contents > li').eq(i).fadeIn(0);
    });

    // 이미지 열기
    // card1
    $('.card1').click(function(){
        $('.card1-plus').fadeIn(0);
    });
    $('.card1-plus a').click(function(){
        $('.card1-plus').fadeOut(0);
    });

    // card2
    $('.card2').click(function(){
        $('.card2-plus').fadeIn(0);
    });
    $('.card2-plus a').click(function(){
        $('.card2-plus').fadeOut(0);
    });

    // poster
    $('.poster>a').click(function(){
        $('.poster-plus').fadeIn(0);
    });
    $('.poster-plus a').click(function(){
        $('.poster-plus').fadeOut(0);
    });
});