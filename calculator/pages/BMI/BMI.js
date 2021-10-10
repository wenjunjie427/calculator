// pages/BMI/BMI.js
Page({
  data: {
    height: '',
    weight: '',
  },

  oninput1(e) {
    this.setData({
      weight: e.detail.value
    })
  },

  oninput2(e) {
    this.setData({
      height: e.detail.value
    })
  }
})