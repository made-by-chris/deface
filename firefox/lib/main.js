// var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var { MatchPattern } = require("sdk/util/match-pattern");
var pattern = new MatchPattern(/.*facebook.*/);

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
