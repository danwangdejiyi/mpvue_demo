import common from './common.js'
function uploadImg(path,that){//that 上传页面的this
  wx.uploadFile({
    url: 'https://www.haoyejinfu.com/api/file/upload',
    method:"get",
    filePath: path,
    name: 'file',
    header: { 
      'Content-Type':'application/x-www-form-urlencoded',
      'Cookie':"uid="+ wx.getStorageSync('uid')+";"
    },
    formData: {
      "accessToken": wx.getStorageSync('uid'),
      "appid":"wx7e7c9b60739181ff",
      "appsecret":"e2f0bf83ca7f0c4e8a6efcde8d278b8b"
    },
    success: function (res) {//成功that.imgData.push(path)
      let {data}=res;
      data=typeof data==='string'?JSON.parse(data):data;
      console.log(data)
      if (data.code !=0) {
        that.showToast(data.msg)
        return;
      }
      that.imgData.push(path)
      wx.hideLoading();
    },
    fail: function (res) { 
      wx.hideLoading();
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
      wx.request({
        method: "get",
        header: {
          'Content-Type': "application/json"
        },
        url: "https://www.haoyejinfu.com/api/file/accesstoken?grant_type=client_credential",
        data: {},
        success: function (res) {
          console.log('1',res)
        },
        fail: function (res) {
          console.log(2,res)
        }
      })


      uploadImg(res.tempFiles[0].path,that);
    }
  })
}
