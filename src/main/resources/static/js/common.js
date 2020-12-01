$(document).ready(function () {

});

//时间戳转日期
function add0(m) {
    return m < 10 ? '0' + m : m
}

function numFormatDateStr(timestamp) {
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    let time = new Date(timestamp);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours() - 8;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);
}

function dateFormat(date) {
    let values = {
        y: date.getFullYear(),
        M: date.getMonth(),
        d: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        S: date.getMilliseconds()
    }

    return values;
}

function dateFormatNum(date) {
    let values = dateFormat(date);
    let valueNum = "";
    valueNum += values.y + "";
    valueNum += values.m + "";
    valueNum += values.d + "";
    valueNum += values.H + "";
    valueNum += values.m + "";
    valueNum += values.s + "";
    return valueNum;
}

function dateFormatStr(now, mask) {
    let d = now;
    let zeroize = function (value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
        switch ($0) {
            case 'd':
                return d.getDate();
            case 'dd':
                return zeroize(d.getDate());
            case 'ddd':
                return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
            case 'dddd':
                return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
            case 'M':
                return d.getMonth() + 1;
            case 'MM':
                return zeroize(d.getMonth() + 1);
            case 'MMM':
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
            case 'MMMM':
                return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
            case 'yy':
                return String(d.getFullYear()).substr(2);
            case 'yyyy':
                return d.getFullYear();
            case 'h':
                return d.getHours() % 12 || 12;
            case 'hh':
                return zeroize(d.getHours() % 12 || 12);
            case 'H':
                return d.getHours();
            case 'HH':
                return zeroize(d.getHours());
            case 'm':
                return d.getMinutes();
            case 'mm':
                return zeroize(d.getMinutes());
            case 's':
                return d.getSeconds();
            case 'ss':
                return zeroize(d.getSeconds());
            case 'l':
                return zeroize(d.getMilliseconds(), 3);
            case 'L':
                var m = d.getMilliseconds();
                if (m > 99) m = Math.round(m / 10);
                return zeroize(m);
            case 'tt':
                return d.getHours() < 12 ? 'am' : 'pm';
            case 'TT':
                return d.getHours() < 12 ? 'AM' : 'PM';
            case 'Z':
                return d.toUTCString().match(/[A-Z]+$/);
            // Return quoted strings with the surrounding quotes removed
            default:
                return $0.substr(1, $0.length - 2);
        }
    });
};

//字符串转时间
function strFormatDate(str){
    let date = eval('new Date(' + str.replace(/\d+(?=-[^-]+$)/,
        function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
    return date;
};
//设置modal按钮名称
function  setModalButtonName(data) {
    $("#modifyUser").text(data);
}