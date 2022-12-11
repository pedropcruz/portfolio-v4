<template>
	<div class="bot" :class="{ hide: !hideBot }">
		<div class="bot__header">
			<div class="bot__header-figure">
				<img src="~/assets/img/eu.jpg" alt="Pedro Pic" />
			</div>
			<div class="bot__header-description">
				<h4>Welcome to my website!</h4>
				<p>Ask me a question!</p>
			</div>
			<div class="bot__header-close">
				<button @click="toggleBot">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z"
							:fill="toggleSVGColors"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<div class="bot__content">
			<div class="bot-message date">
				<em>This conversation was created today.</em>
				<p>{{ useTodayDate }}</p>
			</div>
			<TransitionGroup tag="div" :css="false" @before-enter="onBeforeEnter" @enter="onEnter">
				<div v-for="(bot, index) in botInteraction" v-show="hideBot" class="bot-message" :key="bot" :data-index="index">
					{{ bot }}
				</div>
			</TransitionGroup>
			<TransitionGroup tag="div" :css="false" @before-enter="onBeforeEnter" @enter="onEnter">
				<div
					v-for="(user, index) in userInteraction"
					v-show="showUserMessages"
					class="bot-message me"
					:key="user"
					:data-index="index"
				>
					{{ user }}
				</div>
			</TransitionGroup>
			<TransitionGroup tag="div" :css="false" @before-enter="onBeforeEnterButtons" @enter="onEnterButtons">
				<div v-show="showQuestionButtons" key="0">
					<button class="anchor" v-for="interaction in buttonsForEachConversation" @click="addInteraction(interaction)">
						{{ interaction.label }}
					</button>
				</div>
			</TransitionGroup>
		</div>
	</div>
	<button class="btn" :class="{ hide: hideBot }" @click="toggleBot">
		<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M27.1245 15H24.875C18.869 15 14 19.6557 14 25.3986C14 31.1419 18.869 36.0251 24.875 36.0251H27.1245C28.5007 36.0251 29.8164 35.5501 31.0277 35.1042L34.7099 36.9196C35.5358 37.229 36.4153 36.6034 36.3434 35.7578L36.1004 31.4793C37.7493 29.6565 38 27.9982 38 25.3986C38 19.6557 33.131 15 27.1245 15ZM34.1036 31.5927C34.0733 31.0585 34.2583 30.5344 34.6172 30.1376C35.7262 28.9116 36 27.9263 36 25.3986C36 20.7808 32.0459 17 27.1245 17H24.875C19.954 17 16 20.7808 16 25.3986C16 30.0739 20.0109 34.0251 24.875 34.0251H27.1245C27.9586 34.0251 28.7311 33.8185 30.3367 33.2274C30.851 33.038 31.4205 33.068 31.9121 33.3104L34.2672 34.4715L34.1036 31.5927ZM34.3467 35.8712L34.3439 35.8218C34.3443 35.8381 34.3452 35.8546 34.3467 35.8712Z"
			></path>
		</svg>
	</button>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const hideBot = ref(false);
const showQuestionButtons = ref(false);
const showUserMessages = ref(false);
const timeOnShowConversation = ref(0);
const useTodayDate = ref('');
const colorMode = useColorMode();

interface IBotConversations {
	label: string;
	conversationList: string[];
	userTalk: string[];
}

const botInteraction = ref<string[]>([
	"Hello there! I'm Pedro assistant!",
	"I'm like Pedro, but I'm a little more shy. But that's not why I don't stop making good conversation!",
	'How can I help you today?',
]);

const userInteraction = ref<string[]>([]);

const buttonsForEachConversation = reactive<IBotConversations[]>([
	{
		label: '👋 I just wanted to say Hello',
		conversationList: [
			'Its-a-me Mario!',
			'Nah, joking. Well, Hello there!',
			'Thanks for saying Hello, I guess?',
			"I hope you enjoyed browsing my website! And if you haven't seen it yet, take a look, I plan on having more content to show you in the future!",
			'Is there anything else I can help you with?',
		],
		userTalk: ['I just really wanted to say... Hello!'],
	},
	{
		label: '😎 Interested in mentorship',
		conversationList: ['Yeap, Its-a-me Mario!', 'Nah, joking. Hello there mate! How can I help you today?'],
		userTalk: ['Interested in mentorship'],
	},
	{
		label: '🕵️ Looking for your old site',
		conversationList: ['Yeap, Its-a-me Mario!', 'Nah, joking. Hello there mate! How can I help you today?'],
		userTalk: ['Looking for your old site'],
	},
	{
		label: "🫵 I'd like to hire you!",
		conversationList: ['Yeap, Its-a-me Mario!', 'Nah, joking. Hello there mate! How can I help you today?'],
		userTalk: ["I'd like to hire you"],
	},
]);

