import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import GetTodos from '@/Queries/GetConsulta.gql'

const apolloClient = new ApolloClient({
	clientState: {
		defaults: {
			consultas: []
		},
		resolvers: {
			Mutation: {
				addConsulta: (_, { consulta }, { cache }) => {
					const { consultas } = cache.readQuery({ query: GetTodos })

					cache.writeData({
						data: {
							consultas: consultas.concat({
								consulta,
								id: 10, // parseInt(idConsulta)
								__typename: 'Consulta'
							})
						}
					})
					return null
				}
			}
		}
	},
	uri: process.env.VUE_APP_GRAPHQL_GU_URL
})

Vue.use(VueApollo)

export function createProvider (options = {}) {
	return new VueApollo({
		defaultClient: apolloClient
	})
}
