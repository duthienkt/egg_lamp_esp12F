(function(){
                    var t = new Date(1545988007838);
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

                    console.log('\n %c %c %c absol.net ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();




absol.net = {};
absol.net.makeHttpObject = function () {
    try {
        return new XMLHttpRequest();
    }
    catch (error) { }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (error) { }
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (error) { }

    throw new Error("Could not create HTTP request object.");
};


absol.net.JsonHttpGetRequest = function (url, params, success, failure) {
    var request = absol.net.makeHttpObject();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var json = request.responseText;
                success(JSON.parse(json));
            }
            else if (failure)
                failure(request.status, request.statusText);
        }
    };
};



absol.net.TextHttpGetRequest = function (url, success, failure) {
    var request = absol.net.makeHttpObject();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var json = request.responseText;
                success(json);
            }
            else if (failure)
                failure(request.status, request.statusText);
        }
    };
};

absol.net.findGetParameter = function (name) {
    var result = null,
        tmp = [];
    location.search.substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === name) result = decodeURIComponent(tmp[1]);
        });
    return result;
};




absol.net.encodeParams = function (object) {
    var res = [];
    for (var key in object) {
        res.push(encodeURI(key) + '=' + encodeURIComponent(object[key] + ''));
    }
    return res.join('&');
};

absol.net.decodeParams = function (s) {
    s = s.trim();
    var arr = s.split('&');
    var res = {};
    for (var i = 0; i < arr.length; ++i) {
        var param = arr[i].split('=');
        res[param[0]] = decodeURIComponent(param[1]);
    }
    return res;
};


absol.net.JsonHttpGetRequest = function (url, params, success, failure) {
    var request = absol.net.makeHttpObject();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var json = request.responseText;
                success(JSON.parse(json));
            }
            else if (failure)
                failure(request.status, request.statusText);
        }
    };
};



absol.net.JsonHttpPostRequest = function (url, param, success, failure) {

    return new Promise(function (rs, rj) {
        var method = "POST";
        var postData = JSON.stringify(param);
        var shouldBeAsync = true;

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var json = JSON.parse(request.responseText);
                    success && success(json);
                    rs(json);
                }
                // else if (failure)
                //     failure && failure(request.status, request.statusText);
                // rj({ status: request.status, statusText: request.statusText });
            }
        };
        request.onerror = function () {
            rj(new Error("Network Error!"));
        }

        request.open(method, url, shouldBeAsync);

        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.send(postData);
    });
}

/***
 * 
 * @param {String} url
 * @param {String} body
 * @param {String} responseType
 * @param {Function} success
 * @param {Function} failure
 * @returns {Promise}
 */
absol.net.PostRequest = function (url, body, responseType, success, failure) {
    return new Promise(function (rs, rj) {
        var method = "POST";
        var shouldBeAsync = true;

        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    success && success(request.response);
                    rs(request.response);
                }
                // else if (failure)
                //     failure && failure(request.status, request.statusText);
                // rj({ status: request.status, statusText: request.statusText });
            }
        };
        
        request.onerror = function () {
            rj(new Error("Network Error!"));
        }
        
        request.open(method, url, shouldBeAsync);
        request.responseType = responseType || '';

        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.send(body);


    });
};



/***
 * 
 * @param {String} url
 * @param {String} body
 * @param {String} responseType
 * @param {Function} success
 * @param {Function} failure
 * @returns {Promise}
 */
absol.net.GetRequest = function (url, props, success, failure) {
    return new Promise(function (rs, rj) {
        var request = absol.net.makeHttpObject();
        request.open("GET", url, true);
        Object.assign(request, props);
        request.send(null);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var text = request.responseText;
                    success && success(text);
                    rs(text);
                }
                else {

                    rj(request.status);
                    failure && failure(request.status, request.statusText);
                }
            }
        };

        request.onerror = function () {
            rj(new Error("Network Error!"));
        }
    });
};


absol.net.TextHttpGetRequest = function (url, success, failure) {
    var request = absol.net.makeHttpObject();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var json = request.responseText;
                success(json);
            }
            else if (failure)
                failure(request.status, request.statusText);
        }
    };
};

absol.net.findGetParameter = function (name) {
    var result = null,
        tmp = [];
    location.search.substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === name) result = decodeURIComponent(tmp[1]);
        });
    return result;
};

absol.net.getFileNameFromXHR = function (xhr) {
    var filename = undefined;
    var disposition = xhr.getResponseHeader('Content-Disposition');
    if (disposition && disposition.indexOf('inline') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }
    }
    if (disposition && disposition.indexOf('attachment') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }
    }
    return filename;
}

absol.net.download = function (url, filename, onDownloading) {
    return new Promise(function (resolve, reject) {
        var xhr = absol.net.makeHttpObject();
        xhr.open("GET", url, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var urlBlob = URL.createObjectURL(xhr.response);
                    filename = filename || absol.net.getFileNameFromXHR(xhr);
                    var a = absol._(['<a href="',urlBlob,'" style="display:none;"  download="',filename || '','"></a>'].join(''));
                    absol.$('body').addChild(a);
                    a.click();
                    a.selfRemove();
                    resolve();
                }
                else reject([xhr.status, xhr.statusText]);
            }
        };

        if (onDownloading)
            xhr.onprogress = function (event) {
                onDownloading(event.loaded, event.total)
            };
        xhr.onerror = function (err) {
            reject(err);
        };
        xhr.send(null);
    });
};


absol.net.loadScript = function (url, callback) {
    return new Promise(function (resolve, reject) {

        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) {  //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback && callback();
                    resolve();
                }
            };
        } else {  //Others
            script.onload = function () {
                callback && callback();
                resolve();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
};

absol.net.getUserIP = function (onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
        noop = function () { },
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}