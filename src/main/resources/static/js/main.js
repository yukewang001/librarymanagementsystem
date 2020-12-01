$(document).ready(function () {
    //页面加载初始化
    init();
    let constusername;
    let constusertype;
})

function init() {

    //显示当前时间
    setInterval(function () {
        let now = (new Date()).toLocaleString();
        $('#dateTimeInfo').text(now);
    }, 1000);
    //显示当日天气
    findWeatherFunction();
    //获取session
    getSessionFunction();
    loadContentFunction("mainContent");
    $("#mainContent").click(function () {
        loadContentFunction("mainContent");
    });
    $("#settings").click(function () {
        loadContentFunction("settings");
    });
    $("#userSetting").click(function () {
        loadContentFunction("userSetting");
    });
    $("#bookSetting").click(function () {
        loadContentFunction("bookSetting");
    });
    $("#bookBorrow").click(function () {
        loadContentFunction("bookBorrow");
    });
    $("#systemSearch").click(function () {
        loadContentFunction("systemSearch");
    });
    $("#updateKey").click(function () {
        loadContentFunction("updateKey");
    });
    $("#exitSystem").click(function () {
        loadContentFunction("exitSystem");
    });

}

function getSessionFunction() {
    $.ajax(
        {
            type: "post",
            url: "/getSession",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            async: true,
            dataType: "json",
            success: function (data) {
                if ("fail" != data) {
                    $("#usernameSession").text(data.username);
                    $("#usertypeSession").text(data.usertype);
                    constusername = data.username;
                    constusertype = data.usertype;
                } else {
                    window.location.href = "/";
                }

            },
            error: function (data) {

            }
        }
    )
};

function findWeatherFunction() {
    $.get("http://wthrcdn.etouch.cn/weather_mini?city=天津", function (data) {

        $("#weatherInfo").text(data.data.city + "-" + data.data.forecast[0].high + "-" + data.data.forecast[0].low + "-" + data.data.forecast[0].type);
    }, "json");
};

function loadContentFunction(content) {
    if (content == "exitSystem") {
        window.location.href = "/";
        return false;
    }
    let navArray = new Array("mainContent", "settings", "userSetting", "bookSetting", "bookBorrow", "systemSearch", "updateKey")

    for (let i = 0; i < navArray.length; i++) {
        //当前菜单
        if (navArray[i] == content) {
            //不可选，添加class
            $("#" + content).addClass("font-link").attr("disabled", "disabled");
            let url = "/" + content;
            $("#center-content").load(url);
        } else {
            $("#" + navArray[i]).removeClass("font-link").removeAttr("disabled");
        }
    }

}


