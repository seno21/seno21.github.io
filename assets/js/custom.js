$(document).ready(function () {
  $(this).scrollTop(0); // Ini agar ketika scroll maka dia akan reload dari atas
  $(".page_scroll").on("click", function (e) {
    // tambahkan parameter e untuk disable href
    //Ambil atribut tujuan ketika link (.page_scroll) di klik
    let tujuan = $(this).attr("href");
    // $(this) = keadaan di atasnya brrti $(".page_scroll")
    //ambil elemen var tujuan
    let elementTujuan = $(tujuan);
    console.log(elementTujuan);
    // console.log(elementTujuan.offset().top); // Cek jarak dari section ke atas

    // console.log($("html,body").scrollTop("338"));//Ternyata harus di kasih html, body karena tidak work

    $("html,body").animate(
      {
        scrollTop: elementTujuan.offset().top,
      },
      1000 // time dengan satuan milisecond
    );

    e.preventDefault(); // ini untuk mematikan href supaya tidak jadi link (Link Nonaktif)
  });

  $(window).scroll(function () {
    let jarakSection = $("#skills").height();
    // jarakSection cuma w pake buat ngitung berapa jarak dari section ke top
    if ($(this).scrollTop() > 200) {
      // $(this) ini ngambil keadaan diatas brrtti $(window)
      $("#html").css({
        animation: "ayam 2s ease",
      });
      // .text("80%");

      $("#css").css({
        animation: "ayam 2s ease",
      });

      $("#js").css({
        animation: "ayam 2s ease",
      });

      $("#php").css({
        animation: "ayam 2s ease",
      });

      $("#sql").css({
        animation: "ayam 2s ease",
      });
    } else {
      $("#html").removeAttr("style", "animation: ayam 2s ease");
      $("#css").removeAttr("style", "animation: ayam 2s ease");
      $("#js").removeAttr("style", "animation: ayam 2s ease");
      $("#php").removeAttr("style", "animation: ayam 2s ease");
      $("#sql").removeAttr("style", "animation: ayam 2s ease");
    }
  });

  $(".wa").on("click", function (e) {
    e.preventDefault();
    alert("Sorry, my whatsapp is very private ...");
  });
});
