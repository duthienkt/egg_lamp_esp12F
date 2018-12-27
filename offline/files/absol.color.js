(function(){
                    var t = new Date(1545915961428);
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

                    console.log('\n %c %c %c absol.color ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();
var absol_color_css = [
'.absol-color-picker {',
'    user-select: none;',
'    height: 19em;',
'    width: 20em;',
'    position: relative;',
'    background-color: rgb(45, 45, 49);',
'    color: rgb(222, 222, 225);',
'    border-radius: 0.4em;',
'    padding: 0.7em;',
'    display: inline-block;',
'    border: solid 1px rgb(139, 139, 169);',
'    font-family: Arial, Helvetica, sans-serif;',
'}',
'.absol-color-picker.with-alpha {',
'    width: 23em;',
'}',
'.absol-color-picker.with-alpha .absol-color-picker-color,',
'.absol-color-picker.with-alpha .absol-color-picker-input ',
' {',
'    right: 8em;',
'}',
'.absol-color-picker,',
'.absol-color-picker * {',
'    box-sizing: border-box;',
'}',
'.absol-color-picker-color {',
'    z-index: 1;',
'    position: absolute;',
'    left: 1em;',
'    right: 5em;',
'    top: 1em;',
'    bottom: 4em;',
'    padding: 0;',
'    border: solid 1px rgb(220, 220, 220);',
'    border-bottom-width: 2px;',
'    box-sizing: content-box;',
'}',
'.absol-color-picker-sat {',
'    box-sizing: content-box;',
'    width: 100%;',
'    height: 100%;',
'    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#FFF), to(rgba(204, 154, 129, 0)));',
'    background-image: -webkit-linear-gradient(left, #FFF, rgba(204, 154, 129, 0));',
'    background-image: -moz-linear-gradient(left, #fff, rgba(204, 154, 129, 0));',
'    background-image: -o-linear-gradient(left, #fff, rgba(204, 154, 129, 0));',
'    background-image: -ms-linear-gradient(left, #fff, rgba(204, 154, 129, 0));',
'    background-image: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));',
'    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)\";',
'    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=\'#FFFFFFFF\', endColorstr=\'#00CC9A81\');',
'}',
'.absol-color-picker-val {',
'    position: relative;',
'    width: 100%;',
'    height: 100%;',
'    box-sizing: content-box;',
'    background-image: -webkit-gradient(linear, 0 100%, 0 0, from(#000000), to(rgba(204, 154, 129, 0)));',
'    background-image: -webkit-linear-gradient(bottom, #000000, rgba(204, 154, 129, 0));',
'    background-image: -moz-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));',
'    background-image: -o-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));',
'    background-image: -ms-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));',
'    background-image: linear-gradient(to top, #000, rgba(204, 154, 129, 0));',
'    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)\";',
'    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00CC9A81\', endColorstr=\'#FF000000\');',
'}',
'.absol-color-dragger {',
'    border: solid 1px rgb(160, 160, 160);',
'    box-shadow: inset 0px 0px 0.4em 0.1em rgba(255, 255, 255, 0.7);',
'}',
'.absol-color-picker-val .absol-color-dragger {',
'    position: absolute;',
'    z-index: 10;',
'    width: 1em;',
'    height: 1em;',
'    border: solid 1px rgb(160, 160, 160);',
'    bottom: 0;',
'    left: 0;',
'    margin-top: -0.5em;',
'    margin-bottom: -0.5em;',
'    margin-left: -0.5em;',
'    margin-right: -0.5em;',
'    border-radius: 50%;',
'    box-shadow: inset 0px 0px 0.4em 0.1em rgba(255, 255, 255, 0.7);',
'}',
'.absol-color-picker-hue-range {',
'    position: absolute;',
'    top: 1em;',
'    right: 1.5em;',
'    bottom: 4em;',
'    width: 1.7em;',
'}',
'.absol-color-picker-hue {',
'    position: relative;',
'    width: 100%;',
'    height: 100%;',
'    border: inset 1px rgba(220, 220, 225);',
'    background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);',
'}',
'.absol-color-picker-hue .absol-color-dragger,',
'.absol-color-picker-alpha .absol-color-dragger {',
'    position: absolute;',
'    height: 0.6em;',
'    left: -0.3em;',
'    right: -0.3em;',
'    top: 0%;',
'    margin-top: -0.3em;',
'    margin-bottom: -0.3em;',
'    border-width: 0.1em;',
'}',
'.absol-color-picker-alpha {',
'    position: relative;',
'    width: 100%;',
'    height: 100%;',
'    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));',
'}',
'.absol-color-picker-alpha-range,',
'.absol-color-picker-input {',
'    background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAaSURBVBhXYzh8+PD///8hJAOcBSRxyRw+DABJUCox2kjvSgAAAABJRU5ErkJggg==\');',
'    background-size: 1.5em;',
'    image-rendering: optimizeSpeed;',
'    /* STOP SMOOTHING, GIVE ME SPEED  */',
'    image-rendering: -moz-crisp-edges;',
'    /* Firefox                        */',
'    image-rendering: -o-crisp-edges;',
'    /* Opera                          */',
'    image-rendering: -webkit-optimize-contrast;',
'    /* Chrome (and eventually Safari) */',
'    image-rendering: pixelated;',
'    /* Chrome */',
'    image-rendering: optimize-contrast;',
'    /* CSS3 Proposed                  */',
'    -ms-interpolation-mode: nearest-neighbor;',
'    /* IE8+                           */',
'}',
'.absol-color-picker-alpha-range {',
'    position: absolute;',
'    right: 4.5em;',
'    top: 1em;',
'    bottom: 4em;',
'    width: 1.7em;',
'}',
'.absol-color-picker:not(.with-alpha) .absol-color-picker-alpha-range {',
'    display: none;',
'}',
'.absol-color-picker-input {',
'    position: absolute;',
'    left: 1em;',
'    bottom: 1em;',
'    right: 5em;',
'    height: 2em;',
'}',
'.absol-color-picker-text-container {',
'    background-color: transparent;',
'    outline: none;',
'    border: none;',
'    width: 100%;',
'    height: 100%;',
'    color: rgb(230, 230, 235);',
'    text-align: center;',
'    font-size: 1em;',
'    background-color: #000;',
'}',
'.absol-color-picker-mode {',
'    position: absolute;',
'    right: 1em;',
'    bottom: 1em;',
'    height: 2em;',
'    width: 3em;',
'    box-sizing: border-box;',
'    font-size: 1em;',
'    border: none;',
'    outline: none;',
'    background-color: rgb(75, 75, 82);',
'    color: rgb(225, 225, 235);',
'}',
'.absol-color-picker.with-alpha .absol-color-picker-mode {',
'  right: 2.5em;',
'}'
].join('\n');
var absol_color_style = document.createElement('style');
absol_color_style.setAttribute('id', 'absol_color_css');
absol_color_style.innerHTML = absol_color_css;
document.head.appendChild(absol_color_style);
if (!absol.ShareCreator.editabletext) console.warn('Miss plugin', 'absol.comp');
absol.color = {};

absol.color.rgbToHex = function (rgb) {
    return '#' + rgb.slice(0, 3).map(function (c) {
        var res = ((c * 255) >> 0).toString(16);
        if (res < 10) res = '0' + res;
        return res.toUpperCase();
    }).join('');
};

absol.color.rgbaToHex = function (rgb) {
    return '#' + rgb.map(function (c) {
        var res = ((c * 255) >> 0).toString(16);
        if (res < 10) res = '0' + res;
        return res.toUpperCase();
    }).join('');
};

absol.color.hsbaToText = function (hsba) {
    return `hsba(${hsba[0] * 360 >> 0}deg, ${hsba[1] * 100 >> 0}%, ${hsba[2] * 100 >> 0}%, ${hsba[a].toFixed(3)})`;
};

absol.color.hslaToText = function (hsl) {
    return `hsla(${hsl[0] * 360 >> 0}deg, ${hsl[1] * 100 >> 0}%, ${hsl[2] * 100 >> 0}%, ${hsl[a].toFixed(3)})`;
};

absol.color.rgbaToText = function (rgba) {
    return `rgba(${rgba[0] * 255 >> 0}, ${rgba[1] * 255 >> 0}, ${rgba[2] * 255 >> 0}, ${rgba[a].toFixed(3)})`;
};

absol.color.hsbToText = function (hsba) {
    return `hsb(${hsba[0] * 360 >> 0}deg, ${hsba[1] * 100 >> 0}%, ${hsba[2] * 100 >> 0}%)`;
};

absol.color.hslToText = function (hsl) {
    return `hsl(${hsl[0] * 360 >> 0}deg, ${hsl[1] * 100 >> 0}%, ${hsl[2] * 100 >> 0}%)`;
};

absol.color.rgbToText = function (rgba) {
    return `rgb(${rgba[0] * 255 >> 0}, ${rgba[1] * 255 >> 0}, ${rgba[2] * 255 >> 0})`;
};


absol.color.hsbaToHSLA = function (hsba) {
    var hue = hsba[0];
    var sat = hsba[1];
    var val = hsba[2];

    // Calculate lightness.
    var li = (2 - sat) * val / 2;

    // Convert saturation.
    if (li !== 0) {
        if (li === 1) {
            sat = 0;
        } else if (li < 0.5) {
            sat = sat / (2 - sat);
        } else {
            sat = sat * val / (2 - li * 2);
        }
    }

    // Hue and alpha stay the same.
    return [hue, sat, li, hsba[3]];
};

absol.color.hsbaToRGBA = function (hsba) {
    var hue = hsba[0] * 6; // We will split hue into 6 sectors.
    var sat = hsba[1];
    var val = hsba[2];

    var RGBA = [];

    if (sat === 0) {
        RGBA = [val, val, val, hsba[3]]; // Return early if grayscale.
    } else {
        var sector = Math.floor(hue);
        var tint1 = val * (1 - sat);
        var tint2 = val * (1 - sat * (hue - sector));
        var tint3 = val * (1 - sat * (1 + sector - hue));
        var red, green, blue;
        if (sector === 1) {
            // Yellow to green.
            red = tint2;
            green = val;
            blue = tint1;
        } else if (sector === 2) {
            // Green to cyan.
            red = tint1;
            green = val;
            blue = tint3;
        } else if (sector === 3) {
            // Cyan to blue.
            red = tint1;
            green = tint2;
            blue = val;
        } else if (sector === 4) {
            // Blue to magenta.
            red = tint3;
            green = tint1;
            blue = val;
        } else if (sector === 5) {
            // Magenta to red.
            red = val;
            green = tint1;
            blue = tint2;
        } else {
            // Red to yellow (sector could be 0 or 6).
            red = val;
            green = tint3;
            blue = tint1;
        }
        RGBA = [red, green, blue, hsba[3]];
    }
    return RGBA;
};



absol.color.hslaToHSBA = function (hsla) {
    var hue = hsla[0];
    var sat = hsla[1];
    var li = hsla[2];

    // Calculate brightness.
    var val;
    if (li < 0.5) {
        val = (1 + sat) * li;
    } else {
        val = li + sat - li * sat;
    }

    // Convert saturation.
    sat = 2 * (val - li) / val;

    // Hue and alpha stay the same.
    return [hue, sat, val, hsla[3]];
};

absol.color.hslaToRGBA = function (hsla) {
    var hue = hsla[0] * 6; // We will split hue into 6 sectors.
    var sat = hsla[1];
    var li = hsla[2];

    var RGBA = [];

    if (sat === 0) {
        RGBA = [li, li, li, hsla[3]]; // Return early if grayscale.
    } else {
        // Calculate brightness.
        var val;
        if (li < 0.5) {
            val = (1 + sat) * li;
        } else {
            val = li + sat - li * sat;
        }

        // Define zest.
        var zest = 2 * li - val;

        // Implement projection (project onto green by default).
        var hzvToRGB = function (hue, zest, val) {
            if (hue < 0) {
                // Hue must wrap to allow projection onto red and blue.
                hue += 6;
            } else if (hue >= 6) {
                hue -= 6;
            }
            if (hue < 1) {
                // Red to yellow (increasing green).
                return zest + (val - zest) * hue;
            } else if (hue < 3) {
                // Yellow to cyan (greatest green).
                return val;
            } else if (hue < 4) {
                // Cyan to blue (decreasing green).
                return zest + (val - zest) * (4 - hue);
            } else {
                // Blue to red (least green).
                return zest;
            }
        };

        // Perform projections, offsetting hue as necessary.
        RGBA = [
            hzvToRGB(hue + 2, zest, val),
            hzvToRGB(hue, zest, val),
            hzvToRGB(hue - 2, zest, val),
            hsla[3]
        ];
    }

    return RGBA;
};


absol.color.rgbaToHSBA = function (rgba) {
    var red = rgba[0];
    var green = rgba[1];
    var blue = rgba[2];

    var val = Math.max(red, green, blue);
    var chroma = val - Math.min(red, green, blue);

    var hue, sat;
    if (chroma === 0) {
        // Return early if grayscale.
        hue = 0;
        sat = 0;
    } else {
        sat = chroma / val;
        if (red === val) {
            // Magenta to yellow.
            hue = (green - blue) / chroma;
        } else if (green === val) {
            // Yellow to cyan.
            hue = 2 + (blue - red) / chroma;
        } else if (blue === val) {
            // Cyan to magenta.
            hue = 4 + (red - green) / chroma;
        }
        if (hue < 0) {
            // Confine hue to the interval [0, 1).
            hue += 6;
        } else if (hue >= 6) {
            hue -= 6;
        }
    }

    return [hue / 6, sat, val, rgba[3]];
};

absol.color.rgbaToHSLA = function (rgba) {
    var red = rgba[0];
    var green = rgba[1];
    var blue = rgba[2];

    var val = Math.max(red, green, blue);
    var min = Math.min(red, green, blue);
    var li = val + min; // We will halve this later.
    var chroma = val - min;

    var hue, sat;
    if (chroma === 0) {
        // Return early if grayscale.
        hue = 0;
        sat = 0;
    } else {
        if (li < 1) {
            sat = chroma / li;
        } else {
            sat = chroma / (2 - li);
        }
        if (red === val) {
            // Magenta to yellow.
            hue = (green - blue) / chroma;
        } else if (green === val) {
            // Yellow to cyan.
            hue = 2 + (blue - red) / chroma;
        } else if (blue === val) {
            // Cyan to magenta.
            hue = 4 + (red - green) / chroma;
        }
        if (hue < 0) {
            // Confine hue to the interval [0, 1).
            hue += 6;
        } else if (hue >= 6) {
            hue -= 6;
        }
    }

    return [hue / 6, sat, li / 2, rgba[3]];
};

absol.ShareCreator.colorpicker = function () {
    var _ = absol._;
    var $ = absol.$;
    var res = _(`
    <div class="absol-color-picker">
        <div class="absol-color-picker-color" >
            <div class="absol-color-picker-sat">
                <div class="absol-color-picker-val">
                    <div class="absol-color-dragger"></div>
                </div>
            </div>
        </div>
        <div class="absol-color-picker-hue-range">
            <div class="absol-color-picker-hue">
                <div class="absol-color-dragger"></div>
            </div>
        </div>
        <div class="absol-color-picker-alpha-range">
            <div class="absol-color-picker-alpha">
                <div class="absol-color-dragger"></div>
            </div>
        </div>
        <div class="absol-color-picker-input">
            <input class="absol-color-picker-text-container" readonly value="hsv(0, 0, 0)"></input>
        </div>
        <button class="absol-color-picker-mode">HSB</button>
    </div>`
    );

    res.switchMode = {
        RGBA: 'HSBA',
        HSBA: 'HSLA',
        HSLA: 'RGBA',

        RGB: 'HSB',
        HSB: 'HSL',
        HSL: 'RGB'
    };

    res.toggleAlpha = {
        RGBA: 'RGB',
        HSBA: 'HSB',
        HSLA: 'HSL',

        RGB: 'RGBA',
        HSB: 'HSBA',
        HSL: 'HSLA'
    };

    res.defineEvent(['change']);
    res._saturation = 0;
    res._brightness = 0;
    res._hue = 0;
    res._alpha = 1;
    res.$color = $('.absol-color-picker-color', res);
    res.$colorVal = $('.absol-color-picker-val', res);
    res.$draggerVal = $('.absol-color-dragger', res.$colorVal);
    res.eventHandler = absol.OOP.bindFunctions(res, absol.ShareCreator.colorpicker.eventHandler);
    res.$colorVal.on('pointerdown', res.eventHandler.colorPointerDown, true);
    res.$hue = $('.absol-color-picker-hue', res);
    res.$draggerHue = $('.absol-color-dragger', res.$hue);
    res.$hue.on('pointerdown', res.eventHandler.huePointerDown);
    res.$alpha = $('.absol-color-picker-alpha', res);
    res.$alpha.on('pointerdown', res.eventHandler.alphaPointerDown);
    res.$draggerAlpha = $('.absol-color-dragger', res.$alpha);

    res.$textContainer = $('.absol-color-picker-text-container', res);

    res.$mode = $('.absol-color-picker-mode', res);
    res.$mode.on('click', res.eventHandler.modeClick);
    //todo
    return res;
}

absol.ShareCreator.colorpicker.property = {};
absol.ShareCreator.colorpicker.property.withAlpha = {
    set: function (value) {
        if (value) {
            this.addClass('with-alpha');
        }
        else {
            this.removeClass('with-alpha');
        }
    },
    get: function () {
        return this.containClass('with-alpha');
    }
};

absol.ShareCreator.colorpicker.property.saturation = {
    set: function (value) {
        value = value || 0;
        value = Math.max(0, Math.min(1, value));
        this._saturation = value;
        this.$draggerVal.addStyle('left', value * 100 + '%');
        this._update();

    },
    get: function () {
        return this._saturation;
    }
};

absol.ShareCreator.colorpicker.property.brightness = {
    set: function (value) {
        value = value || 0;
        value = Math.max(0, Math.min(1, value));
        this._brightness = value;
        this.$draggerVal.addStyle('bottom', value * 100 + '%');
        this._update();

    },
    get: function () {
        return this._brightness;
    }
};

absol.ShareCreator.colorpicker.property.mode = {
    set: function (value) {
        value = (value + '').toUpperCase();
        if (/^(HSB|HSL|RGB|RGBA|HSBA|HSLA)$/) {
            this.$mode.innerHTML = value;
            this._update();
        }
    },
    get: function () {
        return this.$mode.innerHTML;
    }
};

absol.ShareCreator.colorpicker.property.hue = {
    set: function (value) {
        value = value || 0;
        value = Math.max(0, Math.min(1, value));
        this._hue = value;
        this.$draggerHue.addStyle('top', value * 100 + '%');
        this._update();
    },
    get: function () {
        return this._hue;
    }
};

absol.ShareCreator.colorpicker.property.alpha = {
    set: function (value) {
        value = value || 0;
        value = Math.max(0, Math.min(1, value));
        this._alpha = value;
        this.$draggerAlpha.addStyle('top', (1 - value) * 100 + '%');
        this._update();
    },
    get: function () {
        return this._alpha;
    }
};


absol.ShareCreator.colorpicker.property.RGBA = {
    set:function(value){
        var hsba = absol.color.rgbaToHSBA(value||[0, 0, 0, 0]);
        this.hue = hsba[0];
        this.saturation = hsba[1];
        this.brightness = hsba[2];
        this.alpha = hsba[3];
    },
    get: function(){
        var rgba = absol.color.hsbaToRGBA([this.hue, this.saturation, this.brightness, this.alpha]);
        return rgba;
         
    },
}



absol.ShareCreator.colorpicker.prototype._getSVOfEvent = function (event) {
    var valBound = this.$colorVal.getBoundingClientRect();
    var dx = event.clientX - valBound.left;
    var dy = event.clientY - valBound.top;
    var s = Math.max(0, Math.min(1, dx / valBound.width));
    var b = Math.max(0, Math.min(1, 1 - dy / valBound.height));
    return { s, b };
};


absol.ShareCreator.colorpicker.prototype._getHOfEvent = function (event) {
    var hueBound = this.$hue.getBoundingClientRect();
    var h = event.clientY - hueBound.top;
    h = h / hueBound.height;
    h = Math.max(0, Math.min(1, h));
    return h;
};

absol.ShareCreator.colorpicker.prototype._getAOfEvent = function (event) {
    var alphaBound = this.$alpha.getBoundingClientRect();
    var a = alphaBound.bottom - event.clientY;
    a = a / alphaBound.height;
    a = Math.max(0, Math.min(1, a));
    return a;
};

absol.ShareCreator.colorpicker.prototype._getTextColorCode = function () {
    var h = this.hue + 0.5;
    if (h > 1) h -= 1;
    var s = this.saturation > 0.5 ? 0 : 1;
    var b = this.brightness > 0.5 ? 0 : 1;
    var rgba = absol.color.hsbaToRGBA([h, s, b, 1]);
    return 'rgba(' + rgba.map((x, i) => i < 3 ? x * 255 : x).join(',') + ')';

};

absol.ShareCreator.colorpicker.prototype.init = function(props){
    this.RGBA = [1,1, 1, 1];
    this.super(props);
};

absol.ShareCreator.colorpicker.prototype._update = function () {
    //update vs
    var rgba = absol.color.hsbaToRGBA([this.hue, 1, 1, 1]);
    // this.$color.addStyle('background-color', 'rgba(' + rgba.map((x, i) => i < 3 ? x * 255 : x).join(',') + ')');
    this.$color.addStyle('background', 'rgba(' + rgba.map((x, i) => i < 3 ? x * 255 : x).join(',') + ')');
    rgba = absol.color.hsbaToRGBA([this.hue, this.saturation, this.brightness, this.alpha]);
    // this.$textContainer.addStyle('background-color', 'rgba(' + rgba.map((x, i) => i < 3 ? x * 255 : x).join(',') + ')');
    this.$textContainer.addStyle('background', 'rgba(' + rgba.map((x, i) => i < 3 ? x * 255 : x).join(',') + ')');
    this.$textContainer.addStyle('color', this._getTextColorCode());
    var hsba = [this.hue, this.saturation, this.brightness, this.alpha];
    var mode = this.mode;
    if (mode.match(/HSB/)) {
        this.$textContainer.value = absol.color[mode.toLocaleLowerCase() + 'ToText'](hsba);
    }
    else {
        var tempMode = mode.indexOf('A') < 0 ? mode + 'A' : mode;
        console.log(tempMode);
        var tempColor = absol.color['hsbaTo' + tempMode](hsba);
        this.$textContainer.value = absol.color[mode.toLocaleLowerCase() + 'ToText'](tempColor);
    }
};


absol.ShareCreator.colorpicker.eventHandler = {};

absol.ShareCreator.colorpicker.eventHandler.colorPointerDown = function (event) {
    var newSV = this._getSVOfEvent(event);
    this.saturation = newSV.s;
    this.brightness = newSV.b;

    absol.$(document.body)
        .on('pointermove', this.eventHandler.colorPointerMove)
        .on('pointerup', this.eventHandler.colorPointerFinish)
        .on('pointerleave', this.eventHandler.colorPointerFinish);
    this.emit('change');
    
};

absol.ShareCreator.colorpicker.eventHandler.colorPointerFinish = function (event) {
    absol.$(document.body)
        .off('pointermove', this.eventHandler.colorPointerMove)
        .off('pointerup', this.eventHandler.colorPointerFinish)
        .off('pointerleave', this.eventHandler.colorPointerFinish);
};

absol.ShareCreator.colorpicker.eventHandler.colorPointerMove = function (event) {
    var newSV = this._getSVOfEvent(event);
    this.saturation = newSV.s;
    this.brightness = newSV.b;
    event.preventDefault();
    this.emit('change');

};



absol.ShareCreator.colorpicker.eventHandler.huePointerDown = function (event) {
    var newH = this._getHOfEvent(event);
    this.hue = newH;
    event.preventDefault();
    absol.$(document.body)
        .on('pointermove', this.eventHandler.huePointerMove)
        .on('pointerup', this.eventHandler.huePointerFinish)
        .on('pointerleave', this.eventHandler.huePointerFinish);
    this.emit('change');    
};

absol.ShareCreator.colorpicker.eventHandler.huePointerFinish = function (event) {
    absol.$(document.body)
        .off('pointermove', this.eventHandler.huePointerMove)
        .off('pointerup', this.eventHandler.huePointerFinish)
        .off('pointerleave', this.eventHandler.huePointerFinish);
    event.preventDefault();

};

absol.ShareCreator.colorpicker.eventHandler.huePointerMove = function (event) {
    var newH = this._getHOfEvent(event);
    this.hue = newH;
    event.preventDefault();
    this.emit('change');
};



absol.ShareCreator.colorpicker.eventHandler.alphaPointerDown = function (event) {
    var newA = this._getAOfEvent(event);
    this.alpha = newA;


    absol.$(document.body)
        .on('pointermove', this.eventHandler.alphaPointerMove)
        .on('pointerup', this.eventHandler.alphaPointerFinish)
        .on('pointerleave', this.eventHandler.alphaPointerFinish);
    event.preventDefault();    
    this.emit('change');
};

absol.ShareCreator.colorpicker.eventHandler.alphaPointerFinish = function (event) {
    absol.$(document.body)
        .off('pointermove', this.eventHandler.alphaPointerMove)
        .off('pointerup', this.eventHandler.alphaPointerFinish)
        .off('pointerleave', this.eventHandler.alphaPointerFinish);
    event.preventDefault();
    
};

absol.ShareCreator.colorpicker.eventHandler.alphaPointerMove = function (event) {
    var newA = this._getAOfEvent(event);
    this.alpha = newA;
    event.preventDefault();
    this.emit('change');

};

absol.ShareCreator.colorpicker.eventHandler.modeClick = function (event) {
    this.mode = this.switchMode[this.mode];
    event.preventDefault();
};  