<template>
	<aside>
		<nav>
			<div class="brand">
				<img v-show="$colorMode.preference === 'dark'" src="~/assets/img/logo_white.svg" alt="personal-brand" />
				<img v-show="$colorMode.preference === 'light'" src="~/assets/img/logo.svg" alt="personal-brand" />
			</div>
			<div class="me">
				<div
					class="shadow-brand dark:border-whitesmoke dark:shadow-brand-invert mx-auto h-16 w-16 rounded-lg border-4 border-black md:h-32 md:w-32"
				>
					<img
						src="~/assets/img/eu.jpg"
						alt="me"
						class="h-full min-h-full max-w-full rounded border-none object-cover align-middle shadow"
					/>
				</div>
				<h1 class="mt-4 text-sm sm:text-2xl">Pedro Cruz</h1>
			</div>

			<ul>
				<li class="relative">
					<NuxtLink class="anchor" to="/">Home</NuxtLink>
				</li>
				<li class="relative">
					<NuxtLink class="anchor" to="/about">About me</NuxtLink>
				</li>
				<li class="relative">
					<NuxtLink class="anchor" to="/work">Work</NuxtLink>
				</li>
				<li class="relative">
					<NuxtLink class="anchor" to="/blog">Blog</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
aside {
	@apply relative 
		z-20 
		flex 
		flex-wrap 
		items-center 
		justify-between 
		px-6 
		py-4 
		text-center 
		md:fixed 
		md:left-0 
		md:top-0 
		md:bottom-0 
		md:block 
		md:w-64 
		md:flex-row 
		md:flex-nowrap 
		md:overflow-hidden 
		md:overflow-y-auto;

	& nav {
		@apply mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch;

		& div.brand {
			@apply mx-auto w-32 pb-0;
		}

		& div.me {
			@apply mx-auto my-4;

			& img {
				@apply relative z-10 h-full w-full rounded-md bg-center object-center shadow-lg ring-1 ring-inset;
			}
		}

		& li {
			& a.anchor {
				@apply my-4 text-xl;
			}
		}
	}
}
</style>
