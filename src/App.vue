<template>
	<div id="app">
		<router-view/>
		<loader v-if="$store.state.app.loading" :loading="$store.state.app.loading" :progress="$store.state.app.progress" :showText="$store.state.app.showText"></loader>
		<!-- <message></message> -->
	</div>
</template>

<script>
	import loader from '@/components/loader';
	export default {
		name: 'App',
		components: {
			loader
		}
	}
</script>
