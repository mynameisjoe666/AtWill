const Base64=require("./base64");
const Crypto=require("./crypto");
require("./hmac");
require("./sha1")
var host="https://ehr-cloud.oss-cn-beijing.aliyuncs.com";
var config={
  uploadImageUrl:host,
  AccessKeySecret:"IAKgRmcMB65tHI0uDw4BSQYeNaGAXO",
  OSSAccessKeyId:"LTAI4GC49WXrg2x1h446wbM3",
  timeout:86400
}
const uploadFile=function(params){
  if(!params.filePath){
    wx.showToast({
      title: '图片错误,请重试',
      icon:"none"
    });
    return;
  }
  // const aliyunFileKey=params.dir+params.filePath.replace("wxfile://","");
  const aliyunFileKey=params.dir+params.filePath.replace("http://tmp/","");
  const policyBase64=getPolicyBase64();
  const signature=getSignature(policyBase64);

  wx.uploadFile({
    filePath: params.filePath,
    name: 'file',
    url: host,
    formData:{
      'key':aliyunFileKey,
      'policy':policyBase64,
      'OSSAccessKeyId': config.OSSAccessKeyId,
      'signature':signature,
      'success_action_status': '200',
    },
    success:function(res){
      if(res.statusCode!=200){
        if(params.fail){
          params.fail(res);
        }
        return;
      }
      if(params.success){
        params.success(host+'/'+aliyunFileKey);
		// console.log(host+'/'+aliyunFileKey)
      }
    },
    fail:function(err){
      wx.showToast({
        title: err,
        icon:"none"
      });
    }
  })
}
function getPolicyBase64(){
  var date=new Date();
  date.setHours(date.getHours()+config.timeout);
  var srcT=date.toISOString();
  const policyText={
    "expiration": srcT, //设置该Policy的失效时间
    "conditions": [
      ["content-length-range", 0, 8 * 1024 * 1024] // 设置上传文件的大小限制,8mb
    ]
  };
  const policyBase64 = Base64.encode(JSON.stringify(policyText));
  return policyBase64;
}

function getSignature(policyBase64){
  const accesskey=config.AccessKeySecret;
  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true
  });
  const signature = Crypto.util.bytesToBase64(bytes);
  return signature;
}

module.exports=uploadFile;