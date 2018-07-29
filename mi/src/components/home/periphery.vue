<template>
	<div>
		<div class="ds">
			<div class="bgc" v-for="(item,index) in slideList" :key="index">
				<img v-lazy="item.img">
			</div>
		</div>
		
	</div>
</template>
<script>
export default {
	data(){
		return {
			slideList:[]
		}
	},
	created(){
		this.$axios.get('http://localhost:8080/static/mock/home/television.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.slideList = res.data
				})	
			})
	},
	methods:{},
	computed:{},
	components:{}
}
</script>
<style scoped>
	.ds {
		padding: 80px 0 50px;
	}
	.bgc {
		
		text-align: center;
		background-color: rgb(185, 79, 73);
	}
	img {
		width: 95%;
		margin: 5px;
	}
</style>