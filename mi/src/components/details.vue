<template>
<div>
	<div class="dess">
		<div class="go">
			<span class="iconfont icon-fanhui left" @click="goBack"></span>
		</div>
		<div>
			<mt-swipe :auto="3000">
	  			<mt-swipe-item v-for="(items,index) in itemInfo.img" :key="index">
	  				<a href="javascript:;">
	  					<img :src="items.url">
	  				</a>
	  			</mt-swipe-item>
			</mt-swipe>
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
				<div class="addcart" @click="addcart(itemInfo)">加入购物车</div>
			</div>
		</div>
	</div>	
</div>
	
</template>
<script>
export default {
	data(){
		return {
			content:[],
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
        addcart(data){
        	let itemDate = {info:data,count:1}
        	this.$store.commit('addcart',itemDate)     	
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
.dess {
	padding-bottom: 50px;
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




.mint-swipe {
    	overflow: hidden;
    	position: relative;
    	height: 420px;
	}
	.mint-swipe-items-wrap {
	    position: relative;
	    overflow: hidden;
	    height: 100%;
	}
	.mint-swipe-items-wrap > div {
	    position: absolute;
	    transform: translateX(-100%);
	    width: 100%;
	    height: 100%;
	    display: none
	}
	.mint-swipe-items-wrap > div.is-active {
	    display: block;
	    -webkit-transform: none;
	            transform: none;
	}
	.mint-swipe-indicators {
	    position: absolute;
	    bottom: 10px;
	    left: 50%;
	    -webkit-transform: translateX(-50%);
	            transform: translateX(-50%);
	}
	.mint-swipe-indicator {
	    width: 8px;
	    height: 8px;
	    display: inline-block;
	    border-radius: 100%;
	    background: #000;
	    opacity: 0.2;
	    margin: 0 3px;
	}
	.mint-swipe-indicator.is-active {
	    background: #fff;
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