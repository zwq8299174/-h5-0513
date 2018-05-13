<template>
	<div class="rank-page">
		<div class="top-3">
			<div class="rank-item">
				<div class="img-wapper fn-clear">
					<img class="fn-left" src="@/assets/img/player.jpg"/>
				</div>
				<div class="player-info">
					<div class="center">
						<span class="name">某某某</span>
						<span class="number">编号:&nbsp;&nbsp;001</span>
					</div>
					<p class="poll">票数:&nbsp;&nbsp;13852</p>
				</div>
			</div>
		</div>
		<div class="other-rank">
			<div class="rank-item">
				<div class="img-wapper fn-clear">
					<img class="fn-left" src="@/assets/img/player.jpg"/>
				</div>
				<div class="player-info">
					<div class="center">
						<span class="name"><i>4&nbsp;&nbsp;</i>某某某</span>
						<span class="number">编号:&nbsp;&nbsp;001</span>
					</div>
					<p class="poll">票数:&nbsp;&nbsp;13852</p>
				</div>
			</div>
			<div class="rank-item">
				<div class="img-wapper fn-clear">
					<img class="fn-left" src="@/assets/img/player.jpg"/>
				</div>
				<div class="player-info">
					<div class="center">
						<span class="name"><i>4&nbsp;&nbsp;</i>某某某</span>
						<span class="number">编号:&nbsp;&nbsp;001</span>
					</div>
					<p class="poll">票数:&nbsp;&nbsp;13852</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'RankPage',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/rank";
</style>