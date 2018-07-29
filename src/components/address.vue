<template>
	<div>
		<div class="cart">
			<div class="nav">
				<Nav>收货地址</Nav>
			</div>
			<div class="address" v-for="(item,index) in receiveInfo" :key="index">
				<div class="name">姓名：{{ item.name }}</div>
				<div class="phone">电话：{{ item.phone }}</div>
				<div class="home">地址：{{ item.add }}</div>
				<div class="mr " :class="{'love':item.default == false}" @click="defaultRess(item.cityId)">
					<div class="iconfont icon-dizhiguanli"></div> 
				</div>
			</div>
			<router-link to="/add" tag="button">新增地址</router-link>
		</div>
	</div>
</template>
<script>
import Nav from '../base/nav.vue'
export default {
	data(){
		return {}
	},
	created(){
		this.$store.state.receiveInfo.forEach((item,index) => {
			if(item.default){
				this.itemIndex = index
				return
			}
		})
	},
	computed:{
		receiveInfo(){
			return this.$store.state.receiveInfo
		}
	},
	methods:{
		defaultRess(id){
			this.$store.commit('defaultRess',id)
		}
	},
	components:{
		Nav
	}
}
</script>
<style scoped>
	.nav {
		height: 50px;
	}
    .address {
    	position: relative;
    	height: 100px;
    	line-height: 100px;
    	padding-left: 20px;
    	background-color: #fff;
    	border-top: 1px solid #ccc;
    	border-bottom: 1px solid #ccc;
    }
    .address .name,.address .phone,.address .home {
		height: 33px;
		line-height: 33px;
		width: 100%;
    }
    .address .mr {
    	position: absolute;
    	text-align: center;
    	right: 0;
    	top: 0;
    	left: 0;
    	bottom: 0;
    }
    .iconfont {
    	position: absolute;
    	right: 0;
    	font-size: 40px;
    	width: 100px;
		height: 100px;
		background-color: #efefef;
    }
    .icon-shouhuodizhi {
    	font-size: 20px;
    }
    .love  {
    	opacity: 0;
    }
    button {
    	position: absolute;
    	bottom: 0;
    	text-align: center;
    	width: 100%;
    	height: 50px;
    	background-color: #fff;
    }
</style>