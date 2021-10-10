// pages/food/food.js
Page({
  data: {
    value: '',
  },
 
  oninput(e) {
    this.setData({
      value: e.detail.value
    })
  }
})