<template>
	<div class="vote-page">
		<div class="countdown-wrapper">
			
		</div>
		<div class="player-list">
			<div class="player-item">
				<div class="img-wapper fn-clear">
					<img class="fn-left" src="@/assets/img/player.jpg"/>
				</div>
				<div class="player-info">
					<p class="name">
						<span>某某某</span>
					</p>
					<p class="number">编号:&nbsp;&nbsp;001</p>
					<span class="poll">票数:&nbsp;&nbsp;<i>13892</i></span>
					<a class="btn-vote">投票</a>
				</div>
			</div>
			<div class="player-item">
				<div class="img-wrapper">
					<img src="@/assets/img/player.jpg"/>
				</div>
				<div class="player-info">
					<p class="name">
						<span>某某某</span>
					</p>
					<p class="number">编号:&nbsp;&nbsp;001</p>
					<span class="poll">票数:&nbsp;&nbsp;<i>13892</i></span>
					<a class="btn-vote">投票</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'VotePage',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vote";
</style>