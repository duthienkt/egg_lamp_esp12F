var $ = absol.$;
var _ = absol._;


absol.ShareCreator.loadingbox = function () {
    var res = _(`
        <div class="loading-box">
            <div class="title">Scanning ...</div>
            <div class="loading-bar">
                <div class="loaded" style="width:0%"></div>
            </div>
        </div>`);
    res.$loaded = $('.loaded', res);
    return res;
};


absol.ShareCreator.loadingbox.property = {
    loaded: {
        set: function (value) {
            this._loaded = value || 0;
            this.$loaded.addStyle('width', this.loaded * 100 + '%');
        },
        get: function () {
            return this._loaded || 0;
        }
    }
};

absol.ShareCreator.eggico = function () {
    return _(`<svg version="1.1" class="egg-ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 491.168 491.168"  xml:space="preserve">
	<g>
		<g>
			<path style="fill:none;" d="M229.335,150.885c0-10.61-8.589-19.208-19.2-19.208c-10.61,0-19.207,8.597-19.207,19.208
			c0,10.611,8.597,19.2,19.207,19.2C220.746,170.085,229.335,161.496,229.335,150.885z" />
			<path style="fill:none;" d="M274.258,185.904h-57.349c-1.605,0-3.049,0.963-3.661,2.439c-0.617,1.484-0.279,3.188,0.86,4.318
			l28.661,28.677c1.55,1.542,4.062,1.542,5.611,0l28.686-28.677c1.123-1.131,1.46-2.834,0.85-4.318
			C277.299,186.867,275.862,185.904,274.258,185.904z" />
			<path style="fill:none;" d="M281.032,131.677c-10.61,0-19.199,8.597-19.199,19.208c0,10.611,8.589,19.2,19.199,19.2
			c10.61,0,19.206-8.589,19.206-19.2C300.238,140.274,291.642,131.677,281.032,131.677z" />
			<g>
				<path d="M288.513,79.162c-20.548-28.87-18.253-60.501-15.78-74.516c0.265-1.509-0.362-3.026-1.613-3.917
				c-1.235-0.883-2.89-0.972-4.223-0.224c-21.647,12.111-26.47,41.07-26.47,41.07c-16.847-5.947-35.02-3.917-45.164-1.927
				c-1.477,0.281-2.648,1.373-3.05,2.826c-0.402,1.437,0.048,2.985,1.155,3.996c8.773,7.923,16.871,19.079,23.14,28.855
				c-63.985,14.054-112.03,73.505-112.03,144.747c0,9.234,0.885,18.257,2.434,27.023l23.78,23.816l22.834,22.826l22.835-22.834
				l23.195-23.189l23.189,23.197l22.842,22.826l22.835-22.826l23.188-23.197l23.197,23.189l22.833,22.834l22.836-22.826
				l23.776-23.74c1.557-8.788,2.445-17.833,2.445-27.099C386.698,154.079,345.449,98.216,288.513,79.162z M190.928,150.885
				c0-10.61,8.597-19.208,19.207-19.208c10.611,0,19.2,8.597,19.2,19.208c0,10.611-8.589,19.2-19.2,19.2
				C199.525,170.085,190.928,161.496,190.928,150.885z M277.067,192.662l-28.686,28.677c-1.55,1.542-4.062,1.542-5.611,0
				l-28.661-28.677c-1.14-1.131-1.477-2.834-0.86-4.318c0.612-1.476,2.056-2.439,3.661-2.439h57.349
				c1.603,0,3.041,0.963,3.658,2.439C278.527,189.828,278.19,191.531,277.067,192.662z M281.032,170.085
				c-10.61,0-19.199-8.589-19.199-19.2c0-10.61,8.589-19.208,19.199-19.208c10.61,0,19.206,8.597,19.206,19.208
				C300.238,161.496,291.642,170.085,281.032,170.085z" />
			</g>
		</g>
		<path d="M383.671,294.098l-46.022,46.031l-46.039-46.031l-46.023,46.031l-46.031-46.031l-46.037,46.031l-46.022-46.031
		l-31.512,31.511c13.997,85.079,84.509,165.559,169.602,165.559c85.087,0,155.599-80.48,169.596-165.55L383.671,294.098z" />
	</g>

</svg>`);
};


