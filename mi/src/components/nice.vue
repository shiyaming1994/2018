<template>
	<div>
		<div class="show">
			<div class="moy iconfont icon-xuanzhong">
				<div>支付成功</div>
			</div>
			<router-link to="/home" class="gohome" tag="div">回到首页</router-link>
			<router-link to="/me/order" class="sett" tag="div">查看订单</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {}
	},
	created(){},
	methods:{},
	computed:{},
	components:{}
}
</script>
<style scoped>
	
	.show {
		position: absolute;
		background: #fff;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 200;
	}
	.show .moy {
		margin: 200px auto 180px;
		width: 100%;
		height: 100px;
		font-size: 100px;
	}
	.moy div {
		margin:30px auto;
		font-size: 30px;
		width: 200px;
		height: 50px;
	}
	.show .gohome {
		margin: 30px auto 0;
		width: 90%;
		height: 50px;
		line-height: 50px;
		background-color: #f2f2f2;
	}
	.show .sett {
		margin: 30px auto 0;
		width: 90%;
		height: 50px;
		line-height: 50px;
		background-color: #f2f2f2;
	}
</style>