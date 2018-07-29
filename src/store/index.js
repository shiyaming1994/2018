import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		// 购物车数据
		carData:[],
		// 订单数据
		order:[],
		receiveInfo : [{
    	  "name": "小明",
    	  "phone": "13811111111",
    	  "cityId": 111,
    	  "add": "人民广场",
    	  "default": false
    	},{
    	  "name": "小红",
    	  "phone": "18300000000",
    	  "cityId": 222,
    	  "add": "人民广场往南100米",
    	  "default": true
    	}]
	},
	// 计算
	getters:{
		// 订单总价（有错）
		setPrice(state){
			let price = 0
			state.order.forEach(goods => {
				goods.goodsData.forEach(good =>{
					price = good.count * good.pic
				})
			}) 
			return price 
		},
		// 订单总数量
		setCount(state){
			let count = 0
			state.order.forEach(goods => {
				count = goods.count
			})
			return count 
		},
		// 数量
		cartCount(state){
			let count = 0
			state.carData.forEach(goods => {
				count += goods.count
			})
			return count
		},
		// 价钱
		cartPic(state){
			let price = 0
			state.carData.forEach(goods => {
				price += goods.count * goods.pic
			})
			return price
		},	
		// 地址
		receive(state){
			let receive = []
			state.receiveInfo.forEach(goods => {
				if (!goods.default) return	
				receive.push(goods)	
			})
			return receive
			
		},
		// 购物车数据
		checkGoods(state){
			let checkGoods = []
			state.carData.forEach(goods => {
				checkGoods.push(goods)
			})
			return checkGoods
		},
	},
	mutations:{
		// 添加购物车
		addcart(state,data){
			let one = true
			state.carData.forEach(goods => {
				if(goods.id === data.info.id){
					goods.count ++
					one = false
					return
				}
			})
			if(one){
				let goodsData = data.info
				Vue.set(goodsData,'count',data.count)
				state.carData.push(goodsData)
			}	
		},
		// 删除商品
		delCart(state,id){
			state.carData.forEach((goods,index) => {
				if(goods.id === id){
					state.carData.splice(index,1)
					return
				}
			})
		},
		// 增加商品数量
		addCount(state,id){
			state.carData.forEach((goods,index) => {
				if(goods.id === id){
					if(goods.count >= 5) return
					goods.count ++
					return
				}
			})
		},
		// 减少商品数量
		subCount(state,id){
			state.carData.forEach((goods,index) => {
				if(goods.id === id){
					if(goods.count <= 1) return
						goods.count --
						return	
				}
			})
		},
		// 提交订单
		submit(state,data){
			state.order.unshift(data)
			state.carData = []
		},
		// 支付
		payNow(state,id){
			state.order.forEach(order => {
				if(order.orderId === id){
					order.isPay = true
					return
				}
			})
		},
		// 默认收货地址
		defaultRess(state,id){
			state.receiveInfo.forEach(receive => {
				receive.default = false
				if(receive.cityId === id){
					receive.default = true
					return
				}
			})
		},
		// 添加收货地址
		submindz(state,data){
			state.receiveInfo.push(data)	
		}
	}
})

export default store