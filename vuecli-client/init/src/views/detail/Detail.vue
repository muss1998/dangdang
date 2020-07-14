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
				</div>
				<div class="rightmi">
					<div class="keywods">
						<h2>{{goodstail.keywords}}</h2>
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
						<div style="margin-top: 10px;"><span style="background-color: red; ">电子书加购价：</span><span  style="border: 1px dashed grey;">买满￥100减50</span><span>详情</span></div><br>
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
					</div>
					<div class="peisong"></div>
				</div>
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
				goodstail: {}

			}
		},
		methods: {
			// buy(){},
			// tocar(){			// buy(){},
			// 	if(window.localStorage.getItem("islogin")) {
			// 		//如果登录过就向后端发送数据
			// 	}else{
			// 		alert("没有登录，请登录！")
			// 		this.$router.push({path:"/login"})
			// 	}
			// }
		},
		mounted() {
			// console.log(this.$route)
			//打印id之后就拿去请求数据
			// console.log(this.$route.query.id)
			//将id传给后端请求商品数据
			// var gid = this.$route.query.gid
			var gid = 2
			var url = "http://localhost:7001/addDetail?gid=" + gid
			axios.get(url).then((res) => {
				console.log(res)

				this.goodstail = res.data[0]
			})
		},
		components: {}

	};
</script>
<style>
	.detail {
		width: 1200px;
		height: 1000px;
		border: 1px solid red;
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
		border: 1px solid red;
	}

	/* 书本放大与信息详情 */
	.middle {
		width: 1180px;
		border: 1px solid forestgreen;
		margin: 0 auto;
	}

	.leftmi {
		width: 28%;
		height: 500px;
		border: 1px solid #000;
	}

	.imgsrc {
		width: 100%;
		height: 498px;
	}

	.rightmi {
		width: 70%;
		height: 500px;
		border: 1px solid #000;
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
		border: 1px solid blue;
	}

	.authopj {
		width: 100%;
		height: 100px;
		border: 1px solid gray;
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
	}

	.peisong {
		width: 100%;
		height: 200px;
		border: 1px solid rgb(54, 49, 17);
	}

	.authopjm p {
		margin-top: 0;
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
		border: 2px solid red;
	}

	.boxr {
		width: 300px;
		height: 70px;
		border: 2px solid red;

	}

	.boxlnei {
		display: flex;
	}

	.boxrnei {
		display: flex;
	}
</style>
