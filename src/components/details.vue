<template>
<div>
	<div class="dess">
		<div class="go">
			<span class="iconfont icon-fanhui left" @click="goBack"></span>
		</div>
		<div>
			<div class="swipe">
				<mt-swipe :auto="3000">
	  			<mt-swipe-item v-for="(items,index) in itemInfo.img" :key="index">
	  				<a href="javascript:;">
	  					<img :src="items.url">
	  				</a>
	  			</mt-swipe-item>
			</mt-swipe>
			</div>
			
			<div class="content">
				<div class="name">{{ itemInfo.name }}</div>
				<div class="info">{{ itemInfo.info }}</div>
				<div class="pic">￥{{ itemInfo.pic }}</div>
			</div>
			<div class="shop">
				<div class="product product-one">
					<div class="txt">已选：</div>
					<div class="txt-name">红米6 Pro 3GB+32GB 曜石黑 x1</div>
					<div class="open iconfont icon-jiantouyou"></div>
				</div>
				<div class="product product-two">
					<div class="txt">送至：</div>
					<div class="txt-name">北京市 东城区</div>
					<div class="open iconfont icon-jiantouyou"></div>
				</div>
				<div class="product product-3">
					<div class="shouhou">7天无理由退货</div>
					<div class="shouhou">15天质量问题换修</div>
					<div class="shouhou">365天保修</div>
				</div>
				<div class="canshu">
					<div class="title">
						<div class="title1">概述</div>
						<div class="title2">参数</div>
					</div>
					<div class="img">
						<div v-for="(items,index) in itemInfo.summary" :key="index">
							<img v-lazy="items.img" >
						</div>
					</div>
				</div>
			</div>
			<div class="footer-b">
				<div class="footer">
					<router-link to="/home" class="home">
						<span class="iconfont icon-fonts-shouye"></span>
						<p>首页</p>
					</router-link>
					<router-link to="/cart" class="cart">
						<div class="qiu" v-if="count>0">{{ count }}</div>
						<span class="iconfont icon-msnui-cart"></span>
						<p>购物车</p>
					</router-link>
					<div class="addcart" @click="show">加入购物车</div>
				</div>
			</div>
		</div>
	</div>
	<div class="tos" @touchmove.prevent v-show="flag">
		<div class="tos-con">
			<div class="cls" @click="guanbi">×</div>
			<div class="over">
				<div class="shop">
					<div class="img">
						<img :src="itemInfo.infoimg">
					</div>
					<div class="picc">
						<div class="pic">￥{{ itemInfo.pic }}</div>
						<div class="name">{{ itemInfo.name }}</div>
					</div>
				</div>
				<div class="banben">
					<div class="banben-1 now">
						<div class="banben-1-l">2g+16g</div>
						<div class="banben-1-r">￥999</div>
					</div>
					<div class="banben-1">
						<div class="banben-1-l">2g+16g</div>
						<div class="banben-1-r">￥999</div>
					</div>
				</div>
				<div class="color"></div>
				<div class="count"></div>
			</div>
			<div class="gobtn-n" @click="addcart(itemInfo)">加入购物车</div>		
		</div>
	</div>		
</div>
	
</template>
<script>
import { Toast } from 'mint-ui';

