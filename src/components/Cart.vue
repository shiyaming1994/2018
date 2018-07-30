<template>
	<div>
		<div class="cart">
			<Nav>购物车</Nav>
			<div class="login">登录享有更多优惠</div>
			<div class="mycart" v-for="(item,index) in cart" :key="index">
				<!-- <div class="check">
					<input type="checkbox" checked>
				</div> -->
				<div class="mycart-left">
					<div class="img">
						<img v-lazy="item.infoimg">
					</div>
					<div class="mycart-left-r">
						<div class="name">{{ item.name }}</div>
						<div class="info">{{ item.info }}</div>
						<div class="pic">￥{{ item.pic }}</div>
					</div>
				</div>
				<div class="count">
					<div class="jian" @click="subCount(item.id)">-</div>
					<div class="num">
						<span>{{ item.count }}</span>
					</div>
					<div class="jia" @click="addCount(item.id)">+</div>
				</div>
				<div class="iconfont icon-icon_shanchu-xian" @click="delCart(item.id)"></div>
			</div>
			<div class="kong" v-if="count<=0">
				<div class="div">购物车还是空的</div>
				<div class="catt iconfont icon-msnui-cart"></div>
			</div>
			<div class="kong xi">猜你喜欢</div>
			<div v-for="(item,index) in content" :key="index">
				<router-link :to="{name:'details',query:{id:item.id}}" class="phone" tag="div" v-for="(item,index) in item.phone" :key="index">
					<a href="javascript:;">
						<img v-lazy="item.img">	
					</a>
					<div class="na">
						<div class="name">{{ item.title }}</div>
						<div class="info">{{ item.info }}</div>
						<div class="pic">{{ item.pic }}</div>
					</div>
				</router-link>	
			</div>
			
		</div>
		<div class="cartfooter" v-if="count>0">
					<div class="money">
						<div>共{{ count }}件，金额共</div>
						<div>￥{{ price }}元</div>
					</div>
					<router-link to="/home" class="home">继续购物</router-link>
					<router-link to="/settlement" class="getmoney">去结算</router-link>
			</div>
			<Tab v-else></Tab>
	</div>
</template>
<script>
import Tab from '../base/Tab.vue'
import Nav from '../base/nav.vue'
export default {
	data(){
		return {
			content:[]
		}
	},
	created(){
		this.$axios.get('http://localhost:8080/static/mock/content.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.content = res.data
			})	
		})
	},
	methods:{
		// 删除商品
		delCart(id){
			this.$store.commit('delCart',id)
		},
		addCount(id){
			this.$store.commit('addCount',id)
		},
		subCount(id){
			this.$store.commit('subCount',id)
		}
	},
	computed:{
		// 获取购物车数据
		cart(){
			return this.$store.state.carData
		},
		// 数量
		count(){
			return this.$store.getters.cartCount
		},
		// 总价
		price(){
			return this.$store.getters.cartPic
		}
	},
	components:{
		Tab,
		Nav
	}
}
</script>
<style scoped>
	.cart {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.login {
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #fff;
		padding-left: 10px;
	}
	.kong {
		width: 100%;
		height: 80px;
		background-color: #ebebeb;
		line-height: 80px;
	}
	.kong .div {
		float: left;
		text-align: right;
		width: 60%;
	}
	.kong .icon-msnui-cart {
		float: left;
		font-size: 30px;
	}
	.xi {
		text-align: center;
		background-color: #f2f2f2;
	}
	
	img {
		width: 100%;
	}
	.day-bottom {
		width: 103%;
	}
	.phone {
		width: 49%;
		float: left;
		margin-right: 2px;
	}
	.na {
		padding: 10px 10px;
    	text-align: left;

	}
	.name {
		overflow: hidden;
    	text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.info {
    	font-size: 12px;
    	color: rgba(0,0,0,.54);
	}
	.pic {
		font-size: 14px;
    	color: #ea625b;
    	display: inline-block;
	}

	.mycart {
		position: relative;
		width: 100%;
		height: 80px;
		background-color: #fff;
		margin-top: 5px;
	}
	.mycart-left {
		float: left;
		width: 60%;
		height: 60px;
		padding: 10px 20px 10px 5px;
	}
	.check{
		float: left;
		width: 20px;
		height: 80px;
		margin-left: 10px;
		line-height: 80px;

	}
	.check input {
		width: 15px;
		height: 15px;
	}
	.mycart-left .img {
		float: left;
		width: 20%;
		border: 1px solid #f2f2f2;
	}
	.mycart-left-r {
		overflow: hidden;
		width: 70%;
		float: left;
	}
	.icon-icon_shanchu-xian {
		position: absolute;
		font-size: 20px;
		height: 30px;
		width: 30px;
		right: 10px;
		bottom: 10px;
	}
	.mycart-left-r .info {
		width: 100%;
		height: 20px;
		white-space: nowrap;
	}
	.mycart-left-r .pic {
		width: 100%;
		height: 30px;
	}

	.count {
		float: left;
		width: 15%;
		height: 20px;
		margin: 10px 0;
		border: 1px solid #f2f2f2;
	}
	.count .jian,.count .jia,.count .num {
		text-align: center;
		float: left;
		width: 33.33%;
		height: 100%;
		line-height: 100%;
	}
	.count .jian,.count .jia {
		background-color: #f2f2f2;
	}

	.cartfooter {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.cartfooter .money,.cartfooter .home,.cartfooter .getmoney {
		float: left;
		width: 33.33%;
		height: 100%;

		text-align: center;
	}
	.cartfooter .money {
		background-color: #fff;
	}
	.cartfooter .money>div {
		font-size: 12px;
		height: 25px;
		line-height: 25px;
	}
	.cartfooter .home {
		background-color: #f2f2f2;
	}
	.cartfooter .getmoney {
		background-color: #ff6700;
		color: #fff;
	}
    
</style>