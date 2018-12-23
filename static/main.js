var $ = absol.$;
var _ = absol._;

function tryParseJson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return {};
    }

}

function scan(ip) {
    var sync = Promise.resolve();
    var ipList = [];
    Array(255).fill(0)
        .map((x, i) => i * 10).sort((a, b) => Math.abs(a - 100) - Math.random(b - 100))
        .map(i => {
            sync = sync.then(r => {
                var task = [];
                for (var j = i; j < i + 10 && j < 255; ++j) {
                    ((rightIndex) =>
                        task.push(new Promise(rs => {
                            var destIP = ip.replace(/[0-9]+$/, rightIndex + '');
                            absol.net.GetRequest('http://' + destIP + '?times=' + performance.now(),
                                { timeout: 2000 })
                                .then(res => {
                                    var json = tryParseJson(res);
                                    console.log(res, json);
                                    if (json.id) ipList.push(json);
                                    rs();
                                }, rs);
                        })))(j);
                }
                return Promise.all(task);

            });
        });
    return sync.then(e => ipList);

};

function onIPChange(ip) {
    $('#ip').innerHTML = ip;
    scan(ip).then(ipList => console.log(ipList));
};


absol.net.getUserIP(onIPChange);
