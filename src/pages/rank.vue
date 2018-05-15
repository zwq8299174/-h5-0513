<template>
	<div class="rank-page">
		<div class="top-3">
			<div class="rank-item" v-for="(item,index) in rankTop3" :key="item.key">
				<div class="img-wapper fn-clear top-img-wapper">
					<img class="fn-left" :src="item.url" :height="topImgWidth"/>
				</div>
				<div class="player-info">
					<div class="center">
						<svg class="svg-icon" aria-hidden="true">
						    <use xlink:href="#icon-guanjun" v-if="index==0"></use>
						    <use xlink:href="#icon-yajun" v-if="index==1"></use>
						    <use xlink:href="#icon-jijun" v-if="index==2"></use>
						</svg>
						<span class="name">{{item.nickname}}</span>
						<span class="number">编号:&nbsp;&nbsp;{{item.id}}</span>
					</div>
					<p class="poll">票数:&nbsp;&nbsp;{{item.vote}}</p>
				</div>
			</div>
		</div>
		<div class="other-rank">
			<div class="rank-item" v-for="(item,index) in listRank" :key="item.key">
				<div class="img-wapper fn-clear bottom-img-wapper">
					<img class="fn-left" :src="item.url" :height="bottomImgWidth"/>
				</div>
				<div class="player-info">
					<div class="center">
						<span class="name"><i>{{index+4}}&nbsp;&nbsp;</i>{{item.nickname}}</span>
						<span class="number">编号:&nbsp;&nbsp;{{item.id}}</span>
					</div>
					<p class="poll">票数:&nbsp;&nbsp;{{item.vote}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Utils from '@/libs/utils.js';
	export default {
		name:'RankPage',
		data() {
			return {
				listRank:[],
				rankTop3:[],
				topImgWidth:0,
				bottomImgWidth:0
			}
		},
		created(){
			this.getListData();
		},
		methods:{
			getListData(){
				this.API_listVote().then((d)=>{
					this.rankTop3 = d.result.slice(0,3);
					this.listRank = d.result.slice(3);
					this.$nextTick(()=>{
						this.topImgWidth = this.$el.querySelector('.top-img-wapper').offsetWidth;
						this.bottomImgWidth = this.$el.querySelector('.bottom-img-wapper').offsetWidth;
					})
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/rank";
</style>