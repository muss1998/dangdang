<template>
	<div class="detail">
		<div id></div>
		<div class="img">
			<img class="mimg" src="http://img63.ddimg.cn/2020/7/3/2020070314593149542.jpg" alt />
		</div>
		<div class="content">
			<div class="wenzi">
				<span>
					<h4>图书</h4>
				</span>>
				<span>亲子/家教</span>>
				<span>家教方法</span>>
				<span>给孩子的思维导图</span>:
				<span>受益一生的阅读力训练 名师深度解析阅读的...</span>
			</div>
			<div class="middle">
				<div class="leftmi">
					<img class="imgsrc" :src="goodstail.imgsrc" alt="">
				<table  class="imgtable">
					<tr>
						<td><img src="http://img3m6.ddimg.cn/94/11/27891166-1_x_2.jpg"></td>
						<td><img src="http://img3m6.ddimg.cn/94/11/27891166-2_x_2.jpg"></td>
						<td><img src="http://img3m6.ddimg.cn/94/11/27891166-1_x_2.jpg"></td>
						<td><img src="http://img3m6.ddimg.cn/94/11/27891166-3_x_2.jpg"></td>
					</tr>
				</table>
				</div>
				<div class="rightmi">
					<div class="keywods">
						<h2>{{goodstail.keywords}}</h2>
						<p>收录诺贝尔文学奖获奖作品《老人与海》《乞力马扎罗的雪》，深深影响了马尔克斯、塞林格等文学家的创作理念，《朗读者》嘉宾朗读篇目 读遍十方简，更多小说
							<a href="">每满100减50</a>
							>></p>
					</div>
					<div class="authopj">
						<p>作者：{{goodstail.author}}</p><br>
						<div class="authopjm">
							<div class="block">
								<span class="demonstration"></span>
								<el-rate v-model="value1"></el-rate>
							</div>
							<p>{{goodstail.pjnumber}}条评论</p>
						</div>
					</div>
					<div class="priceopj">
						<p style="display: inline-block;">当当价</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 style="display: inline-block;">降价通知</h5>
						<h1>￥{{goodstail.price}}</h1>
						<div class="priceopjimg">
							<img src="http://img7x5.ddimg.cn/imgother121/37/31/28972585_1.jpg" alt="">
						</div>
					</div>

					<div class="xiangqing">
						<div style="margin-top: 10px;"><span style="background-color: red; ">电子书加购价：</span><span style="border: 1px dashed grey;">买满￥100减50</span><span>详情</span></div><br>
						<div><span style="background-color: red; ">满额价：</span><span>买满￥100减50</span><span>详情</span></div><br>
						<div><span style="background-color: red; ">加购价：</span><span>购买本商品可加价换购以下任意一件商品</span><span>详情</span></div><br>
						<div class="box">
							<div class="boxl">
								<div class="boxlnei">
									<img src="http://img3m4.ddimg.cn/74/19/1524982214-1_x_10.jpg" alt="">
									<span>当当优课 LikeABC青少儿童英语口语一对一 英语学习在线课程 欧</span>
								</div>
							</div>
							<div class="boxr">
								<div class="boxrnei">
									<img src="http://img3m0.ddimg.cn/94/27/1579007920-1_x_2.jpg" alt="">
									<span>当当优课【电子兑换码】T.E.T.教师效能训练（同名畅销书配套音频</span>
								</div>
							</div>
						</div>
						<p style="margin-top: 20px;">促销不可多选，请在购物车选择该单品能享受的促销</p>
					</div>
					<div class="peisong">
						<table cellpadding="1">
							<tr>
								<td>配送至</td>
								<td><span style="border: 1px solid grey;margin: 0;padding: 0;">北京市东城区</span></td>
								<td>有货</td>
								<td>满49元免运费</td>
							</tr>
							<tr>
								<td>服务</td>
								<!-- 	colspan=3跨列 
									rowspan="3"跨行
							-->
								<td colspan=5>由“当当”发货，并提供售后服务。 23:15前完成下单，预计明天(7月15日)可送达</td>

							</tr>
						</table>
						<table class="table">
							<tr>
								<td>关联商品</td>

								<td><span>老人与海（精装.....</span></td>
								<td><span>老人与海（平装版</span></td>
								<td><span>罗生门（精装版)</span></td>
								<td><span>罗生门（平装版)<</span> </td> </tr> <tr>
								<td></td>
								<td><span>少年烦恼（精装版）</span></td>
								<td><span>少年烦恼（平装版）</span></td>
								<td><span>丸子与聘二（精装版）</span></td>
								<td><span>丸子与聘二（平装版）</span></td>
							</tr>
							<tr>
								<td></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
							</tr>
							<tr>
								<td></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
								<td><span>老人与海（精装</span></td>
							</tr>
						</table>

					</div>
					<div class="buttom">
						<div class="buttonmm" style="display: inline-block;">
								{{num}}
						<div class="buttonjiu" style="display: inline-block;">
							<button @click="jia">+</button><br>
							<button @click="jian">-</button>
						</div>
							
						</div>
						<div class="buttinmm" style="display: inline-block;">
							<!-- 	el-icon-shopping-cart-2 -->
							<!-- *********************点击加入购物车*************************** -->
							<div class="nirbut" @click="tocar">
								<i class="el-icon-shopping-cart-2"></i>
								加入购物车
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="btnin">
			<div class="nautop">
				  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
				    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
				    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
				    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				  </el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: "detail",
		data() {
			return {
				value1: null,
				goodstail: {},
				num:1,
				gid:2,
				activeName: 'first'
			}
		},
		methods: {
			// buy(){},
			 
			// tocar() {
			// 	if (window.localStorage.getItem("islogin")) {

			// 	} else {
			// 		alert("没有登录，请登录！")
			// 		this.$router.push({
			// 			path: "/login"
			// 		})
			// 	}
			// }
			
			     handleClick(tab, event) {
			        console.log(tab, event);
			      },
			jia(){
				this.num++
			},
			jian(){
				this.num--
				if(this.num<0){
					this.num=0
				}
			},
			tocar() {
				var  num = this.num
				
				var url1 =`http://localhost:7001/tocar`
				axios.post(url1,{num:num,gid:this.gid},{ withCredentials: true }).then((res) => {
					console.log(res)
					console.log(res.data)
					if(res.data.code==4000){
								alert("没有登录，请登录！")
								this.$router.push({
									path: "/login"
								})
					}
				})
			}
		},
		mounted() {
			// console.log(this.$route)
			//打印id之后就拿去请求数据
			// console.log(this.$route.query.id)
			//将id传给后端请求商品数据
			// var gid = this.$route.query.gid
			var gid = this.gid
			// this.gid=this.$route.query.gid
			console.log(this.gid)
			var url = "http://localhost:7001/addDetail?gid=" + gid
			axios.get(url).then((res) => {
				// console.log(res)
				this.goodstail = res.data[0]
			})
		},
		components: {}

	}
