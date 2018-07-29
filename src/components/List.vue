<template>
<div>
	<div class="list">
		<Nav>分类</Nav>
		<div class="cate-left">
			<ul>
				<li v-for="(item,index) in content" :key="index">
					{{ item.name }}
				</li>	
			</ul>
		</div>
		<!-- 二级分类 -->
		<div class="cate-right">
			<div class="clearfix" v-for="(item,index) in content1" :key="index">
				<div class="title">
					<span>{{ item.name }}</span>
				</div>
				<ul v-for="(item,index) in item.info" :key="index">
					<li>
						<div class="cate-right-cen">
							<img v-lazy="item.img">
						</div>
						<div class="cate-right-txt">{{ item.name }}</div>
					</li>
				</ul>
			</div>
		</div>
		<Tab></Tab>
	</div>
</div>
</template>
<script>
import Tab from '../base/Tab.vue'
import Nav from '../base/nav.vue'
export default {
	data(){
		return {
			content:[],
			content1:[]
		}
	},
	created(){
		this.$axios.get('http://localhost:8080/static/mock/list-left.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.content = res.data
			})	
		}),
		this.$axios.get('http://localhost:8080/static/mock/list-right.json')
			.then(res=>{
				this.$nextTick(()=>{
					this.content1 = res.data
			})	
		})
	},
	methods:{

	},
	computed:{},
	components:{
		Nav,
		Tab
	}
}
</script>
<style>
	.list {
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 60px;
		background-color: #fff;
	}
	.cate-left {
		width: 70px;
		float: left;
		height: 100%;
		overflow-y: auto;		
	}
	.cate-left ul {
		margin: 0;
		padding: 0;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.cate-left ul li {
		height: 60px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		background-color: #fff;
	}
	.cate-left ul .now {
		color: orange;
	}
	.cate-left ul li a{
		display: block;
		color: #000;
	}


	.cate-right {
		float: right;
		width: 80%;
		height: 100%;
		overflow-y: auto;
	}
	.cate-right li {
		float: left;
		width: 33.333%;
		text-align: center;
	}
	.cate-right-cen {
		width: 50%;
		margin: 20px auto 10px;
	}
	.cate-right img {
		width: 100%;
	}
	.cate-right-txt {
		font-size: 12px;
	}
	.title {
		height: 70px;
		line-height: 70px;
		width: 100%;
		background-color: #fff;
		text-align: center;
	}
	.title span {
		position: relative;
	}
	.title span::before {
		content: "";
    	position: absolute;
    	top: 50%;
    	left: -33px;
    	width: 20px;
    	border-top: 1px solid #e0e0e0;
	}
	.title span::after {
		content: "";
    	position: absolute;
    	top: 50%;
    	right: -33px;
    	width: 20px;
    	border-top: 1px solid #e0e0e0;
	}


</style>