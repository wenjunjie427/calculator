// pages/time/time.js
Page({
  data: {
    value: '',
    array: ['秒', '分', '小时', '年'],
    index: 0,
  },
 
  bindchange(e) {
    console.log('原单位选择为',e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  oninput(e) {
    this.setData({
      value: e.detail.value
    })
  }
})
