<template>
	<div>
		<div class="swipe">
			<mt-swipe :auto="3000">
			  <mt-swipe-item v-for="(item,index) in slideList" :key="index">
			  	<a href="javascript:;">
			  		<img :src="item.img">
			  	</a>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {}
	},
	props:['slideList'],
	created(){},
	methods:{},
	computed:{},
	components:{}
}
</script>
<style scoped>
	.swipe {
		
	}
	img {
		width: 100%;
	}
	.mint-swipe {
    	position: relative;
    	overflow: hidden;
    	padding-top: 80px;
    	height: 200px;
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
</style>