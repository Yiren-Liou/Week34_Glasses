$(document).ready(function () {
  $(".hamIcon").click(function (e) {
    e.preventDefault();
    $(".menu").toggleClass("dropdown");
  });

// FAQ 收闔
    
  // 隱藏所有的 li 內文
  $('.cardItemBody').hide();
  // 預設讓第一個 li 加上 active
  $('.cardItem').eq(0).addClass('active');
  // 預設讓第一個 li 內文 顯示
  $('.cardItemBody').eq(0).show();

  // 點擊 li
  $('.cardItem').click(function (e) {
      // 取消預設 event 事件
      e.preventDefault();
      // 加上 active 屬性，並把其他有 active 的移除
      $(this).toggleClass('active').siblings().removeClass('active');
      // 讓自己的 li body 切換收合
      $(this).children().next().slideToggle();
      // 讓其他 li body 收合
      $(this).siblings().children().next().slideUp();
  });




});



