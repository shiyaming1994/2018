<template>
<div class="nav-t">
	<div class="nav">
		<span class="iconfont icon-fanhui left" @click="goBack"></span>
		<slot></slot>	
		<router-link to="/search" class="iconfont icon-chazhao right"></router-link>
	</div>
</div>
	
</template>
<script>
export default {
	data(){
		return {}
	},
	created(){},
	methods:{
		goBack(){
              this.$router.go(-1);
          }
	},
	computed:{},
	components:{}
}
</script>
<style scoped>
	.nav {
		position: fixed;
		z-index:102;
		width: 100%;
		top: 0;
		text-align: center;
		height: 50px;
		line-height: 50px;
		background-color: #f2f2f2;
	}
	.left {
		float:left;
		padding-left: 15px;
		height: 50px;
		line-height: 50px;
	}
	.right {
		float:right;
		padding-right: 15px;
		height: 50px;
		line-height: 50px;
	}
</style>