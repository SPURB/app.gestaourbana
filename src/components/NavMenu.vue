<template>
	<div class='NavMenu'>
		<ApolloQuery :query="query">

			<template slot-scope='{ result: { loading, error, data } }'>
				<span v-if='error'>error</span>
				<span v-if='loading'>loading</span>
				<section v-else>
					<p>{{ data }}</p>
				</section>
			</template>

		</ApolloQuery>
	</div>
</template>

<script>
import { GET_MENU_PRIMARY } from '../queries'

export default {
	name: 'NavMenu',
	data () {
		return {
			query: GET_MENU_PRIMARY
		}
	}
}
</script>
