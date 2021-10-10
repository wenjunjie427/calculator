// pages/run/run.js
Page({
  data: {
    age: '',
    heartRate: '',
  },

  oninput1(e) {
    this.setData({
      age: e.detail.value
    })
  },

  oninput2(e) {
    this.setData({
      heartRate: e.detail.value
    })
  }
})