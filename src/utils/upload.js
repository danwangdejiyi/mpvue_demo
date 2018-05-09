import common from './common.js'
function uploadImg(path,that){//that 上传页面的this
  wx.uploadFile({
    url: 'https://yuncheshi.58.com/api/file/transfer',
    filePath: path,
    name: 'file',
    header: { 
      'Content-Type':'application/json',
      'Cookie': common.userinfo.__getUserinfo__
    },
    formData: {
      "Pic-Size":"0*0",
      "Pic-Path": "/yuncheshi/car/"
    },
    success: function (res) {//成功that.imgData.push(path)
      console.log(res);
      let data = JSON.parse(res.data);
      if (data.code !=0) {
        that.showToast({//了解mptoast
          title: data.msg,
        })
        return;
      }
      that.imgData.push(path)
      wx.hideLoading();
    },
    fail: function (res) { 
      let data = JSON.parse(res.data);
      wx.hideLoading();
      console.log(res);
      that.showToast({
        title: data.msg
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
