<template>
	<div>
		<h3>Hello there! 👋</h3>
		<p>I’m a Frontend developer, from Portugal 🇵🇹.</p>
		<p>Currently working at <strong>Valtech</strong>, with some experience on UI/UX layers. 🧑‍🎨</p>
		<p>
			Welcome to my new website (maybe v4?) and I really want and like to do some changes on my portfolio every year,
			because I think I can improve more the way I communicate/work with my designs and code!
		</p>
		<p>
			Love what I do everyday, have a beautifull family, father of 1 child and 1 dog, and very happy for what I have and
			continue fighting for.
		</p>
		<div class="mt-32">
			<h1>Some Articles</h1>
			<ul class="no-style">
				<li v-for="post in data">
					<PostPreviewVertical :post="post" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IPost } from '~~/components/PostPreview';

const verticalPostExample: IPost = reactive({
	title: 'Os melhores livros para começares a programar',
	description:
		'Queres começar a programar e precisas de te inspirar? Então estás no sítio certo! Aqui vou dar-te opções que a mim mudaram o meu dia-a-dia e a minha vida como developer',
	date: '04/04/1991',
	link: '/work',
});

const data: IPost[] = Array(10).fill(verticalPostExample);
</script>

<style lang="postcss" scoped>
h1.title-with-bg {
	@apply bg-yellow inline-block p-4 dark:text-black;
}
ul.no-style {
	@apply m-0 list-none p-0;

	& li {
		@apply mb-8 p-0;
	}
}
</style>
