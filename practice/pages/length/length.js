// pages/length/length.js
Page({
  data: {
    value: '',
    array1: ['mm', 'cm', 'm', 'km'],
    index1: 0,
    array2: ['mm', 'cm', 'm', 'km'],
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

