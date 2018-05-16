<template>
	<div class="take-picture-wrapper">
		<div class="main-wrapper" ref="mainWrapper">
			<img ref="mainImg" width="100%"/>
			<div class="main-btn icon" ref="mainBtn">
				&#xe618;
			</div>
			<span>点击拍摄照片</span>
		</div>
		<!--<img ref="mainImg"/>
		<input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)">-->
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
			this.$store.state.app.showText = true;
		},
		methods:{
			init(){
				let obj = {
					container : this.$refs.mainWrapper,
					browserBtn : this.$refs.mainBtn,
					mainImg:this.$refs.mainImg,
					prefix : 'player_', // 上传过后文件名的前缀,可以根据功能模块命名
					fileType : 'picture', // 可以是picture或video, 支持的格式在upload.js中
					beforeUpload_fn : ()=>{
						this.$store.state.app.loading = true;
						console.log('上传前');
					},
					uploading_fn : (percent)=> { // 上传中的回调
						console.log('上传进度：' + percent + ' %');
						this.$store.state.app.progress = percent+'%';
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
					error_fn  : (e)=>{
						if(e.code==-600 || (e.code==-200&&e.status==400)){
							alert('文件大小超过限制!');
						}else{
							alert('上传失败请重试');
						}
						console.log(e);
						this.$store.state.app.loading = false;
					}
				};
				this.$oss([obj]); 
			},
			change(e){
				this.clip(e,{
		          resultObj : this.$refs.mainImg,
		          aspectRatio : 1
		        });
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/take-picture";
</style>