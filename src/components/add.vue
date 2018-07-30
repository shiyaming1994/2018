<template>
	<div>
		<div class="cart">
			<div class="nav">
				<Nav>添加收货地址</Nav>
			</div>
			<div class="add">
				<div class="name">
					<div class="name-a">姓名：</div>
					<input type="text" v-model="receive.name">
				</div>
				<div class="name">
					<div class="name-a">手机：</div>
					<input type="text" v-model="receive.phone">
				</div>
			</div>
			<div class="add">
				<div class="name">
					<div class="name-a">地址：</div>
					<input type="text" v-model="receive.add">
				</div>
				<div class="name">
					<div class="name-b">设为默认</div>
					<input type="checkbox" class="name-c">
					
				</div>
			</div>
			
			<button @click="submindz">保存</button>
		</div>
	</div>
</template>
<script>
import Nav from '../base/nav.vue'
export default {
	data(){
		return {
			receive: {
          		"name": "",
          		"phone": "",
          		"cityId": 0,
          		"add": "",
          		"default": false
        	}
		}
	},
	methods:{
		submindz(){
		
				this.$store.commit('submindz',this.receive)
				this.$router.push({name:'address'})

		}
	},
	components:{
		Nav
	}
}
</script>
<style scoped>
	.add {
		height: 100px;
		background-color: #fff;
		margin-bottom: 5px;
	}
	.add .name {
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	.add .name .name-a {
		width: 80px;
		height: 50px;
		float: left;
	}
	.add .name input {
		float: left;
		height: 20px;
		margin-top: 10px;
		margin-left: 20px;
		border: none;
		outline:none;
		border-bottom: 1px solid #efefef;
	}
	.add .name .name-c {
		padding: 0;
		margin: 0;
		float: right;
		width: 20px;
		height: 20px;
		height: 50px;
		line-height: 50px;
	}
	.add .name .name-b {
		float: right;
		width: 100px;
		height: 50px;
		line-height: 50px;
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