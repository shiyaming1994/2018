<template>
	<div>
		<div class="search">
			<Nav><input type="text" placeholder="搜索商品名称"></Nav>
			<div class="search-t">热门搜索</div>
			<a href="javascript:;">小米8</a>
			<a href="javascript:;">净水器厨下</a>
			<a href="javascript:;">小米电视4A</a>
			<a href="javascript:;">小米笔记本Pro i5</a>
		</div>
	</div>
</template>
<script>
import Nav from '../base/nav.vue'
export default {
	data(){
		return {}
	},
	created(){},
	methods:{},
	computed:{},
	components:{
		Nav
	}
}
</script>
<style scoped>
	.search {
		position: absolute;
		top: 50px;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
	.search input {
		padding-left: 10px;
		border: 0;
		width: 50%;
		height: 20px;
	}
	.search a {
		display: inline-block;
		padding: 5px;
		border: 1px solid #e4e4e4;
		background-color: pink;
	}
</style>