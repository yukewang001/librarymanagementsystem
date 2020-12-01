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
        visible: true,
        formatter: function (value, item, index) {
            return item.id;
        }
    }, {
        field: 'book_name',
        title: '书名',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_num',
        title: '编号',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_createtime',
        title: '上架时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return numFormatDateStr(value);
        }
    }, {
        field: 'book_deletetime',
        title: '下架时间',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {

            if (value!=undefined)
            {
                return numFormatDateStr(value);
            }
            else
            {
                return "未下架"
            }
        }
    }, {
        field: 'book_from',
        title: '出版社',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_address',
        title: '货架位置',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_price',
        title: '单价',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_amount',
        title: '数量',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    }, {
        field: 'book_typeid',
        title: '类型id',
        align: 'center',
        visible: false,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'book_type',
        title: '类型',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'book_borrowamount',
        title: '借阅数',
        align: 'center',
        visible: true,
        formatter: function (value, item, index) {
            return value;
        }
    },{
        field: 'book_text',
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
        url: "/book/selectByBooks",
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