// funcão para mudar a imagem ao rolar
$(window).on("scroll touchmove", function() {
  var windowSize = $(window).width(); //chegar tamanho da tela
  if (windowSize >= 1024) { // caso seja notebook ou acima mudar imagem
    if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < $("#qualidade").position().top) {
      $('.img_feature_1').css('background-image', 'url(../Site-HOW2/images/Qualidades/drink_colorless.png)')
    };
    if ($(document).scrollTop() >= $("#qualidade").position().top && $(document).scrollTop() < $("#album").position().top) {
      $('.img_feature_1').css('background-image', 'url(../Site-HOW2/images/Qualidades/drink_colorfull.png)')
    };
    if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < $("#qualidade").position().top) {
      $('.img_feature_2').css('background-image', 'url(../Site-HOW2/images/Qualidades/drink2_colorless.png)')
    };
    if ($(document).scrollTop() >= $("#qualidade").position().top && $(document).scrollTop() < $("#album").position().top) {
      $('.img_feature_2').css('background-image', 'url(../Site-HOW2/images/Qualidades/drink2_colorfull.png)')
    };
    if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < $("#qualidade").position().top) {
      $('.img_feature_3').css('background-image', 'url(../Site-HOW2/images/Qualidades/bartender_colorless.png)')
    };
    if ($(document).scrollTop() >= $("#qualidade").position().top && $(document).scrollTop() < $("#album").position().top) {
      $('.img_feature_3').css('background-image', 'url(../Site-HOW2/images/Qualidades/bartender_colorfull.png)')
    };
  };
});