</script>
<style>
	.detail {
		width: 1200px;
		/* height: 1200px; */
		/* border: 1px solid red; */
		margin: 0 auto;
	}

	.wenzi h4 {
		display: inline;
	}

	.img,
	.mimg {
		width: 100%;
		height: 60px;
		/* margin: 0 auto; */
	}

	.content {
		width: 100%;
		height: 1200px;
		margin: 0 auto;
		/* border-bottom: 2px dashed grey; */
	}

	/* 书本放大与信息详情 */
	.middle {
		width: 1180px;
		/* border: 1px solid forestgreen; */
		margin: 0 auto;
	}

	.leftmi {
		width: 28%;
		height: 600px;
		border: 1px solid #000;
	}

	.imgsrc {
		width: 100%;
		height: 498px;
		border: 1px solid #606266;
	}
 .imgtable tr td{
		width: 100px;
		height: 80px;
		border: 1px solid #000000;
	}
	.rightmi {
		width: 70%;
		height: 500px;

		float: right;
	}

	.leftmi,
	.rightmi {
		display: inline-block;
	}

	/* 右边框内部 */
	.keywods {
		width: 100%;
		height: 200px;
		border-bottom: 1px dashed grey;
	}

	.authopj {
		width: 100%;
		height: 100px;
		/* border: 1px solid gray; */
		margin-bottom: 40px;
	}

	.priceopj {
		width: 100%;
		height: 200px;
		border: 1px solid grey;
		position: relative;
		background-color: orangered;
	}

	.priceopjimg {
		width: 400px;
		height: 200px;
		display: inline-block;
		position: relative;
		top: 0;
		right: -239px;
		background-color: orangered;
	}

	.priceopjimg img {
		width: 200px;
		height: 200px;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
	}

	.priceopj h1 {
		display: inline-block;
	}

	.xiangqing {
		width: 100%;
		height: 200px;
		border-bottom: 1px dashed grey;
		padding-bottom: 40px;
	}

	.peisong {
		width: 100%;
		height: 200px;
		border: 1px solid rgb(54, 49, 17);
		margin-top: 30px;
	}

	.authopjm p {
		margin-top: 12px;
		font-size: 20px;
	}

	.authopjm {
		display: flex;

	}

	.priceopj {
		background-color: blanchedalmond;
	}

	.box {
		display: flex;
		justify-content: space-around;

	}

	.boxl {
		width: 300px;
		height: 70px;
		border: 2px dashed grey;

	}

	.boxr {
		width: 300px;
		height: 70px;
		border: 2px dashed grey;


	}

	.boxlnei {
		display: flex;
	}

	.boxrnei {
		display: flex;
	}

	.peisong tr {
		border: 1px solid red;

	}

	.peisong td {
		width: 200px;
		color: #000000;
	}

	.peisong td:first-child {
		color: grey;
	}

	.table tr td span {
		border: 1px solid grey;
		padding: 0;
		margin: 0;
	}

	.table tr td:first-child {
		width: 70px;
	}

	.butlef {
		display: inline-block;
	}

	.buttonmm {
		width: 100px;
		height: 49px;
		background-color: grey;
		position: relative;

	}

	.buttonmm button {
		height: 24px;
		width: 50px;
		position: relative;
		top: 0;
		right: -38px;
	}

	.buttinmm {
		width: 200px;
		height: 48px;
		border: 1px solid red;
		vertical-align: top;
		background-color: #FF0000;
		color: white;
		font-size: 26px;
	}

	[class*=" el-icon-"],
	[class^=el-icon-] {
		width: 30px;
		height: 30px;
		font-size: 34px;
		line-height: 44px;

	}
</style>
