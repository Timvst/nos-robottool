var articleURL = 'http://nos.nl/l/2163626';

function shareTwitter() {
  var percentageTW = $( "li.active" ).find( ".percentage" ).text();
  var baanTW = $( "li.active" ).find( ".banen" ).text();
  var baanTWl = 'als ' + baanTW.toLowerCase();

  if(baanTW.length < 38 ){
    var sharetextTW = 'https://twitter.com/home?status=De%20kans%20dat%20een%20robot%20mijn%20baan%20' + baanTWl + '%20overneemt%20is%20' + percentageTW + '%20procent.%20%23wereldzonderwerk%20' + articleURL + '&' ;
  } else {
    var sharetextTW = 'https://twitter.com/home?status=De%20kans%20dat%20een%20robot%20mijn%20baan%20overneemt%20is%20' + percentageTW + '%20procent.%20%23wereldzonderwerk%20' + articleURL + '&' ;
  }
  window.open(
    sharetextTW,'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
  );
}

function shareFacebook() {
  var shareurlFB = 'http://www.facebook.com/sharer.php?u=' + articleURL;
  window.open(
    shareurlFB,'facebookwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
  );
}

function shareWhatsapp() {
  var percentageWa = $( "li.active" ).find( ".percentage" ).text();
  var baanWa = $( "li.active" ).find( ".banen" ).text();
  var baanWal = 'als ' + baanWa.toLowerCase();
  var sharetextWA = 'whatsapp://send?text=' + 'De kans dat een robot mijn baan ' + baanWal + ' overneemt is ' + percentageWa + ' procent. ' + articleURL ;
  console.log(sharetextWA);
  window.open(sharetextWA);

}
