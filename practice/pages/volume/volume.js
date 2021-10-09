// pages/volume/volume.js
Page({
  data: {
    value: '',
    array1: ['立方米', '升', '立方厘米'],
    index1: 0,
    array2: ['立方米', '升', '立方厘米'],
    index2: 0
  },
 
  bindchange1(e) {
    console.log('原单位选择为',e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindchange2(e) {
    console.log('现单位选择为',e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  oninput(e) {
    this.setData({
      value: e.detail.value
    })
  }
})