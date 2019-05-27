import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
	uri: process.env.VUE_APP_GRAPHQL
})

Vue.use(VueApollo)

export function createProvider (options = {}) {
	return new VueApollo({
		defaultClient: apolloClient
	})
}
