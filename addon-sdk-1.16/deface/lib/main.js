var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var { MatchPattern } = require("sdk/util/match-pattern");
var pattern = new MatchPattern(/.*facebook.*/);

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "deface",
  icon: {
    "16": "./16.ico",
    "32": "./32.png",
    "64": "./64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
/*if(window.location.indexOf("facebook") = -1)*/{
  tabs.open("https://www.facebook.com/");
}}

pageMod.PageMod({
  include: "/.*facebook.*/",
  contentScriptFile: self.data.url("deface.js")
});

pageMod.PageMod({
  include: "/.*facebook.*/",
  contentStyleFile: self.data.url("deface.css")
});
