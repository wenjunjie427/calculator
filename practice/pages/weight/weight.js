// pages/weight/weight.js
Page({
  data: {
    value: '',
    array1: ['g', 'kg', 't', '斤', '两'],
    index1: 0,
    array2: ['g', 'kg', 't', '斤', '两'],
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

