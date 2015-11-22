
// Can't get it to work on facebook yet
if (!isFacebook()) {
  var replacedxyz = $("body").html().replace(/toxin(s){0,1}/ig,'Dark Magic');
  $("body").html(replacedxyz);
}

function isFacebook() {
  return window.location.hostname.match(/facebook/) != null;
}
