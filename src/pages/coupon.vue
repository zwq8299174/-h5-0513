<template>
	<div class="coupon-page">
		<div class="coupon-item" v-for="item in couponList" :key="item.key">
			<h2>{{item.name}}</h2>
			<div class="main-content">
				<div class="symbol">
					<i class="fn-rmb">￥</i>
				</div>
				<div class="amount" :style="{'font-size':item.fontSize?item.fontSize:'120px'}">
					{{item.amount}}
				</div>
				<div class="unit">
					<span class="desc">
						优惠券
					</span>
					<i>{{item.unit}}</i>
				</div>
			</div>
			<p class="en-desc">coupon</p>
			<p class="restrict"><span>{{item.astrict}}</span></p>
			<p class="line-top line"></p>
			<p class="line-bottom line"></p>
			<div class="left-gap gap">
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
				<i class="icon">&#xe615;</i>
			</div>
			<div class="right-gap gap">
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
				<i class="icon">&#xe619;</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CouponPage',
		data() {
			return {
				couponList:[
					{
						name:'发布“精装修标准(上海)”',
						amount:'388',
						unit:'元/㎡',
						astrict:'基础工程裸价'
					},
					{
						name:'上海设计团队设计体验',
						amount:'688',
						unit:'元',
						astrict:'150 m²以内房型'
					},
					{
						name:'上北美简约全屋整装',
						amount:'999',
						unit:'元/㎡',
						astrict:'数量有限先到先得'
					},
					{
						name:'样板房主材',
						amount:'满万送千',
						unit:'',
						astrict:'累计金额',
						fontSize:'70px'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/coupon";
</style>