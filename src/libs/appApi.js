

export default {
	data() {
		return {

		}
	},
	methods: {
		API_checkAttend(){
			return this.$post('/campaign/checkAttend')
		},
		API_ossSign(){
			return this.$post('/campaign/ossSign')
		},
		API_listVote(){
			return this.$post('/campaign/listVote')
		},
		API_vote(id){
			return this.$post('/campaign/vote',{
				voteid:id
			})
		},
		API_attend(){
			return this.$post('/campaign/attend',{
				nickname:this.$store.state.app.nickname,
				url:this.$store.state.app.imgUrl,
			})
		},
		API_time(){
			return this.$post('/campaign/time')
		},
	}

}