absol.ShareCreator.targetico = function () {
    return _(`<svg height="436.90667pt" viewBox="0 0 436.90667 436.90667" width="436.90667pt" xmlns="http://www.w3.org/2000/svg">
    <g fill="#0e65e5">
        <path d="m293.546875 218.453125c0 41.472656-33.621094 75.09375-75.09375 75.09375s-75.09375-33.621094-75.09375-75.09375 33.621094-75.09375 75.09375-75.09375 75.09375 33.621094 75.09375 75.09375zm0 0" />
        <path d="m218.453125 300.375c-45.171875 0-81.917969-36.746094-81.917969-81.921875 0-45.171875 36.746094-81.917969 81.917969-81.917969 45.175781 0 81.921875 36.746094 81.921875 81.917969 0 45.175781-36.746094 81.921875-81.921875 81.921875zm0-150.1875c-37.640625 0-68.265625 30.625-68.265625 68.265625s30.625 68.265625 68.265625 68.265625 68.265625-30.625 68.265625-68.265625-30.625-68.265625-68.265625-68.265625zm0 0" />
        <path d="m218.453125 409.601562c-105.398437 0-191.144531-85.746093-191.144531-191.148437 0-105.398437 85.746094-191.144531 191.144531-191.144531 105.402344 0 191.148437 85.746094 191.148437 191.144531 0 105.402344-85.746093 191.148437-191.148437 191.148437zm0-368.640624c-97.875 0-177.492187 79.617187-177.492187 177.492187s79.617187 177.492187 177.492187 177.492187 177.492187-79.617187 177.492187-177.492187-79.617187-177.492187-177.492187-177.492187zm0 0" />
        <path d="m218.453125 354.988281c-75.285156 0-136.53125-61.25-136.53125-136.535156s61.246094-136.53125 136.53125-136.53125 136.535156 61.246094 136.535156 136.53125-61.25 136.535156-136.535156 136.535156zm0-259.414062c-67.753906 0-122.878906 55.125-122.878906 122.878906s55.125 122.878906 122.878906 122.878906 122.878906-55.125 122.878906-122.878906-55.125-122.878906-122.878906-122.878906zm0 0" />
    </g>
    <path d="m273.066406 218.453125c0 30.164063-24.449218 54.613281-54.613281 54.613281-30.160156 0-54.613281-24.449218-54.613281-54.613281 0-30.160156 24.453125-54.613281 54.613281-54.613281 30.164063 0 54.613281 24.453125 54.613281 54.613281zm0 0"
        fill="#94c1ff" />
    <path d="m218.453125 279.894531c-33.878906 0-61.441406-27.558593-61.441406-61.441406 0-33.878906 27.5625-61.441406 61.441406-61.441406 33.882813 0 61.441406 27.5625 61.441406 61.441406 0 33.882813-27.558593 61.441406-61.441406 61.441406zm0-109.226562c-26.347656 0-47.785156 21.4375-47.785156 47.785156s21.4375 47.785156 47.785156 47.785156 47.785156-21.4375 47.785156-47.785156-21.4375-47.785156-47.785156-47.785156zm0 0"
        fill="#0e65e5" />
    <path d="m218.453125 436.90625c-3.773437 0-6.828125-3.054688-6.828125-6.828125v-423.25c0-3.773437 3.054688-6.828125 6.828125-6.828125s6.828125 3.054688 6.828125 6.828125v423.25c0 3.773437-3.054688 6.828125-6.828125 6.828125zm0 0"
        fill="#0e65e5" />
    <path d="m430.078125 225.28125h-423.25c-3.773437 0-6.828125-3.054688-6.828125-6.828125s3.054688-6.828125 6.828125-6.828125h423.25c3.773437 0 6.828125 3.054688 6.828125 6.828125s-3.054688 6.828125-6.828125 6.828125zm0 0"
        fill="#0e65e5" />
    <path d="m184.320312 204.800781c-3.773437 0-6.828124-3.054687-6.828124-6.828125v-27.304687c0-3.773438 3.054687-6.828125 6.828124-6.828125 3.773438 0 6.828126 3.054687 6.828126 6.828125v27.304687c0 3.773438-3.054688 6.828125-6.828126 6.828125zm0 0"
        fill="#fff" />
    <path d="m197.972656 191.148438h-27.304687c-3.773438 0-6.828125-3.054688-6.828125-6.828126 0-3.773437 3.054687-6.828124 6.828125-6.828124h27.304687c3.773438 0 6.828125 3.054687 6.828125 6.828124 0 3.773438-3.054687 6.828126-6.828125 6.828126zm0 0"
        fill="#fff" />
</svg>`);
}



