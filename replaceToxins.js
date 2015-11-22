console.log("Scanning for toxins");
var replaced = $("body").html().replace(/toxin(s)+/ig,'Dark Magic');
$("body").html(replaced);
console.log("Scan complete");
