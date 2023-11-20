export default {
	$alert:function(msg){
		uni.showModal({
			title: '温馨提示',
			content: msg ,
			showCancel: false,
			confirmText: '确定'
		});
	}
}