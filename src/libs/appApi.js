

export default {
	data() {
		return {

		}
	},
	methods: {
		API_checkAttend(){
			return this.$post('/onsite/campaign/checkAttend')
		},
		API_ossSign(){
			return this.$post('/onsite/campaign/ossSign')
		},
		API_listVote(){
			return this.$post('/onsite/campaign/listVote')
		},
		API_vote(id){
			return this.$post('/onsite/campaign/vote',{
				voteid:id
			})
		},
		API_attend(){
			return this.$post('/onsite/campaign/attend',{
				nickname:this.$store.state.app.nickname,
				url:this.$store.state.app.imgUrl,
			})
		},
		API_time(){
			return this.$post('/onsite/campaign/time')
		},
	}

}
