$(document).ready(function () {
    //页面加载初始化
    init();
    $("#toolbar").parent().removeClass("bs-bars");
    let dataOption;
});
window.operateEvents = {
    'click #updateRow': function (e, value, row, index) {
        updateRowFunction(row);
    },
    'click #deleteRow': function (e, value, row, index) {
        deleteRowFunction(row.id);
    }
};

function init() {
    setOptions();
    getTable();
    $("#addUserButton").click(function () {
        setModalButtonName("添加")
        $("#userModal").modal("show");
        //设置disable
        setUserDisableFunction();
        //设置对象的值
        setUserObjectFunction();
    });
    $("#modifyUser").click(function () {
        clearCheckUserObjectFunction();
        let userObject = getUserObjectFunction();
        let isTrue = checkUserObjectFunction(userObject);
        if (isTrue) {
            if ($("#modifyUser").text() == "添加") {
                $.ajax(
                    {
                        type: "post",
                        url: "/user/addUser",
                        contentType: "application/json;charset=UTF-8",
                        data: JSON.stringify(userObject),
                        async: true,
                        dataType: "text",
                        success: function (data) {
                            if (data == "success") {
                                $("#userModal").modal("hide");
                                //刷新modal
                                setUserObjectFunction();
                                $("#table").bootstrapTable('refresh');
                                return;
                            }
                        },
                        error: function (data) {
                            alert(data.status);
                        }
                    });
            }
            if ($("#modifyUser").text() == "更新") {
                $.ajax(
                    {
                        type: "post",
                        url: "/user/updateUser",
                        contentType: "application/json;charset=UTF-8",
                        data: JSON.stringify(userObject),
                        async: true,
                        dataType: "text",
                        success: function (data) {
                            $("#userModal").modal("hide");
                            $("#table").bootstrapTable('refresh');
                        },
                        error: function (data) {
                            alert(data.status);
                        }
                    });

            }
        }
    });
    //modal下拉列表事件
    $("#user_typeid").change(function () { // input失去焦点时通过焦点开关状态判断鼠标所在区域
        $("#user_type").val(getOptions($("#user_typeid").val()));
    })

};


function getTable() {
    //设置需要显示的列
    let columns = [{
        checkbox: true,
        //跟据返回每行的数据
        formatter: function (value, row, index) {
            return row.id;
        }
    }, {
        field: 'id',
        title: 'id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return item.id;
        }
    }, {
        field: 'user_name',
        title: '名称',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'user_password',
        title: '密码',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'user_num',
        title: '用户编号',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'user_createtime',
        title: '创建时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return numFormatDateStr(value);
        }
    }, {
        field: 'user_deletetime',
        title: '注销时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            if (value == undefined) {
                return "-";
            } else {
                return numFormatDateStr(value);
            }

        }
    }, {
        field: 'user_typeid',
        title: '用户类型id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'user_type',
        title: '用户类型',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'user_text',
        title: '备注',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },
        {
            field: 'user_detail',
            title: '操作',
            align: 'center',
            visible: true,
            events: operateEvents,
            formatter: function (value, item, index) {
                return [
                    '<button type="button" class="btn btn-info btn-sm" id="updateRow">编辑</button>',
                    '<button type="button" class="btn btn-danger btn-sm" id="deleteRow">删除</button>'
                ].join('');
            }
        }
    ];
    $("#table").bootstrapTable({
        classes: "table table-hover table-bordered table-striped table-sm",
        theadClasses: "thead-light",
        contentType: "application/x-www-form-urlencoded",
        method: 'post',
        //toolbar:'#toolbar',
        dataType: "json",
        url: "/user/selectByUsers",
        height: 500,
        striped: true,
        columns: columns,
        pagination: false,
        clickToSelect: true,
        search: false,
        silent: false,
        pageSize: 10,
        pageNumber: 1,
        sidePagination: "server",
        queryParamsType: "",
        pageList: [5, 10],
        rowStyle: function (row, index) {
            return {css: {"font-size": "15px"}}
        },
        rowAttributes: function (row, index) {
            return {
                'data-toggle': 'popover',
                'data-placement': 'bottom',
                'data-trigger': 'hover',
                'data-index': index,
                'title': [
                    '行: ' + (index + 1),
                    '列: ' + (row.id + 1)
                ].join(', ')
            }
        },
        queryParams: function (params) {
            var params = {
                user_name: constusername,
                user_type: constusertype
            }
            return params;
        }
    });
};

