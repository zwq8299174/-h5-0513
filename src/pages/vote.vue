<template>
	<div class="vote-page">
		<countdown ></countdown>
		<div class="player-list">
			<div class="player-item" v-for="item in listVote" :key="item.key">
				<div class="img-wrapper fn-clear">
					<img class="fn-left" :src="item.url"/>
				</div>
				<div class="player-info">
					<p class="name">
						<span>{{item.nickname}}</span>
					</p>
					<p class="number">编号:&nbsp;&nbsp;{{item.user_id}}</p>
					<span class="poll">票数:&nbsp;&nbsp;<i>{{item.vote}}</i></span>
					<a class="btn-vote" @click="vote(item.id)">投票</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CountDown from '@/components/countdown';
	export default {
		name:'VotePage',
		components:{
			CountDown
		},
		data() {
			return {
				listVote:[]
			}
		},
		created(){
			this.getListData();
		},
		methods:{
			getListData(){
				this.API_listVote().then((d)=>{
					console.log(d);
					this.listVote = d.result;
				});
			},
			vote(id){
				this.API_vote(id).then((d)=>{
					console.log(d);
					if(d.code==200){
						alert('投票成功');
					}else{
						alert(d.msg);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vote";
</style>