<template>
	<div>
		<div class="cart">
			<div class="nav">
				<Nav>我的订单</Nav>
			</div>
			<div class="kong" v-if="order==false">
				<div class="iconfont icon-youhuiquan"></div>
				<div class="txt">还没有订单</div>
			</div>
			<div class="mycart" v-for="(item,index) in order" :key="index">
				<div class="mycart-a" v-for="(items,index) in item.goodsData" :key="index">
					<div class="mycart-left">
						<div class="img">
							<img v-lazy="items.infoimg">
						</div>
						<div class="mycart-left-r">
							<div class="name">{{ items.name }}</div>
							<div class="info">{{ items.info }}</div>
							<div class="pic">￥{{ items.pic }}</div>
						</div>
						<div class="count">数量：{{ items.count }}件</div>
					</div>
				</div>	
				<div class="orderfoot">
					<!-- <div class="count1">共{{ setCount }}件</div> -->
					<!-- <div class="money">金额共{{ setPrice }}元钱</div> -->
					<div class="time">{{ item.iDate }}</div>
				</div>
				<div class="isPay" v-if="item.isPay">已支付</div>
				<router-link :to="{name:'Payment',query:{orderId:item.orderId}}" tag="div" class="isPay-n" v-else>现在付款</router-link>
				
			</div>
		</div>
		<Tab></Tab>
	</div>
</template>
<script>
import Tab from '../base/Tab.vue'
import Nav from '../base/nav.vue'
export default {
	data(){
		return {
			
		}
	},
	computed:{
		setCount(){
			return this.$store.getters.setCount
		},
		setPrice(){
			return this.$store.getters.setPrice
		},
		order(){
			return this.$store.state.order
		}
	},
	methods:{
	},
	components:{
		Nav,
		Tab
	}
}
</script>
<style scoped>
	img {
		width: 100%;
	}
	.mycart {
		margin-bottom: 10px;
		position: relative;
	}
    .mycart-a {
		position: relative;
		width: 100%;
		height: 80px;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}
	.mycart-left {
		float: left;
		width: 60%;
		height: 60px;
		padding: 10px 20px 10px 30px;
	}
	.mycart-left .img {
		float: left;
		width: 20%;
		border: 1px solid #f2f2f2;
	}
	.mycart-left-r {
		margin-left: 40px;
		overflow: hidden;
		width: 50%;
		float: left;
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
		position: absolute;
		right: 30px;
		bottom: 20px;
	}


	.orderfoot {
		width: 100%;
		height: 28px;
		background-color: #fff;
	}
	.orderfoot .count1{
		float: left;
		margin-left: 50px;
	}
	.orderfoot .money{
		float: left;
		margin-left: 50px;
	}
	.orderfoot .time {
		float: right;
		height: 28px;
		text-align: right;
		padding-right: 10px;
			
	}
	.isPay {
		height: 25px;
		text-align: right;
		padding-right: 20px;
		background-color: #fff;
	}
	.isPay-n {
		height: 25px;
		text-align: right;
		padding-right: 20px;
		background-color: #fff;
		color: red;
	}

	.kong {
		text-align: center;
		height: 150px;
		background-color: #fff;
	}
	.iconfont {
		height: 100px;
		font-size: 100px;
	}
	.kong .txt {
		height: 50px;
		line-height: 50px;
	}

</style>