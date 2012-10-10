

var ffi = require("ffi");

var gettext = ffi.Library("./gettextwrap.so", {
  "translate": [ "string", ["string", "string", "string"] ]
});

var locale = process.env.LANG;

console.log(gettext.translate(locale, "gedit", "Text Editor"));

// gettext.translate.async("gedit", "Text Editor", function(err, res){
//   console.log("async call", err, res);
//   process.exit(0);
// });

