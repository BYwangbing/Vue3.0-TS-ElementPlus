export const tableData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
];

export const ColumnList = [
  {
    prop: 'name',
    label: 'Name',
    align: 'center'
  },
  {
    prop: 'provider',
    label: 'provider',
    width: '102px',
    align: 'center'
  },
  {
    prop: 'bizType',
    label: '业务线',
    align: 'center',
    customRender: true
  },
  {
    prop: 'articleType',
    label: '内容类型',
    align: 'center',
    customRender: true
  },

  {
    prop: 'cpStatsType',
    label: '收益细类',
    customRender: true
  },
  {
    prop: 'streamBiz',
    label: '流量渠道',
    align: 'center',
    customRender: true
  },
  {
    prop: 'adName',
    label: '广告位',
    align: 'center',
    width: '136px',
    customRender: true
  },
  {
    prop: 'divide',
    label: '分成比例',
    align: 'center',
    width: '84px'
  },
  {
    prop: 'mediaAccountIds',
    label: '账号ID',
    align: 'center',
    width: '184px',
    customRender: true
  },

  {
    prop: 'operator',
    label: '操作人',
    align: 'center'
  },
  {
    prop: 'operation',
    label: '操作',
    align: 'center',
    fixed: 'right',
    width: '180px',
    customRender: true
  }
];
export const paginationConfig = {
  'hide-on-single-page': true,
  layout: 'total, prev, pager, next'
};
