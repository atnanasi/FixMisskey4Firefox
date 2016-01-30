// ==UserScript==
// @name        FixMisskey4Firefox
// @namespace   fixmisskey4firefox
// @description Fix something bugs in Misskey for Firefox
// @include     https://misskey.xyz/*
// @version     1.00
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require     https://raw.githubusercontent.com/layerssss/paste.js/master/paste.js
// ==/UserScript==

//Fix clock font
$('#misskey-header > .main > .main-contents-container > .right > .time > .dropdown > .dropdown-header > time').css('font-size','140%');
$('#misskey-header > .main > .main-contents-container > .right > .time > .dropdown > .dropdown-header > time').css('font-weight','bold');

//Fix paste by clipboard
$('textarea').pastableTextarea();

$('textarea').on('pasteImage', function(ev, data) {
    var target = ev.target;
    var event = new Event("paste");
    event.clipboardData = {
        items: [{
            kind: "file",
            type: data.blob.type,
            getAsFile: function() {
                return data.blob;
            }
        }]
    };
    target.dispatchEvent(event);
}).on('pasteImageError', function(ev, data) {
    alert('Oops: ' + data.message);
    if (data.url) {
        alert('But we got its url anyway:' + data.url)
    }
});
