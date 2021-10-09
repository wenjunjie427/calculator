Page({
  goLength: function(event){
    wx.navigateTo({
      url: '../length/length',
    })
  },

  goWeight: function(event){
    wx.navigateTo({
      url: '../weight/weight',
    })
  },

  goArea: function(event){
    wx.navigateTo({
      url: '../area/area',
    })
  },

  goVolume: function(event){
    wx.navigateTo({
      url: '../volume/volume',
    })
  },

  goMoney: function(event){
    wx.navigateTo({
      url: '../money/money',
    })
  },

  goFood: function(event){
    wx.navigateTo({
      url: '../food/food',
    })
  },

  goBMI: function(event){
    wx.navigateTo({
      url: '../BMI/BMI',
    })
  },

  goRun: function(event){
    wx.navigateTo({
      url: '../run/run',
    })
  },

  goTime: function(event){
    wx.navigateTo({
      url: '../time/time',
    })
  },

  goVideo: function(event){
    wx.navigateTo({
      url: '../video/video',
    })
  }
})