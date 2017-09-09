const AV = require('../../utils/av-weapp-min.js');
const Todo = require('../../model/todo')
var todos = null
var App = getApp()
var loc = {
  1: [30.759680, 103.986420, '天佑斋1栋'],
  2: [30.758840, 103.985170, '天佑斋2栋'],
  3: [30.760510, 103.985730, '天佑斋3栋'],
  4: [30.760250, 103.985110, '天佑斋4栋'],
  5: [30.761530, 103.984950, '天佑斋5栋'],
  6: [30.761110, 103.984690, '天佑斋6栋'],
  7: [30.760680, 103.984040, '天佑斋7栋'],
  8: [30.761040, 103.983740, '天佑斋8栋'],
  9: [30.761560, 103.984350, '天佑斋9栋'],
  10: [30.762400, 103.983910, '天佑斋10栋'],
  11: [30.762010, 103.984080, '天佑斋11栋'],
  12: [30.761700, 103.983220, '天佑斋12栋'],
  13: [30.761810, 103.982870, '天佑斋13栋'],
  14: [30.762510, 103.983730, '天佑斋14栋'],
  15: [30.766500, 103.980690, '天佑斋15栋'],
  16: [30.766040, 103.979820, '天佑斋16栋'],
  17: [30.767559, 103.980086, '天佑斋17栋'],
  18: [30.766910, 103.979310, '天佑斋18栋'],
  19: [30.768530, 103.979310, '天佑斋19栋'],
  20: [30.767610, 103.978690, '天佑斋20栋'],
  21: [30.769010, 103.979080, '天佑斋21栋'],
  22: [30.768370, 103.978100, '天佑斋22栋'],
  23: [30.761940, 103.985740, '鸿哲斋4栋'],
  24: [30.762420, 103.985620, '鸿哲斋5栋'],
  25: [30.762880, 103.985360, '鸿哲斋6栋'],
  26: [30.763153, 103.984786, '鸿哲斋7栋'],
  27: [30.768160, 103.980870, '鸿哲斋8栋'],
  28: [30.768540, 103.980380, '鸿哲斋9栋'],
  29: [30.768550, 103.979389, '鸿哲斋10栋'],
  30: [30.768550, 103.979389, '鸿哲斋11栋'],
  101: [30.767252, 103.977023, '西一门'],
  102: [30.761472, 103.981496, '西二门'],
  103: [30.760300, 103.992243, '南门'],
  104: [30.769214, 103.993514, '东门'],
  1001: [30.762428, 103.988690, '1号教学楼'],
  1002: [30.763267, 103.987155, '2号教学楼'],
  1004: [30.766081, 103.988312, '4号教学楼'],
  1005: [30.764514, 103.988974, '5号教学楼'],
  1006: [30.763358, 103.989870, '6号教学楼'],
  1007: [30.762427, 103.990717, '7号教学楼'],
  1008: [30.767722, 103.983318, '8号教学楼'],
  1009: [30.767620, 103.985780, '9号教学楼'],
  2001: [30.759235, 103.984616, '一食堂'],
  2002: [30.760263, 103.983924, '二食堂'],
  2003: [30.761206, 103.983069, '三食堂'],
  2004: [30.766262, 103.979257, '四食堂'],
  3001: [30.760637, 103.983006, '圆通速递'],
  3002: [30.7596800000, 103.9842400000, '顺丰速递'],
  3003: [30.7604699847, 103.9834499359, '中通快递'],
  3004: [30.766863, 103.978300, '韵达快递'],
  3005: [30.767209, 103.978493, '百世汇通'],
  3006: [30.758787, 103.984936, 'EMS'],
  3007: [30.767130, 103.978610, '京东自提点'],
  3008: [30.767536, 103.978204, '申通快递'], 
  3009: [30.760488, 103.983219, '天天快递'],
  4001: [30.760417, 103.983183, '建设银行'],
  4002: [30.760537, 103.983410, '工商银行'],
  4003: [30.760662, 103.979815, '农业银行'],
  5001: [30.768486, 103.983006, '校医院'],
  5002: [30.766140, 103.985740, '图书馆'],
  5003: [30.762074, 103.986958, '虹桥'],
  5004: [30.761115, 103.987672, '蓝桥'],
  5005: [30.763254, 103.986288, '叉桥（分手桥）'],
  5006: [30.764503, 103.982871, '飞碟体育馆'],
  5007: [30.761562, 103.991647, '机车博物馆'],
  5008: [30.767980, 103.987470,'综合楼'],
  5009: [30.768735, 103.982248,  '浙园']
}
var markID = null
Page({
  data: {
    // todos: [],
    // markID: 0,
    showModalStatus: false,
    navbarArray: [{
      text: '出入门',
      markers: [{
        iconPath: "../../images/door.png",
        id: 103, //西二门
        latitude: 30.760300,
        longitude: 103.992243,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/door.png",
        id: 104,//东门
        latitude: 30.769214,
        longitude: 103.993514,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/door.png",
        id: 102,  //南门
        latitude: 30.761472,
        longitude: 103.981496,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/door.png",
        id: 101,  //西一门
        latitude: 30.767252,
        longitude: 103.977023,
        width: 110,
        height: 100
      }],
      type: 'navbar-item-active'
    }, {
      text: '教学楼',
      markers: [{
        iconPath: "../../images/1教.png",
        id: 1001,
        latitude: 30.762428,
        longitude: 103.988690,
        width: 110,
        height: 100,
      }, {
        iconPath: "../../images/2教.png",
        id: 1002,
        latitude: 30.763267,
        longitude: 103.987155,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/4教.png",
        id: 1004,
        latitude: 30.766081,
        longitude: 103.988312,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/5教.png",
        id: 1005,
        latitude: 30.764514,
        longitude: 103.988974,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/6教.png",
        id: 1006,
        latitude: 30.763358,
        longitude: 103.989870,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/7教.png",
        id: 1007,
        latitude: 30.762427,
        longitude: 103.990717,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/8教.png",
        id: 1008,
        latitude: 30.767722,
        longitude: 103.983318,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/9教.png",
        id: 1009,
        latitude: 30.767620,
        longitude: 103.985780,
        width: 110,
        height: 100
      }],
      type: ''
    }, {
      text: '食堂',
      markers: [{
        iconPath: "../../images/rest.png",
        id: 2004,
        latitude: 30.766262,
        longitude: 103.979257,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/rest.png",
        id: 2003,
        latitude: 30.761206,
        longitude: 103.983069,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/rest.png",
        id: 2002,
        latitude: 30.760263,
        longitude: 103.983924,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/rest.png",
        id: 2001,
        latitude: 30.759235,
        longitude: 103.984616,
        width: 110,
        height: 100
      }
      ],
      type: ''
    }, {
      text: '快递',
      markers: [{
        // 圆通
        iconPath: "../../images/yt.png",
        id: 3001,
        latitude: 30.760637,
        longitude: 103.983006,
        width: 110,
        height: 100
      }, {
        // 顺丰
        iconPath: "../../images/sf.png",
        id: 3002,
        latitude: 30.7596800000,
        longitude: 103.9842400000,
        width: 110,
        height: 100
      }, {
        // 中通
        iconPath: "../../images/zt.png",
        id: 3003,
        latitude: 30.7604699847,
        longitude: 103.9834499359,
        width: 110,
        height: 100
      }, {
        // 韵达
        iconPath: "../../images/yd.png",
        id: 3004,
        latitude: 30.766863,
        longitude: 103.978300,
        width: 110,
        height: 100
      }, {
        // 百世
        iconPath: "../../images/bs.png",
        id: 3005,
        latitude: 30.767209,
        longitude: 103.978493,
        width: 110,
        height: 100
      }, {
        // ems30.758787,103.984936
        iconPath: "../../images/ems.png",
        id: 3006,
        latitude: 30.758787,
        longitude: 103.984936,
        width: 110,
        height: 100
      }, {
        // 京东
        iconPath: "../../images/jd.png",
        id: 3007,
        latitude: 30.767130,
        longitude: 103.978610,
        width: 110,
        height: 100
      }, {
        // sto
        iconPath: "../../images/st.png",
        id: 3008, 
        latitude: 30.767536,
        longitude: 103.978204,
        width: 110,
        height: 100
      }, {
        // 天天
        iconPath: "../../images/tt.png",
        id: 3009,
        latitude: 30.760488,
        longitude: 103.983219,
        width: 110,
        height: 100
      },],
      type: ''
    }, {
      text: '银行',
      markers: [{
        iconPath: "../../images/jbank.png",
        id: 4001,
        latitude: 30.760417,
        longitude: 103.983183,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/gbank.png",
        id: 4002,
        latitude: 30.760537,
        longitude: 103.983410,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/nbank.png",
        id: 4003,
        latitude: 30.760662,
        longitude: 103.979815,
        width: 110,
        height: 100
      }],
      type: ''
    }, {
      text: '其他',
      markers: [{
        iconPath: "../../images/hos.png",
        id: 5001,
        latitude: 30.768486,
        longitude: 103.977464,
        width: 35,
        height: 35
      }, {
        iconPath: "../../images/tsg.png",//图书馆
        id: 5002,
        latitude: 30.766140,
        longitude: 103.985740,
        width: 110,
        height: 100
      }
        , {
        iconPath: "../../images/q.png",//虹桥
        id: 5003,
        latitude: 30.762074,
        longitude: 103.986958,
        width: 110,
        height: 100
      },
      {
        iconPath: "../../images/q.png",//蓝桥
        id: 5004,
        latitude: 30.761115,
        longitude: 103.987672,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/q.png",//X桥
        id: 5005,
        latitude: 30.763254,
        longitude: 103.986288,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/tyg.png",//体育馆
        id: 5006,
        latitude: 30.764503,
        longitude: 103.982871,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/view.png",//机车博物馆
        id: 5007,
        latitude: 30.761562,
        longitude: 103.991647,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/tsg.png",//综合楼
        id: 5008,
        latitude: 30.767980,
        longitude: 103.987470,
        width: 110,
        height: 100
      } ,
      {
        iconPath: "../../images/view.png",//浙园
        id: 5009,
        latitude: 30.768735,
        longitude: 103.982248,
        width: 110,
        height: 100
      } 
      ],
      type: ''
    }, {
      text: '宿舍楼',
      markers: [{
        iconPath: "../../images/1.png",
        id: 1,
        latitude: 30.759680,
        longitude: 103.986420,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/2.png",
        id: 2,
        latitude: 30.758840,
        longitude: 103.985170,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/3.png",
        id: 3,
        latitude: 30.760510,
        longitude: 103.985730,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/4.png",
        id: 4,
        latitude: 30.760250,
        longitude: 103.985110,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/5.png",
        id: 5,
        latitude: 30.761530,
        longitude: 103.984950,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/6.png",
        id: 6,
        latitude: 30.761110,
        longitude: 103.984690,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/7.png",
        id: 7,
        latitude: 30.760680,
        longitude: 103.984040,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/8.png",
        id: 8,
        latitude: 30.761040,
        longitude: 103.983740,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/9.png",
        id: 9,
        latitude: 30.761560,
        longitude: 103.984350,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/10.png",
        id: 10,
        latitude: 30.762400,
        longitude: 103.983910,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/11.png",
        id: 11,
        latitude: 30.762010,
        longitude: 103.984080,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/12.png",
        id: 12,
        latitude: 30.761700,
        longitude: 103.983220,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/13.png",
        id: 13,
        latitude: 30.761810,
        longitude: 103.982870,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/14.png",
        id: 14,
        latitude: 30.762510,
        longitude: 103.983730,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/15.png",
        id: 15,
        latitude: 30.766500,
        longitude: 103.980690,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/16.png",
        id: 16,
        latitude: 30.766040,
        longitude: 103.979820,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/17.png",
        id: 17,
        latitude: 30.767559,
        longitude: 103.980086,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/18.png",
        id: 18,
        latitude: 30.766910,
        longitude: 103.979310,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/19.png",
        id: 19,
        latitude: 30.768530,
        longitude: 103.979310,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/20.png",
        id: 20,
        latitude: 30.767610,
        longitude: 103.978690,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/21.png",
        id: 21,
        latitude: 30.769010,
        longitude: 103.979080,
        width: 110,
        height: 100
      }, {
        iconPath: "../../images/22.png",
        id: 22,
        latitude: 30.768370,
        longitude: 103.978100,
        width: 110,
        height: 100
      },],
      type: ''
    },{
      text: ' ',}
      ],
    navbarShowIndexArray: Array.from(Array(7).keys()),
    navbarHideIndexArray: [],
    windowWidth: 375,
    scrollNavbarLeft: 0,
    currentChannelIndex: 0,
    startTouchs: {
      x: 0,
      y: 0
    },
    channelSettingShow: '',
    channelSettingModalShow: '',
    channelSettingModalHide: true,
    articlesHide: false,
    articleContent: '',
    loadingModalHide: false,
    temporaryArray: Array.from(new Array(1), (val, index) => index + 1)
  },

  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
      this.mapCtx = wx.createMapContext('myMap')

  },
  onLoad: function () {
    let that = this;
    this.mapCtx = wx.createMapContext('myMap')

    let navbarShowIndexArrayData = wx.getStorageSync('navbarShowIndexArray');
    if (navbarShowIndexArrayData) {
      this.setData({
        navbarShowIndexArray: navbarShowIndexArrayData
      });
    } else {
      this.storeNavbarShowIndexArray();
    }

    this.getArticles(0);

    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowWidth: res.windowWidth
        });
      }
    });
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 1000,
    });
    let navbarArray = this.data.navbarArray;
    let navbarShowIndexArray = this.data.navbarShowIndexArray;
    let navbarHideIndexArray = [];
    navbarArray.forEach((item, index, array) => {
      if (-1 === navbarShowIndexArray.indexOf(index)) {
        navbarHideIndexArray.push(index);
      }
    });
    this.setData({
      navbarHideIndexArray: navbarHideIndexArray
    });
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  onTapNavbar: function (e) {
    this.switchChannel(parseInt(e.currentTarget.id));
  },
  switchChannel: function (targetChannelIndex) {
    this.getArticles(targetChannelIndex);

    let navbarArray = this.data.navbarArray;
    navbarArray.forEach((item, index, array) => {
      item.type = '';
      if (index === targetChannelIndex) {
        item.type = 'navbar-item-active';
      }
    });
    this.setData({
      navbarArray: navbarArray,
      currentChannelIndex: targetChannelIndex
    });
  },
  getArticles: function (index) {
    this.setData({
      loadingModalHide: false,
      articleContent: ''
    });
    setTimeout(() => {
      this.setData({
        loadingModalHide: true,
        articleContent: this.data.navbarArray[index].markers, //返回当前页面topbar信息
        cindex: index
      });
    }, 500);
  },
  onTouchstartArticles: function (e) {
    this.setData({
      'startTouchs.x': e.changedTouches[0].clientX,
      'startTouchs.y': e.changedTouches[0].clientY
    });
  },
  onTouchendArticles: function (e) {
    let deltaX = e.changedTouches[0].clientX - this.data.startTouchs.x;
    let deltaY = e.changedTouches[0].clientY - this.data.startTouchs.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      let deltaNavbarIndex = deltaX > 0 ? -1 : 1;
      let currentChannelIndex = this.data.currentChannelIndex;
      let navbarShowIndexArray = this.data.navbarShowIndexArray;
      let targetChannelIndexOfNavbarShowIndexArray = navbarShowIndexArray.indexOf(currentChannelIndex) + deltaNavbarIndex;
      let navbarShowIndexArrayLength = navbarShowIndexArray.length;
      if (targetChannelIndexOfNavbarShowIndexArray >= 0 && targetChannelIndexOfNavbarShowIndexArray <= navbarShowIndexArrayLength - 1) {
        let targetChannelIndex = navbarShowIndexArray[targetChannelIndexOfNavbarShowIndexArray];
        if (navbarShowIndexArrayLength > 6) {
          let scrollNavbarLeft;
          if (targetChannelIndexOfNavbarShowIndexArray < 5) {
            scrollNavbarLeft = 0;
          } else if (targetChannelIndexOfNavbarShowIndexArray === navbarShowIndexArrayLength - 1) {
            scrollNavbarLeft = this.rpx2px(110 * (navbarShowIndexArrayLength - 6));
          } else {
            scrollNavbarLeft = this.rpx2px(110 * (targetChannelIndexOfNavbarShowIndexArray - 4));
          }
          this.setData({
            scrollNavbarLeft: scrollNavbarLeft
          });
        }
        this.switchChannel(targetChannelIndex);
      }
    }
  },
  rpx2px: function (rpx) {
    return this.data.windowWidth * rpx / 750;
  },
  showChannelSettingModal: function () {
    this.setData({
      channelSettingShow: 'channel-setting-show',
      articlesHide: true,
      channelSettingModalHide: false
    });
    setTimeout(() => {
      this.setData({
        channelSettingModalShow: 'channel-setting-modal-show'
      });
    }, 50);
  },
  hideChannelSettingModal: function () {
    this.resetNavbar();

    this.setData({
      channelSettingShow: '',
      channelSettingModalShow: ''
    });
    setTimeout(() => {
      this.setData({
        channelSettingModalHide: true,
        articlesHide: false
      });
      this.getArticles(0);
    }, 500);
  },
  hideChannel: function (e) {
    let navbarShowIndexArray = this.data.navbarShowIndexArray;
    let navbarHideIndexArray = this.data.navbarHideIndexArray;
    navbarHideIndexArray.push(navbarShowIndexArray.splice(navbarShowIndexArray.indexOf(parseInt(e.currentTarget.id)), 1)[0]);
    this.setData({
      navbarShowIndexArray: navbarShowIndexArray,
      navbarHideIndexArray: navbarHideIndexArray
    });
    this.storeNavbarShowIndexArray();
  },
  upChannel: function (e) {
    let navbarShowIndexArray = this.data.navbarShowIndexArray;
    let index = navbarShowIndexArray.indexOf(parseInt(e.currentTarget.id));
    let temp = navbarShowIndexArray[index];
    navbarShowIndexArray[index] = navbarShowIndexArray[index - 1];
    navbarShowIndexArray[index - 1] = temp;
    this.setData({
      navbarShowIndexArray: navbarShowIndexArray
    });
    this.storeNavbarShowIndexArray();
  },
  showChannel: function (e) {
    let navbarShowIndexArray = this.data.navbarShowIndexArray;
    let navbarHideIndexArray = this.data.navbarHideIndexArray;
    navbarShowIndexArray.push(navbarHideIndexArray.splice(navbarHideIndexArray.indexOf(parseInt(e.currentTarget.id)), 1)[0]);
    this.setData({
      navbarShowIndexArray: navbarShowIndexArray,
      navbarHideIndexArray: navbarHideIndexArray
    });
    this.storeNavbarShowIndexArray();
  },
  storeNavbarShowIndexArray: function () {
    wx.setStorage({
      key: 'navbarShowIndexArray',
      data: this.data.navbarShowIndexArray
    });
  },
  resetNavbar: function () {
    let navbarArray = this.data.navbarArray;
    navbarArray.forEach((item, index, array) => {
      item.type = '';
      if (0 === index) {
        item.type = 'navbar-item-active';
      }
    });
    this.setData({
      navbarArray: navbarArray,
      scrollNavbarLeft: 0
    });
  },
  onShareAppMessage: function () {
    return {
      title: '有思·交大导览',
      desc: '思思带你逛交大！!',
      path: '/pages/index/index'
    }
  },

  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  getloc: function (x) {
    if (x == 1001)
      return [30.762428, 103.988690];
  },

  powerDrawer: function (e) {

    //弹出模态框
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
    markID = e.markerId
    console.log(markID)
    //初始化查询实例
    new AV.Query('Todo')
      .equalTo('id', markID)
      .find()
      .then(todos => this.setData({ todos }))
      .catch(console.error);
      
    this.setData({
      imarkID: markID,
      imarkname: loc[markID][2],
    }
    )

  },
  toloc: function () {
    wx.openLocation({
      latitude: loc[markID][0],
      longitude: loc[markID][1],
      name: loc[markID][2],
      scale: 28
    })

  },

  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 100, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后,执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画,更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 100)

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
  ,
  markertap() {
    wx.openLocation({
      latitude: loc[markID][0],
      longitude: loc[markID][1],
      name: loc[markID][2],
      scale: 28
    })
  }
});

