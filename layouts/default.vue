<template>
	<div class="container mx-auto">
		<Header />
		<Topbar />
		<main>
			<article class="prose dark:prose-invert lg:prose-xl min-w-full">
				<slot />
			</article>
		</main>
		<Pedrobot />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Pedro Cruz - portuguese frontend developer',
	meta: [{ name: 'description', content: 'My amazing site.' }],
});
</script>

<style lang="postcss" scoped>
main {
	@apply relative mx-8 pt-28 md:ml-64;
	align-content: safe center;
}
</style>
