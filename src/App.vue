<template>
	<div id="gestaourbana">
		<router-view />
		<NavMenu />
	</div>
</template>
<script>
import NavMenu from '@/components/NavMenu'

export default {
	name: 'gestaourbana',
	$el: '#gestaourbana',
	components: {
		NavMenu
	}
}
</script>

<style lang="scss"></style>
