<template>
	<div>
		<div class="cart">
			<div class="nav">
				<Nav>确认付款</Nav>
			</div>
			<div class="address">
					<div class="name">姓名：{{ order.receive.name }}</div>
					<div class="phone">电话：{{ order.receive.phone }}</div>
					<div class="home">地址：{{ order.receive.add }}</div>
					<div class="mr">
						<div class="iconfont icon-dizhiguanli"></div> 
					</div>	
			</div>
			<div class="mycart" v-for="(item,index) in order.goodsData" :key="index">
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
			<div class="footer" @click="payNow(order.orderId)">确认付款</div>
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

	},
	computed:{
		order(){
			let order = this.$store.state.order.filter(order => {
				return order.orderId === this.$route.query.orderId
			})[0]
			return order
		}
	},
	methods:{
		payNow(id){
			this.$store.commit('payNow',id)
			this.$router.push({name:'nice'})
		}
	},
	components:{
		Nav
	}
}
</script>
<style scoped>
	img {
		width: 100%;
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
    	left: 0;
    	bottom: 0;
    }
    .icon-dizhiguanli {
    	position: absolute;
    	right: 0;
    	width: 100px;
		height: 100px;
		background-color: #efefef;
    }
    .icon-dizhiguanli {
    	font-size: 20px;
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
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #ff6700;
		text-align: center;
	}

</style>