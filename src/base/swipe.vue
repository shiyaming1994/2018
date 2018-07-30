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

	img {
		width: 100%;
	}	
	.swipe {
		height: 190px;
	}
</style>