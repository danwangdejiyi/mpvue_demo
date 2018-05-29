import common from './common.js'
function uploadImg(path,that){//that 上传页面的this
  wx.uploadFile({
    url: 'https://www.haoyejinfu.com/api/file/upload',
    filePath: path,
    name: 'file',
    header: { 
      "Content-Type": "multipart/form-data",
      'Cookie':"uid="+ wx.getStorageSync('uid')+";"
    },
    formData: {
      "Pic-Size":"0*0",
      "Pic-Path": "/yuncheshi/"
    },
    success: function (res) {//成功that.imgData.push(path)
      let {data}=res;
      data=typeof data==='string'?JSON.parse(data):data;
      if (data.ret !=1) {
        that.showToast(data.msg)
        return;
      }
      that.imgData.push(data.data)
      wx.hideLoading();
    },
    fail: function (res) { 
      wx.hideLoading();
      that.showToast('图片过大')
    }
  })
}
//log('upload.js have to quote before common.js')
export default function upload(that){//that 上传页面的this
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths =res.tempFiles[0].path;
      wx.showLoading({
        title: '上传中'
      })
      uploadImg(tempFilePaths,that);
    }
  })
}
