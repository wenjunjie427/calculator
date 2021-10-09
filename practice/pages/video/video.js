// pages/video/video.js
Page({
  data: {
    value: '',
    array: ['流畅 320p', '标清 640p', '标清 720p', '高清 1280p','全高清 1920p','2k','4k'],
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