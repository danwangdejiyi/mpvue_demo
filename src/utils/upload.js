function uploadImg(path){
  wx.uploadFile({
    url: 'https://yuncheshi.58.com/api/file/transfer',
    filePath: path,
    name: 'file',
    header: { 'Cookie': 'PPU=' + wx.getStorageSync('ppu')},
    formData: {
      "Pic-Size":"0*0",
      "Pic-Path": "/yuncheshi/car/"
    },
    success: function (res) {
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      var data = JSON.parse(res.data);
      if (data.code == 403) {
        wx.showToast({
          title: data.msg,
        })
        return;
      }
      wx.hideLoading();
    },
    fail: function (res) { 
      wx.hideLoading();
      console.log(res);
      wx.showToast({
        title: '图片上传失败',
      })
    }
  })
}
export default function upload(){
  let _this=this
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
      console.log(res)
      uploadImg(res.tempFiles[0].path);
    }
  })
}
