<template>
	<div id="app">
		<router-view/>
		<loader v-if="$store.state.app.loading" :loading="$store.state.app.loading"></loader>
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