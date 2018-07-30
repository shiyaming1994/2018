<template>
	<div>
		<div class="content">	
			<div class="day" v-for="(item,index) in content" :key="index">
				<div class="day-top">
					<a href="javascript:;">
						<img v-lazy="item.url">
					</a>
				</div>
				<div class="day-bottom">
					<router-link :to="{name:'details',query:{id:item.id}}" class="phone" tag="div" v-for="(item,index) in item.phone" :key="index">
						<a href="javascript:;">
							<img v-lazy="item.img">
						</a>
						<div class="na">
							<div class="name">{{ item.title }}</div>
							<div class="info">{{ item.info }}</div>
							<div class="pic">{{ item.pic }}</div>
						</div>
					</router-link>
				</div>
			</div>	
		</div>
	</div>

</template>
<script>
export default {
	props:['content']

}
</script>
<style scoped>
	.content {
		overflow: hidden;
	}
	img {
		width: 100%;
	}
	.day-top {
		width: 100%;
	}
	.day-bottom {
		width: 103%;
	}
	.phone {
		width: 49%;
		float: left;
		margin-right: 2px;
	}
	.na {
		padding: 10px 10px;
    	text-align: left;

	}
	.name {
		overflow: hidden;
    	text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.info {
    	font-size: 12px;
    	color: rgba(0,0,0,.54);
	}
	.pic {
		font-size: 14px;
    	color: #ea625b;
    	display: inline-block
	}
    
</style>