function updateRowFunction(row) {
    setModalButtonName("更新");
    setUserDisableFunction();
    setUserModalFunction(row);
    clearCheckUserObjectFunction();
    //打开modal，修改按钮名称
    $("#userModal").modal("show");
};

function deleteRowFunction(id) {

};

//创建对象
function getUserObjectFunction() {
    let userObject = new Object();
    userObject.id = parseInt($("#id").val());
    userObject.user_name = $("#user_name").val();
    userObject.user_password = $("#user_password").val();
    userObject.user_num = $("#user_num").val();
    userObject.user_createtime = strFormatDate($("#user_createtime").val());
    userObject.user_deletetime = strFormatDate($("#user_deletetime").val());
    userObject.user_typeid = parseInt($("#user_typeid").val());
    userObject.user_type = $("#user_type").val();
    userObject.user_text = $("#user_text").val();
    return userObject;
}

//设置对象
function setUserObjectFunction() {
    $("#id").val(1);
    // $("#user_name").val();
    // $("#user_password").val();
    $("#user_num").val(dateFormatNum(new Date()));
    $("#user_createtime").val(dateFormatStr(new Date(), "yyyy-MM-dd HH:mm:ss"));
    // $("#user_deletetime").val();
    if (constusertype == "超级管理员") {
        //获取下拉列表给user_typeid和user_type赋值
    } else {
        $("#user_typeid").val(1);
        $("#user_type").val("用户");
    }
    $("#user_text").val();
};

function setUserModalFunction(row) {
    $("#id").val(row.id);
    $("#user_name").val(row.user_name);
    $("#user_password").val(row.user_password);
    $("#user_num").val(row.user_num);
    $("#user_createtime").val(row.user_createtime);
    $("#user_deletetime").val(row.user_deletetime);
    $("#user_typeid").val(row.user_typeid);
    $("#user_type").val(row.user_type);
    $("#user_text").val(row.user_text);
};

//设置下拉列表
function setOptions() {
    $.ajax(
        {
            type: "post",
            url: "/user/getOptions",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            async: true,
            dataType: "json",
            success: function (data) {
                //清空内容

                let option = "";
                for (let i = 0; i < data.length; i++) {
                    option += "<option>" + data[i].key + "</option>"
                }
                ;
                $("#typelist").html(option);
                dataOption = data;
            },
            error: function (data) {

                alert(data.status);
            }
        });
};

//获取下拉列表值
function getOptions(key) {
    for (let i = 0; i < dataOption.length; i++) {
        if (key == dataOption[i].key.toString())
            return dataOption[i].value;
    }
}

function setUserDisableFunction() {
    if (constusertype === '管理员') {
        $("#user_typeid").attr("disabled", "disabled");

    }
    $("#id").attr("disabled", "disabled");
    // $("#user_name").attr("disabled","disabled");
    // $("#user_password").attr("disabled","disabled");
    $("#user_num").attr("disabled", "disabled");
    $("#user_type").attr("disabled", "disabled");
    $("#user_createtime").attr("disabled", "disabled");
    $("#user_deletetime").attr("disabled", "disabled");
    //$("#user_text").attr("disabled","disabled");
};

function checkUserObjectFunction(userObject) {

    let content = "不能为空";
    let isTrue = true;
    if (userObject.id == "") {

    }
    if (userObject.user_name == "") {
        $("#user_name_check").addClass("check-message").text(content);
        isTrue = false;
    }
    if (userObject.user_password == "") {
        $("#user_password_check").addClass("check-message").text(content);
        isTrue = false;
    }
    if (userObject.user_createtime == "") {
        $("#user_createtime_check").addClass("check-message").text(content);
        isTrue = false;

    }
    if (userObject.user_deletetime == "") {

    }
    if (Number.isNaN(userObject.user_typeid)) {
        $("#user_typeid_check").addClass("check-message").text(content);
        isTrue = false;
    }
    if (userObject.user_type == "") {
        $("#user_type_check").addClass("check-message").text(content);
        isTrue = false;
    }
    if (userObject.user_text == "") {

    }
    return isTrue;
};

//清空验证信息
function clearCheckUserObjectFunction() {

    $("#user_name_check").removeClass("check-message").text("");

    $("#user_password_check").removeClass("check-message").text("");

    $("#user_createtime_check").removeClass("check-message").text("");

    $("#user_typeid_check").removeClass("check-message").text("");

    $("#user_type_check").removeClass("check-message").text("");
};