let str =
	'<p class=\"ql-align-justify\"><strong class=\"ql-size-large\">第一批领取共富工程已结束，第二批开始时间为3月18日。</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">两会传达最新精神，第二批共富工程提前开启</strong></p><p><strong class=\"ql-size-large\">第二批总名额150万，每天开放2万名</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">今日剩余6036名</strong></p><p><strong class=\"ql-size-large\">第一批共富群众享有专属政策红利</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">1.只需提交一份核实金，即可领取两份共富工程；</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">2.共富一级及以上用户将于2023年5月1日免费获赠第二批共富陆号工程一份；</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">3.安置房享有优先分配权；</strong></p><p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">4.2023年5月5日提现享有快速通道。</strong></p><p><img src=\"https://billion-fu-20221212.oss-accelerate.aliyuncs.com/images/20230318/2023031802380949485298-.jpg\"></p><p><img src=\"https://billion-fu-20221212.oss-accelerate.aliyuncs.com/images/20230318/2023031802385299515450-.jpg\"></p>'


str = str.replace(/<img/g, '<img style="width: 100%;height: auto; "') // 图片宽度设置

str = str.replace(/ql-align-justify">/g, 'ql-align-justify" style="margin: 1rem 0;">')

str = str.replace(/<p>/g, '<p style="margin: 1rem 0;">')

module.exports = str
