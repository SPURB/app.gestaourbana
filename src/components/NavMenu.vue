<template>
	<div class='NavMenu'>

		<ApolloQuery
			:query="require('../connections/graphql/GetMenuPrimary.gql')"
			:variables="{ id: 'TWVudTo1MzU=' }"
		>
			<template slot-scope="{ result: { error, data } }">
				<div v-if="error" class="error">...erro no menu :( {{ error }}</div>
				<div v-else-if="data" class="result">{{ data.menu }}</div>
				<div v-else class="loading">...carregando menu...</div>
			</template>
		</ApolloQuery>
	</div>
</template>
<script>
export default {
	name: 'NavMenu',
	data () {
		return {
		}
	}
}
</script>
