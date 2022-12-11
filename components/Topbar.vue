<template>
	<nav :class="{ 'hide-nav': !showHeader }">
		<ul>
			<li class="relative">
				<label for="default-toggle" class="relative">
					<input
						type="checkbox"
						:value="$colorMode.preference === 'dark'"
						id="default-toggle"
						class="checkbox cursor-pointer"
						@click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
					/>
				</label>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const lastScrollPosition: Ref<number> = ref(0);
const showHeader: Ref<boolean> = ref(true);
const scrollOffset: Ref<number> = ref(40);

const onScroll = () => {
	if (window.scrollY < 0) return;

	if (Math.abs(window.scrollY - lastScrollPosition.value) < scrollOffset.value) {
		return;
	}

	showHeader.value = window.scrollY < lastScrollPosition.value;
	lastScrollPosition.value = window.scrollY;
};

onMounted(() => {
	lastScrollPosition.value = window.scrollY;
	window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<style lang="postcss" scoped>
nav {
	@apply fixed top-0 right-0 z-10 h-16 w-full translate-y-0;

	transform: translateY(0);
	transition: transform 300ms linear;

	&.hide-nav {
		transform: translateY(-100%);
	}

	& li {
		float: right;

		& label {
			display: inline-block;
			@apply h-10 w-full;

			& input[type='checkbox'] {
				@apply right-24 m-0;
				font-size: 2rem; /* reset */
				color: currentColor; /* so :before, :after color works */
				position: absolute;

				width: 2em;
				height: 1em;

				/* optional vertical centering */
				top: 50%;

				outline: 0; /* add the outline 1 level up instead */
				appearance: none; /* hide default checkbox */

				/* hide the checkbox in iOS (and others?) */
				background: transparent;
				border-radius: 0;
				border: 0;

				&:before {
					width: 2em;
					height: 1em;
					box-sizing: border-box;
					content: '';
					border: 0.1em solid currentColor;
					position: absolute;
					border-radius: 1em;
					transition-duration: 200ms;
					transition-property: background;
				}

				&:after {
					box-sizing: border-box;
					content: '';
					width: 0.6em;
					height: 0.6em;
					top: 0.2em;
					left: 0.2em;
					@apply dark:bg-whitesmoke bg-black;
					position: absolute;
					border-radius: 1em;
					transition-duration: 200ms;
					transition-property: transform;
				}

				&:checked:before {
					@apply dark:border-whitesmoke border-black bg-transparent;
				}

				&:checked:after {
					@apply dark:bg-whitesmoke translate-x-8 bg-black;
				}
			}
		}
	}
}
</style>
