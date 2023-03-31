import {
	request
} from './request.js'

module.exports = {
	login: paramData => request('/api/user/login', paramData, 'POST'), // 登录
	captcha: paramData => request('/captcha', paramData, 'GET'), // 获取验证码
	// captcha: paramData => request('/gfapp/home/captchaImage', paramData, 'GET'), // 获取验证码
	register: paramData => request('/api/user/register', paramData, 'POST'), // 用户注册


	getNewsList: paramData => request('/api/index/getNewsList', paramData, 'GET'), // 新闻列表
	findNewsDetails: paramData => request('/api/index/findNewsDetails', paramData, 'GET'), // 新闻详情
	getBannerList: paramData => request('/api/index/getBannerList', paramData, 'GET'), // 首页轮播
	indexCommon: paramData => request('/api/index/common', paramData, 'GET'), // 首页公共数据
	getMsgList: paramData => request('/api/index/getMsgList', paramData, 'GET'), // 获取站内消息列表
	readMsg: paramData => request('/api/index/readMsg', paramData, 'POST'), // 获取站内消息

	signin: paramData => request('/api/index/signin', paramData, 'POST'), // 签到
	signInList: paramData => request('/api/index/signInList', paramData, 'GET'), // 签到列表

	findUserInfo: paramData => request('/api/user/findUserInfo', paramData, 'GET'), // 获取用户信息

	getProjectList: paramData => request('/api/project/getProjectList', paramData, 'GET'), // 获取项目列表(共富工程)
	buyProject: paramData => request('/api/project/buyProject', paramData, 'POST'), // 购买项目
	getProjectOrderList: paramData => request('/api/project/getProjectOrderList', paramData,
		'GET'), // 获取项目订单列表(我的共富)
	drawProjectIncome: paramData => request('/api/project/drawProjectIncome', paramData, 'POST'), // 领取项目收益

	getIncomeRanking: paramData => request('/api/project/getIncomeRanking', paramData, 'GET'), // 获取收益排行榜(共富之星)
	getInviteRanking: paramData => request('/api/index/getInviteRanking', paramData, 'GET'), // 获取邀请排行榜(共富功臣)


	getTeam: paramData => request('/api/index/getTeam', paramData, 'GET'), // 获取团队
	upload: paramData => request('/api/common/upload', paramData, 'POST'), // 上传文件
	profile: paramData => request('/api/user/profile', paramData, 'POST'), // 修改个人信息

	realname: paramData => request('/api/user/realname', paramData, 'POST'), // 用户实名
	getMoneyLog: paramData => request('/api/user/getMoneyLog', paramData, 'GET'), // 获取资金明细
	bindPayment: paramData => request('/api/user/bindPayment', paramData, 'POST'), // 绑定收款方式
	getPayment: paramData => request('/api/user/getPayment', paramData, 'GET'), // 获取收款方式
	withdraw: paramData => request('/api/user/withdraw', paramData, 'POST'), // 用户提现

	transfer: paramData => request('/api/user/transfer', paramData, 'POST'), // 用户转账
	recharge: paramData => request('/api/user/recharge', paramData, 'POST'), // 用户充值
	getWithdrawRecord: paramData => request('/api/user/getWithdrawRecord', paramData, 'GET'), // 获取提现记录
	getLevelList: paramData => request('/api/index/getLevelList', paramData, 'GET'), //获取级别列表
	getRechargeChannel: paramData => request('/api/user/getRechargeChannel', paramData,
		'GET'), // 获取充值渠道
	getRechargeRecord: paramData => request('/api/user/getRechargeRecord', paramData, 'GET'), // 获取充值记录
	house: paramData => request('/api/user/house', paramData, 'POST') // 用户安置房






}