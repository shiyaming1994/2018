<template>
	<div>
		<div class="login">
			<div class="log"></div>
			<div class="log-txt">登录/注册</div>
		</div>
		<router-link to="/me/order" class="dd" tag="div">
			<div class="name">我的订单</div>
			<div class="all">
				<div class="all-name">全部订单</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</router-link>
		<router-link to="/address" class="dd add" tag="div">
			<div class="name">收货地址</div>
			<div class="all">
				<div class="all-name"></div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</router-link>
		<div class="money">
			<ul class="money-m">
				<li>
					<a href="javascript">
						<div class="iconfont icon-shouye"></div> 
						<span>待付款</span>
					</a>
				</li>
				<li>
					<a href="javascript">
						<div class="iconfont icon-daishouhuo"></div> 
						<span>待收货</span>
					</a>
				</li>
				<li>
					<a href="javascript">
						<div class="iconfont icon-weixiu"></div> 
						<span>退换修</span>
					</a>
				</li>
				
			</ul>
		</div>
		<div class="mi">
			<div class="iconfont icon-huiyuan left"></div>
			<div class="vip">
				<div class="txt">会员中心</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<div class="mi mi1">
			<div class="iconfont icon-youhuiquan left"></div>
			<div class="vip">
				<div class="txt">我的优惠</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<div class="mi">
			<div class="iconfont icon-fuwu left"></div>
			<div class="vip">
				<div class="txt">服务中心</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<div class="mi mi1">
			<div class="iconfont icon-080jiating left"></div>
			<div class="vip">
				<div class="txt">小米之家</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<div class="mi">
			<div class="iconfont icon-xiaomi left"></div>
			<div class="vip">
				<div class="txt">F码通道</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<div class="mi">
			<div class="iconfont icon-shezhi left"></div>
			<div class="vip">
				<div class="txt">设置</div>
				<div class="iconfont icon-jiantouyou"></div>
			</div>
		</div>
		<Tab></Tab>
	</div>
</template>
<script>
import Tab from '../base/Tab.vue'
export default {
	data(){
		return {}
	},
	created(){},
	methods:{},
	computed:{},
	components:{
		Tab
	}
}
</script>
<style scoped>
	.login {
		width: 100%;
		height: 80px;
		background-color: orange;
	}
	.log {
		background-color: yellow;
		border-radius: 50%;
		float: left;
		width: 40px;
		height: 40px;
		margin: 20px 20px;
	}
	.log-txt {
		float: left;
		height: 80px;
		line-height: 80px;
	}
	.dd {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
	}
	.dd .name {
		float: left;
		padding-left: 10px;
	}
	.dd .all {
		float: right;
		padding-right: 10px;
	}
	.dd .all .all-name {
		float: left;
		font-size: 14px;
	}
	.dd .all .icon-jiantouyou {
		float: right;
	}
	.money {
		height: 100px;
		background-color: #fff;
		margin-top: 2px;
	}
	.money .money-m {
		padding: 0 30px;
	}
	.money .money-m li {
		width: 30%;
		text-align: center;
		display: inline-block;
		margin: 20px 0px;
	}
	.money .money-m li div {
		font-size: 30px;
	}
	.money .money-m li span {
		font-size: 12px;
	}
	.mi {
		width: 100%;
		height: 60px;
		line-height: 60px;
		background-color: #fff;
		margin-top: 5px;
	}
	.mi1 {
		margin-top: 0;
	}
	.mi .left {
		float: left;
		width: 20%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 20px;
	}
	.mi .vip {
		float: left;
		width: 80%;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #efefef;
	}
	.mi .vip .txt {
		float: left;
		height: 60px;
		line-height: 60px;
	}
	.mi .vip .icon-jiantouyou {
		float: right;
		height: 60px;
		line-height: 60px;
		margin-right: 10px;
	}
	.icon-huiyuan {
		color: orange;
	}
	.icon-youhuiquan {
		color: skyblue;		
	}
	.icon-fuwu {
		color: red;
	}
	.icon-080jiating {
		color: hotpink;
	}
	.icon-fuwu {
		color: red;
	}
	.icon-xiaomi {
		color: orange;
	}
	.add {
		margin-top: 2px;
	}
</style>