export default {
	data(){
		return {
			content:[],
			flag : false,
			id : this.$route.query.id
		}
	},
	created(){
		this.$axios.get('http://localhost:8080/static/mock/details.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.content = res.data
			})	
		})
	},
	methods:{
		goBack(){
              this.$router.go(-1);
          },
         show(){
         	this.flag = true
         },
         guanbi(){
         	this.flag = false
         },
        addcart(data){
        	let itemDate = {info:data,count:1}
        	this.$store.commit('addcart',itemDate) 
        	Toast({
			  message: '成功加入购物车',
			  position: 'middle',
			  iconClass: 'iconfont icon-xuanzhong',
			  duration: 1000
			})
			this.flag = false  	
        }
	},
	computed:{
		itemInfo(){
        	let itemInfo = this.content.filter(item => {
        		return Number(item.id) === Number(this.id)
        	})[0]
        	return itemInfo
        },
        // 数量
		count(){
			return this.$store.getters.cartCount
		}
	},
	components:{}
}
</script>
<style scoped>
	img {
		height: 100%;
	}
	.tos {
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .6);
	}
	.over {
		overflow: scroll;
		height: 100%;
	}
	.tos-con {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0px;
		background-color: #fff;
		z-index: 200;
		animation:move .35s linear forwards;
	}
	@keyframes move{
		0%{height: 0px;}
		100%{height: 500px;}
	}
	.over {
		overflow: scroll;
		height: 100%;
	}
	.cls {
		height: 20px;
		text-align: right;
		padding: 0 10px 0;
	}
	.tos .shop {
		height: 100px;
		padding: 20px;
	}
	.tos .shop .img {
		float: left;
		width: 100px;
		height: 100px;
	}
	.tos .shop .picc {
		float: left;
		width: 200px;
		margin: 0;
		padding: 0;
	}
	.tos .shop .pic,.shop .name {
		padding: 0;
		height: 50px;
		line-height: 50px;
	}
	.tos .banben {

	}
	.tos .color {
		height: 70px;
	}
	.tos .count {
		height: 70px;
	}
	.tos .gobtn {

		height: 50px;
	}
	.tos .gobtn-n {
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		background-color: #ff6700;
		z-index: 200;
	}
	.tos .banben-1 {
		height: 30px;
		width: 80%;
		border-color:rgba(0,0,0,.15);
		margin: 15px auto;
		padding: 0 10px;
	}
	.banben-1.now {
		border: 1px solid #ff6700;
	}
	.tos .banben-1-l {
		float: left;
		width: 50px;
		height: 30px;
		line-height: 30px;
	}
	.tos .banben-1-r {
		float: right;
		width: 50px;
		height: 30px;
		line-height: 30px;
	}













.go {
	position: absolute;
	z-index: 100;
	top: 10px;
	left: 10px;
	width: 35px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	border-radius: 50%;
	background-color: rgba(0,0,0,.2);
}
img {
	width: 100%;
}
.swipe {
	height: 400px;
}
.product {
	height: 30px;
	line-height: 30px;
	background-color: #fff;
	font-size: 12px;
	color: rgba(0,0,0,.87);
	padding: 0 10px;
	border-bottom: 1px solid #f2f2f2;
}
.product .txt {
	width: 40px;
	height: 30px;
	line-height: 30px;
	float: left;
	color: rgba(0,0,0,.54);
}
.product .txt-name {
	width: 60%;
	height: 30px;
	line-height: 30px;
	float: left;
	color: rgba(0,0,0,.87);
}
.product .open {
	width: 30px;
	height: 30px;
	float: right;
	color: #000;

}
.product .shouhou {
	padding-right: 10px;
	float: left;
	text-align: left;
	color: rgba(0,0,0,.54);
}
.footer-b {
	height: 50px;
}
.footer {
	position: fixed;
	width: 100%;
	height: 50px;
	bottom: 0;
	background-color: #fff;
	text-align: center;
}
.footer p {
	margin: 0;
}
.footer .home {
	float:left;
	height: 50px;
	width: 20%;
}
.footer .cart {
	position: relative;
	float:left;
	height: 50px;
	width: 20%;
}
.footer .addcart {
	float:left;
	width: 60%;
	height: 50px;
	line-height: 50px;
	background-color: #ff6700;
}


	.qiu {
		position: absolute;
		background-color: red;
		width: 20px;
		height: 20px;
		line-height: 20px;
		right: 5px;
		border-radius: 50%;
		color: #fff;
		text-align: center;
	}
	.content {
		height: 120px;
		padding: 5px 15px;
		background-color: #fff;
	}

	.name {
		font-size: 20px;
		height: 30px;
		line-height: 20px;
	}
	.info {
		font-size: 14px;
		color: rgba(0,0,0,.54);
	}
	.pic {
		padding: 10px 0;
		font-size: 20px;
		color: #ff6700;
		font-weight: 700;
	}
	.shop {
		margin-top: 10px;
	}
	.title {
		margin-top: 10px;
		height: 40px;
		text-align: center;
		background-color: #fff;
	}
	.title .title1,.title .title2 {
		float: left;
		width: 49%;
		line-height: 40px;
	}
	.title .title2 {
		border-left: 1px solid #ccc;
	}
	.img img{
		display: block;
		width: 100%;
	}
</style>