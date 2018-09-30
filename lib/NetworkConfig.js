// 服务器域名
const baseUrl 			= 'http://crmapi.chinawutong.com/';
// 获取用户信息(我的界面首页数据)
const getUserInformation 		= baseUrl + 'api/UserInformation/getUserInformation';



module.exports = {
	getUserInformation: 		getUserInformation,
};