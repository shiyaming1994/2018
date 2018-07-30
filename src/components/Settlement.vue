<template>
	<div>
		<div class="cart">
			<div class="nav">
				<Nav>提交订单</Nav>
			</div>
			<router-link to="/address" class="address" tag="div" v-model="receive">
				<div class="name">姓名：{{ receive.name }}</div>
				<div class="phone">电话：{{ receive.phone }}</div>
				<div class="home">地址：{{ receive.add }}</div>
				<div class="mr">
					<div class="iconfont icon-dizhiguanli"></div> 
				</div>
			</router-link>
			<div class="mycart" v-for="(item,index) in checkGoods" :key="index">
				<div class="mycart-left">
					<div class="img">
						<img v-lazy="item.infoimg">
					</div>
					<div class="mycart-left-r">
						<div class="name">{{ item.name }}</div>
						<div class="info">{{ item.info }}</div>
						<div class="pic">￥{{ item.pic }}</div>
					</div>
					<div class="count">数量：{{ item.count }}件</div>
				</div>
			</div>
			<div class="footer">
				<div class="money">
					<div>共{{ count }}件，金额共</div>
					<div>￥{{ price }}元</div>
				</div>
				<div class="getmoney" @click="submit">提交订单</div>
			</div>
		</div>
	</div>
</template>
<script>
import Nav from '../base/nav.vue'
export default {
	data(){
		return {

		}
	},
	created(){
		// this.$router.push({path:'/cart'})
	},
	computed:{
		checkGoods(){
			return this.$store.getters.checkGoods
		},
		// 数量
		count(){
			return this.$store.getters.cartCount
		},
		// 总价
		price(){
			return this.$store.getters.cartPic
		},
		// 收货地址
		receive(){
			return this.$store.getters.receive[0]
		}
	},
	components:{
		Nav
	},
	methods:{
		submit(){
      		let iDate = new Date()
      		let month = iDate.getMonth()+1
      		let day = iDate.getDate()
      		if(month >= 1 && month <=9){
      		  month = "0" + month
      		}
      		if(day >= 1 && day <= 9){
      		  day = "0" + day
      		}
      		let data = {
      		  orderId : iDate.getTime(),
      		  goodsData : this.checkGoods,
      		  count : this.count,
      		  price : this.price, 
      		  iDate : iDate.getFullYear() + "-" + month + "-" + day,
      		  receive : this.receive,
      		  isPay : false
      		}
		
      		this.$store.commit('submit',data)
      		this.$router.push({name:'Payment',query:{orderId : data.orderId}})
		
    	}
	}
}
</script>
<style scoped>
	.cart {
		width: 100%;
		height: 100%;
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
	img {
		width: 100%;
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
		padding: 10px 20px 10px 40px;
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
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.footer .money,.footer .home,.footer .getmoney {
		float: left;
		width: 50%;
		height: 100%;
		text-align: center;
	}
	.footer .money {
		background-color: #fff;
	}
	.footer .money>div {
		font-size: 12px;
		height: 25px;
		line-height: 25px;
	}
	.footer .getmoney {
		background-color: #ff6700;
		color: #fff;
	}
	.count {
		position: absolute;
		right: 30px;
		bottom: 20px;
	}
    

    .address {
    	position: relative;
    	height: 100px;
    	line-height: 100px;
    	padding-left: 20px;
    	background-color: #fff;
    	border-top: 1px solid #ccc;
    	border-bottom: 1px solid #ccc;
    }
    .address .name,.address .phone,.address .home {
		height: 33px;
		line-height: 33px;
		width: 100%;
    }
    .address .mr {
    	position: absolute;
    	text-align: center;
    	right: 0;
    	top: 0;
		width: 100px;
		height: 100px;
		background-color: #efefef;
    }
    .iconfont {
    	font-size: 30px;
    }
</style>