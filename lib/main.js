// var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var { MatchPattern } = require("sdk/util/match-pattern");
var pattern = new MatchPattern(/.*facebook.*/);

var notifications = require("sdk/notifications");
notifications.notify({
  title: "DEFACE",
  text: "please make sure you are logged in before activating deface"
  // CLICKABLE CODE
  // data: "this is a test",
  // onClick: function (data) {
  //   console.log(data);
  //   // console.log(this.data) would produce the same result.
  //   }
  });

// var button = buttons.ActionButton({
//   id: "mozilla-link",
//   label: "deface",
//   icon: {
//     "16": "./16.ico",
//     "32": "./32.png",
//     "64": "./64.png"
//   },
//   onClick: handleClick
// });
//
// function handleClick(state) {
//   tabs.open("https://www.facebook.com/");
//   };

pageMod.PageMod({
  attachTo: ["existing", "top"],
  include: "*.facebook.com",
    contentStyleFile: self.data.url("deface.css")
});

pageMod.PageMod({
  attachTo: ["existing", "top"],
include: "*.facebook.com",
    contentScriptFile: self.data.url("deface.js")
});
