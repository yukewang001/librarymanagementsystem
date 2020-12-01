$(document).ready(function () {
    //页面加载初始化
    init();

});

function init() {
    getTable();
};
window.operateEvents = {
    'click #updateRow': updateRowFunction(),
    'click #deleteRow': deleteRowFunction()
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
        field: 'borrow_use_id',
        title: '用户id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_bookid',
        title: '图书id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_bookname',
        title: '图书名称',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_typeid',
        title: '图书类型id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {

            return value;
        }
    }, {
        field: 'borrow_type',
        title: '出版社',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_times',
        title: '借阅次数',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_starttime',
        title: '借阅时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'borrow_endtime',
        title: '归还时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return numFormatDateStr(value);
        }
    }, {
        field: 'borrow_moretime',
        title: '超时时间',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'borrow_price',
        title: '借阅价格',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'borow_moreprice',
        title: '超时价格',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'borrow_amountprice',
        title: '总价格',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'borrow_text',
        title: '备注',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'book_detail',
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
        contentType: "application/x-www-form-urlencoded",
        method: 'post',
        dataType: "json",
        url: "/borrow/selectByBorrows",
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

function updateRowFunction() {

};

function deleteRowFunction() {

};