absol.ShareCreator.device = function () {
    var res = _({
        class: 'device',
        child: [
            'eggico',
            `<div class="device-info">
                <div class="device-id"></div> 
                <div class="device-ip"></div>
            </div>`,
            '.device-color.left',
            '.device-color.right'
        ]
    });
    res.eventHandler = absol.OOP.bindFunctions(res, absol.ShareCreator.device.eventHandler);
    res.$ip = $('.device-ip', res);
    res.$id = $('.device-id', res);
    res.$colorLeft = $('.device-color.left', res);
    res.$colorRight = $('.device-color.right', res);
    absol.OOP.drillProperty(res, res.$ip, 'ip', 'innerHTML');
    absol.OOP.drillProperty(res, res.$id, 'id', 'innerHTML');
    res.$colorLeft.on('click', res.eventHandler.leftColorClick);
    res.$colorRight.on('click', res.eventHandler.rightColorClick);
    return res;
};

absol.ShareCreator.device.property = {
    color: {
        set: function (value) {
            this._color = value || Array(6).fill(0);
            this.$colorLeft.addStyle('background-color', 'rgb(' + value.slice(0, 3).map(x => x + '').join(',') + ')');
            this.$colorRight.addStyle('background-color', 'rgb(' + value.slice(3, 6).map(x => x + '').join(',') + ')');

        },
        get: function () {
            return this._color || Array(6).fill(0);;
        }
    }
}
    ;

absol.ShareCreator.device.eventHandler = {};

absol.ShareCreator.device.eventHandler.leftColorClick = function (event) {
    var modal = _('modal').addTo(document.body);
    modal.addStyle('overscroll-behavior', 'contain');
    var colorPicker = _('colorpicker').addTo(modal);
    colorPicker.RGBA = this.color.slice(0, 3).map(x => x / 255).concat([1]);

    modal.on('click', function (event1) {
        if (event1.target == modal) {
            modal.selfRemove();
        }
    });
    colorPicker.afterAttached().then(uu => {
        var cb = colorPicker.getBoundingClientRect();
        var mb = modal.getBoundingClientRect();
        var h = Math.min(mb.width / cb.width, mb.height / cb.height);
        modal.addStyle('font-size', h * 0.95 + 'em');
        modal._update();
    });

    colorPicker.on('change', function (event1) {
        colorPicker.RGBA.map(x => x * 255 >> 0)
            .slice(0, 3)
            .forEach((x, i) => this.color[i] = x);
        this.color = this.color;//update
        this.sendToDevice();
    }.bind(this));

};

absol.ShareCreator.device.eventHandler.rightColorClick = function () {
    var modal = _('modal').addTo(document.body);
    modal.addStyle('overscroll-behavior', 'contain');
    var colorPicker = _('colorpicker').addTo(modal);
    colorPicker.RGBA = this.color.slice(3, 6).map(x => x / 255).concat([1]);
    modal.on('click', function (event1) {
        if (event1.target == modal) {
            modal.selfRemove();
        }
    });
    colorPicker.afterAttached().then(uu => {
        var cb = colorPicker.getBoundingClientRect();
        var mb = modal.getBoundingClientRect();
        var h = Math.min(mb.width / cb.width, mb.height / cb.height);
        modal.addStyle('font-size', h * 0.95 + 'em');
        modal._update();
    });

    colorPicker.on('change', function (event1) {
        colorPicker.RGBA.map(x => x * 255 >> 0)
            .slice(0, 3)
            .forEach((x, i) => this.color[i + 3] = x);
        this.color = this.color;//update
        this.sendToDevice();
        setTimeout(this.sendToDevice.bind(this), 1000);
    }.bind(this));
};