const toggleBot = () => {
	hideBot.value = !hideBot.value;
	showQuestionButtons.value = false;
};

const toggleSVGColors = computed(() => (colorMode.preference === 'dark' ? 'white' : 'black'));

const onBeforeEnter = (el: Element) => {
	el.style.opacity = 0;
};

const onEnter = (el: Element, done: () => void) => {
	timeOnShowConversation.value += el.dataset.index * 0.25;
	gsap.to(el, {
		opacity: 1,
		delay: el.dataset.index * 0.25,
		onComplete: () => {
			if (botInteraction.value.length - 1 === Number(el.dataset.index)) {
				showQuestionButtons.value = true;
			}
			done();
		},
	});
};

const onBeforeEnterButtons = (el: Element) => {
	el.style.opacity = 0;
};

const onEnterButtons = (el: Element, done: () => void) => {
	gsap.to(el, {
		opacity: 1,
		delay: 0.25,
		onComplete: done,
	});
};

const addInteraction = (interaction: IBotConversations) => {
	showUserMessages.value = true;
	interaction.userTalk.forEach((talk: string) => userInteraction && userInteraction.value.push(talk));
	showQuestionButtons.value = false;
	botInteraction.value.push(...interaction.conversationList);
};

onMounted(() => {
	useTodayDate.value = new Date().toLocaleDateString(window.navigator.language, {
		hour: '2-digit',
		minute: '2-digit',
	});
});
</script>

<style lang="postcss" scoped>
.bot {
	@apply fixed left-auto top-auto bottom-10 right-10 rounded-md bg-slate-50 shadow-md dark:bg-slate-700;
	height: 600px;
	width: 350px;
	transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	opacity: 1;
	transform: translateZ(0);

	&.hide {
		@apply pointer-events-none z-10 opacity-0;
		transform: translate3d(0, 30px, 0);
	}
}

.bot__header {
	@apply absolute top-0 left-0 z-50 box-border flex w-full items-center justify-between bg-black/5 py-5 px-4 dark:bg-white/5 sm:rounded-t-md;
}

.bot__header-figure {
	@apply box-border min-w-0 max-w-full;

	& img {
		@apply mr-4 h-10 rounded-full border-2 border-solid border-white object-cover shadow-md;
		max-width: 40px;
	}
}

.bot__header-description {
	@apply box-border min-w-0 max-w-full flex-1;

	& h4 {
		@apply mb-1 text-sm font-bold;
	}

	& p {
		@apply text-xs opacity-80;
	}

	& h4,
	& p {
		@apply block text-black dark:text-white;
	}
}

.bot__header-close {
	@apply ml-auto box-border min-w-0 max-w-full;

	& button {
		@apply rounded-md border-0 py-3 px-4 hover:bg-slate-200 dark:text-white;
		transition: all 0.2s ease-in-out;
	}
}

.bot__content {
	@apply absolute top-20 w-full overflow-y-scroll px-4 pt-0 pb-10 sm:h-96;
	height: 520px;
}

.bot-message {
	@apply border-whitesmoke float-left border-2 border-solid border-black bg-teal-500 text-black dark:bg-red-500 dark:text-white;

	&.date {
		@apply float-none m-auto border-0 bg-transparent text-center text-xs opacity-30 dark:text-white;
	}

	&,
	&.me {
		@apply clear-both mt-4 rounded-xl p-4;
		max-width: 90%;
		line-height: 150%;
		font-size: 14px;
	}

	&.me {
		@apply float-right border-0 bg-cyan-600 p-4 text-white dark:bg-indigo-900 dark:text-white;
	}
}

button.anchor {
	@apply my-2 text-sm;

	&:first-child {
		@apply mt-5 mb-2;
	}
}

.btn {
	@apply fixed z-20 m-0 flex h-16 w-16 items-center justify-center rounded-full border-0 bg-slate-50 p-0 opacity-100 shadow-md dark:bg-neutral-700 sm:bottom-10 sm:right-10;

	& svg {
		@apply fill-whitesmoke;
	}

	&:hover {
		@apply bg-yellow;

		& svg {
			@apply fill-black;
		}
	}

	&.hide {
		@apply pointer-events-none -z-10 opacity-0;
		transform: scale3d(0.5, 0.5, 0.5);
	}
}
</style>
