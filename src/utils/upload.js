import common from './common.js'
function uploadImg(path,that){//that 上传页面的this
  wx.uploadFile({
    url: 'https://www.haoyejinfu.com/api/file/upload',
    filePath: path,
    name: 'file',
    header: { 
      'Content-Type':'application/x-www-form-urlencoded',
      'Cookie':"uid="+ wx.getStorageSync('uid')+";"
    },
    formData: {
      "Pic-Size":"0*0"
    },
    success: function (res) {//成功that.imgData.push(path)
      console.log(res);
      if (res.code !=0) {
        that.showToast({//了解mptoast
          title: res.msg,
        })
        return;
      }
      that.imgData.push(path)
      wx.hideLoading();
    },
    fail: function (res) { 
      wx.hideLoading();
      console.log(res);
      that.showToast({
        title: res.msg
      })
    }
  })
}
//console.log('upload.js have to quote before common.js')
export default function upload(that){//that 上传页面的this
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
      //用来显示到当前页面的img路径
      uploadImg(res.tempFiles[0].path,that);
    }
  })
}
