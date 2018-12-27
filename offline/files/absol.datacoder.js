(function(){
                    var t = new Date(1545640194440);
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

                    console.log('\n %c %c %c absol.datacoder ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();

absol.datacoder = {};
absol.datacoder.b64EncodeUnicode = function (str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
};

absol.datacoder.b64DecodeUnicode = function (str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}