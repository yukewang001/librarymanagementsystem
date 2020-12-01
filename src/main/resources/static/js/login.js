$(document).ready(function () {
    //页面加载初始化
    init();
})

function init() {
    /*
    登录,设置cookie,session
    */
    $("#loginUser").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();
        if (username =="" ||username == undefined)
        {
            $("#usernameMessage").text("用户名不能为空")
            return;
        }
        if (password =="" ||password == undefined)
        {
            $("#passwordMessage").text("密码不能为空")
            return;
        }
        loginFunction(username,password);
    })
};
//登录
function loginFunction(username,password) {
    //判断用户名是否存在
    $.ajax(
        {
            type: "post",
            url: "/loginUser",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            async: true,
            data: {
                username: username,
                password: password
            },
            dataType: "json",
            success: function (data) {
                window.location.href = "/main";
            },
            error: function (data) {
                if (data.responseText == "user_name")
                {
                    //用户名不存在
                    $("#usernameMessage").text("用户名不存在")
                    return;
                }
                if (data.responseText == "user_password")
                {
                    //密码不正确
                    $("#passwordMessage").text("密码不正确")
                    return;
                }
            }
        }
    )
}

