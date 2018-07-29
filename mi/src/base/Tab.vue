<template>
	<div class="footer">
		<router-link to="/home">
			<i class="iconfont icon-fonts-shouye"></i>
			<span>首页</span>
		</router-link>
		<router-link to="/list">
			<i class="iconfont icon-fenlei"></i>
			<span>分类</span>
		</router-link>
		<router-link to="/cart">
			<i class="iconfont icon-msnui-cart"></i>
			<span>购物车</span>
		</router-link>
		<router-link to="/me">
			<i class="iconfont icon-gerenzhongxin2"></i>
			<span>我的</span>
		</router-link>
	</div>
</template>
<script>

</script>
<style scoped>
	.footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 60px;
		font-size: 0;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}
	.footer a {
		display: inline-block;
		width: 25%;
		height: 60px;
		padding-top: 13px;
		font-size: 14px;
		text-align: center;
	}
	.footer a i {
		display: block;

	}
	.footer .router-link-active {
		color: #ff6700;
	}
</style>
