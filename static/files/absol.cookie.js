(function(){
                    var t = new Date(1545640194443);
                    var t1 = new Date();
                    function pad(x){
                        if (x<10) x = '0' + x;
                        else x = ''+x;
                        return x;
                    }
                    function mill2hhmmss(t){
                        var s = Math.floor(t/1000);
                        var h = Math.floor(s/3600);
                        var m = Math.floor((s%3600)/60);
                        var s = s%60;
                        return pad(h)+':'+pad(m)+':'+pad(s);
                    }
                    var me = document.currentScript;

                    console.log('\n %c %c %c absol.cookie ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();

if (!absol.datacoder) console.warn("require package absol.datacoder");

absol.cookie = {};
absol.cookie.isEnabled = function () {
    var cookieEnabled = !!navigator.cookieEnabled;

    //if not IE4+ nor NS6+
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie = "testcookie_enabled";
        cookieEnabled = document.cookie.indexOf("testcookie_enabled") != -1;
    }
    return cookieEnabled;
}

absol.cookie.secure = function () {
    document.cookie = "secure";
}

absol.cookie.get = function (key) {
    var bkey = absol.datacoder.b64EncodeUnicode(key).replace(/=/g, '_');
    var pairs = document.cookie.split(';')
        .map(function (text) { return text.split('=') })
        .filter(function (pair) {
            return pair[0].trim() == bkey;
        });
    if (pairs.length > 0) {
        if (pairs[0].length > 1) {
            var bvalue = pairs[0][1];
            return absol.datacoder.b64DecodeUnicode(bvalue.replace(/_/g, '=').trim());
        }
        else {
            return true;
        }
    }
    else
        return undefined;
}

absol.cookie.set = function (key, value) {
    var bkey = absol.datacoder.b64EncodeUnicode(key);
    var bvalue = absol.datacoder.b64EncodeUnicode(value);
    document.cookie = bkey.replace(/=/g, '_') + "=" + bvalue.replace(/=/g, '_');
};

