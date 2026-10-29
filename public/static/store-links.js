// Store buttons on the standalone pages carry a campaign tag, so installs can be
// traced in App Store Connect (ct=) and Play Console (utm_*). A page sets its
// default on <body data-ct="...">; a link such as /jul?ct=shop-woolstock
// overrides it, which is how each email, card and post gets its own tag.
(function () {
  var param = new URLSearchParams(location.search).get('ct') || '';
  var ct = /^[a-z0-9-]{1,40}$/.test(param) ? param : (document.body.dataset.ct || 'web');
  var ios = 'https://apps.apple.com/app/apple-store/id6792596703?pt=129184776&ct=' + ct + '&mt=8';
  var play = 'https://play.google.com/store/apps/details?id=com.craftmadeby.app&referrer=' +
    encodeURIComponent('utm_source=' + ct + '&utm_medium=web&utm_campaign=' + (document.body.dataset.campaign || 'site'));
  document.querySelectorAll('a[data-store="ios"]').forEach(function (a) { a.href = ios; });
  document.querySelectorAll('a[data-store="play"]').forEach(function (a) { a.href = play; });
})();