absol.ShareCreator.device.prototype.sendToDevice = function () {
    if (this._requesting) return;
    this._requesting = true;
    var url = 'http://' + this.ip + '?cmd=' + this.color.map(x => x + '').join('_');
    absol.net.GetRequest(url, { timeout: 1000 }).then(res => {
        // Object.assign(this, res);
        this._requesting = false;
    }, error => {
        console.error(error);
        this._requesting = false;
    });
};










function tryParseJson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return {};
    }

}

function scan(ip) {
    var sync = Promise.resolve();
    var loadingBox = _({ tag: 'loadingbox', style: { width: '80%' } });
    var modal = _({
        tag: 'modal',
        child: loadingBox
    }).addTo(document.body);

    loadingBox.loaded = 0;
    var devices = [];
    var scanned = 0;
    var cIndex = parseInt(ip.match(/[0-9]+$/) || ['100']);
    var isFinish = false;

    modal.on('click', function(event){
        if (event.target == modal){
            isFinish = true;
            modal.selfRemove();
        }
    });
    Array(25).fill(0)
        .map((x, i) => i * 10).sort((a, b) => Math.abs(a - cIndex) - Math.abs(b - cIndex))
        .map(i => {
            sync = sync.then(r => {
                var task = [];
                for (var j = Math.max(i, 1); j < i + 10 && j < 255; ++j) {
                    ((rightIndex) =>
                        task.push(new Promise(rs => {
                            if (isFinish) rs();
                            var destIP = ip.replace(/[0-9]+$/, rightIndex + '');
                            absol.net.GetRequest('http://' + destIP + '?times=' + performance.now(),
                                { timeout: 2000 }
                                )
                                .then(res => {
                                    var json = tryParseJson(res);
                                    if (json.id) {
                                        json.ip = destIP;
                                        devices.push(json);
                                        viewDevices(devices);
                                    };
                                    rs();
                                }, rs).then(e => {
                                    scanned++;
                                    loadingBox.loaded = scanned / 254;
                                });
                        })))(j);
                }
                return Promise.all(task);

            })
        });
    return sync.then(e => modal.selfRemove()).then(e => devices);

};

function onIPChange(ip) {
    $('#ip').value = ip;

};


function quickscan() {
    var olddevices = absol.cookie.get('devices');
    var devices = [];
    if (olddevices && olddevices.length > 0) {
        var scanned = 0;
        var loadingBox = _({ tag: 'loadingbox', style: { width: '80%' } });
        var modal = _({
            tag: 'modal',
            child: loadingBox
        }).addTo(document.body);
        modal.on('click', function(event){
            if (event.target == modal){
                isFinish = true;
                modal.selfRemove();
            }
        });
        var isFinish = false;
        olddevices = JSON.parse(olddevices);
        var tasks = olddevices.map(device => {
           
            return new Promise(rs => {
                if (isFinish) rs();
                var destIP = device.ip;
                absol.net.GetRequest('http://' + destIP + '?times=' + performance.now(),
                    { timeout: 1400 })
                    .then(res => {
                        var json = tryParseJson(res);
                        if (json.id) {
                            json.ip = destIP;
                            devices.push(json);
                        };
                        rs();
                    }, rs).then(e => {
                        scanned++;
                        loadingBox.loaded = scanned / olddevices.length;
                    });
            })
        });
        return Promise.all(tasks).then(e => modal.selfRemove()).then(e => devices);
    }
    else {
        return Promise.resolve([]);
    }
}


function viewDevices(devices) {
    absol.cookie.set('devices', JSON.stringify(devices));
    var deviceListView = $('.device-list');
    deviceListView.clearChild();
    var deviceViews = devices.map(device => _({ tag: 'device', props: device }));
    deviceViews.forEach(dv => dv.addTo(deviceListView));

}

quickscan().then(viewDevices);

absol.net.getUserIP(onIPChange);

var scanBt = $('.scan');

_('targetico').addTo(scanBt);

scanBt.on('click', function () {
    var ip = $('#ip').value;
    if (!ip) return;
    scan(ip).then(viewDevices);
});