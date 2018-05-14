<template>
	<div class="take-picture-wrapper">
		<div class="main-wrapper" ref="mainWrapper">
			<div class="main-btn icon" ref="mainBtn">
				&#xe618;
			</div>
			<span>点击拍摄照片</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TakePicturePage',
		data() {
			return {
				
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				let obj = {
					container : this.$refs.mainWrapper,
					browserBtn : this.$refs.mainBtn,
					dir : 'campaign', // 上传到哪个目录下
					prefix : 'player_', // 上传过后文件名的前缀,可以根据功能模块命名
					fileType : 'picture', // 可以是picture或video, 支持的格式在upload.js中
					beforeUpload_fn : ()=>{
						this.$store.state.app.loading = true;
						console.log('上传前');
					},
					uploading_fn : (percent)=> { // 上传中的回调
						console.log('上传进度：' + percent + ' %');
					},
					success_fn : (data)=> { // 上传成功后的回调
						console.log(data);
						if(!data) return;
						this.$store.state.app.imgUrl = data.fileUrl;
						setTimeout(()=>{
							this.$store.state.app.loading = false;
							this.$router.push({
								name:'preview'
							});
						},500);
					},
					error_fn  : ()=>{
						alert('上传失败请重试');
						this.$store.state.app.loading = false;
					}
				};
				this.$oss([obj]); 
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/take-picture";
</style>