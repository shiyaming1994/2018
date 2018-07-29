<template>
<div>
	
	<swipe :slideList="slideList"></swipe>
	<content-mi :content="content"></content-mi>
</div>
</template>
<script>
import swipe from '../../base/swipe.vue'
import contentMi from '../../base/contentMi.vue'
export default {
	data(){
		return {
			slideList:[],
			content:[]
		}
	},
	created(){
		this.$axios.get('http://localhost:8080/static/mock/home/Intelligence.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.slideList = res.data
				})	
			}),
		this.$axios.get('http://localhost:8080/static/mock/home/Intelligenceinfo.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.content = res.data
			})	
		})
	},
	computed:{},
	components:{
		swipe,
		contentMi
	}
}
</script>
<style scoped>


</style>

