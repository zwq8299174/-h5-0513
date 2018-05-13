<template>
	<div class="preview-page">
		<div class="img-wrapper">
			<img src="@/assets/img/index-bg.jpg"/>
		</div>
		<div class="bottom-bar">
			<!--<div class="btn-wrapper">-->
				<a class="btn-retry">
					<i class="icon">&#xe612;</i>
					<span>重拍</span>
				</a>
				<a class="btn-sure">
					<i class="icon">&#xe607;</i>
					<span>确认</span>
				</a>
			<!--</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		name:'PreviewPage',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/preview";
</style>