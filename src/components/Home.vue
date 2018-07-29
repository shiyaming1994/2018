<template>
	<div>
		<div class="header">
		<div class="header-top">
			<div class="left iconfont icon-xiaomi"></div>
			<router-link to="/search" class="input">
				<input>
			</router-link>
			<router-link class="right iconfont icon-gerenzhongxin2" to="/me"></router-link>
		</div>
		<div class="header-bottom">
			<router-link to="/mint" tag="div" class="header-bottom-list">推荐</router-link to="" tag="div">
			<router-link to="/television" tag="div" class="header-bottom-list">电视</router-link to="" tag="div">
			<router-link to="/Intelligence" tag="div" class="header-bottom-list">智能</router-link to="" tag="div">
			<router-link to="/Notebook" tag="div" class="header-bottom-list">笔记本</router-link to="" tag="div">
			<router-link to="/screen" tag="div" class="header-bottom-list">双摄</router-link to="" tag="div">
			<router-link to="/all" tag="div" class="header-bottom-list">全面屏</router-link to="" tag="div">
			<router-link to="/periphery" tag="div" class="header-bottom-list">生活周边</router-link to="" tag="div">
			<router-link to="/box" tag="div" class="header-bottom-list">盒子</router-link to="" tag="div">
		</div>
	</div>
		<transition name="fadeIn" mode='out-in'>
			<router-view></router-view>
		</transition>
		<Tab></Tab>
	</div>
</template>
<script>
import mint from './home/mint.vue';
import Tab from '../base/Tab.vue';
export default {
	data(){
		return {}
	},
	created(){},
	methods:{},
	computed:{},
	components:{
		mint,
		Tab
	}
}
</script>
<style scoped>
.router-link-active {
	color: orange;
}
.header {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 80px;
		background-color: #f2f2f2;
	}
	.header-top {
		width: 100%;
		height: 50px;
	}
	.input {
		float: left;
		position: relative;
		height: 50px;
		width: 60%;
	}
	.input input {
		position: absolute;
		width: 100%;
		height: 30px;
		margin-top: 10px;
		border: 0;
	}

	.left {
		float: left;
		width: 20%;
		height: 50px;
		line-height: 50px;
		color: #ff6700;
		text-align: center;
		font-size: 30px;
	}
	.right {
		float: left;
		width: 20%;
		height: 50px;
		line-height: 50px;
		font-size: 30px;
		text-align: center;
	}
	.header-bottom {
		height: 30px;
		overflow-x: auto;
		white-space: nowrap;
	}
	.header-bottom-list {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		margin: 0 5px;
	}


	.fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all 0.2s linear;
  }
  .fadeIn-leave-active {
    transition: all 0.2s linear;
    opacity: 0;
  }
</style>