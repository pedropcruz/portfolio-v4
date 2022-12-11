<template>
	<div class="card">
		<h3>{{ post.title }}</h3>
		<p>{{ post.description }}</p>
		<div class="bottom">
			<p class="datetime">{{ post.date }}</p>
			<NuxtLink class="anchor" :to="post.link">Follow</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IPost } from './index';

interface Props {
	post: IPost;
}

defineProps<Props>();
</script>

<style lang="postcss" scoped>
div.card {
	@apply shadow-brand dark:border-whitesmoke dark:shadow-brand-invert inline-block rounded-lg border-4 border-black p-2 px-4 text-2xl;

	& h3 {
		@apply mt-0 hover:cursor-pointer hover:underline;
	}

	& div.bottom {
		@apply flex items-center justify-between text-gray-400;

		& p.datetime {
			@apply m-0;
		}

		& a.anchor {
			@apply mt-0 text-lg no-underline;
		}
	}
}
</style>
