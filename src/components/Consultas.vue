<template>
	<div class="Consultas">
		<div v-if='!consultas.length'>...carregando consultas...</div>
		<div v-else-if='error'>...erro... {{ error }} </div>
		<div v-else-if='consultas.length'>
			{{ consultas }}
		</div>
	</div>
</template>
<script>
import apiconsultas from '../connections/rest/consultas'

export default {
	name: 'Consultas',
	data () {
		return {
			consultas: [],
			error: false
		}
	},
	mounted () {
		this.fetch('consultas')
	},
	methods: {
		fetch (table) {
			apiconsultas.get('/' + table)
				.then(response => { this.consultas = response.data })
				.catch(error => { this.error = error })
		}
	}
}
</script>
