<template>
	<div class="vote-page">
		<count-down :currentTime="currenttime" :startTime="starttime" :endTime="endtime" @endCallback="end"></count-down>
		<div class="player-list">
			<div class="player-item" v-for="item in listVoteLoad" :key="item.key">
				<div class="img-wrapper fn-clear">
					<img class="fn-left" :src="item.url" :height="imgWidth+'px'"/>
				</div>
				<div class="player-info">
					<p class="name">
						<span>{{item.nickname}}</span>
					</p>
					<p class="number">编号:&nbsp;&nbsp;{{item.id}}</p>
					<span class="poll">票数:&nbsp;&nbsp;<i>{{item.vote}}</i></span>
					<a class="btn-vote" @click="vote(item.id)">投票</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Utils from '@/libs/utils.js';
	import CountDown from '@/components/countdown';
	export default {
		name:'VotePage',
		components:{
			CountDown
		},
		data() {
			return {
				loadCount:0,
				listVote:[],
				listVoteLoad:[],
				imgWidth:0,
				currenttime:new Date().getTime(),
				starttime:new Date().getTime(),
				endtime:new Date().getTime()+80000
			}
		},
		created(){
			this.getListData();
			//获取线上真实时间,测试期间可以不获取
//			this.getTime();
			this.$store.state.app.showText = false;
//			this.$store.state.app.loading = true;
		},
		methods:{
			getListData(){
				this.API_listVote().then((d)=>{
					console.log(d);
					this.listVote = d.result;
					this.listVoteLoad = d.result;
//					this.preLoad();
					this.$nextTick(()=>{
						this.imgWidth = this.$el.querySelector('.img-wrapper').offsetWidth;
					})
				});
			},
			vote(id){
				this.API_vote(id).then((d)=>{
					console.log(d);
					if(d.code==200){
						this.$MessageShow({
							content:'每人每天都可投票一次哦～'
						});
					}else{
						alert(d.msg);
					}
				});
			},
			end(){
				alert('投票结束');
				this.$router.push({
					name:'rank'
				});
			},
			getTime(){
				this.API_time().then((d)=>{
					this.currenttime = d.result.currenttime;
					this.starttime = d.result.starttime;
					this.endtime = d.result.endtime;
				});
			},
			preLoad(){
				this.listVote.forEach((item,index)=>{
					let oImg = new Image();
        				oImg.onload = oImg.onerror = (e) => {
        					this.loadFn(e,oImg,index);
        				};
        				oImg.src = item.url;
				});
			},
			loadFn(e,o,i){
				this.loadCount++;
				if(e.type=='error') return;
				this.$set(this.listVote[i],'height',this.imgWidth);
//				this.$set(this.listVote[i],'height',Math.round(this.imgWidth/o.width*o.height));
				if(this.loadCount==this.listVote.length){
					this.listVoteLoad = Utils.deepCopy(this.listVote);
					this.$store.state.app.loading = false;

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vote";
</style>
