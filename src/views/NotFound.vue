<template>

    <div class="relative min-h-screen p-6 flex flex-col justify-center items-center overflow-hidden">

        <div class="z-10 text-center">
            <div class="flex justify-center">
                <router-link to="/">
                    <TurkeyIcon class="mb-4 w-24 sm:w-36 h-24 sm:h-36" />
                </router-link>
            </div>
            <p class="text-2xl font-semibold mb-2">
                Oepsie! We kunnen de pagina die je zoekt niet vinden.
            </p>
            <p>
                Misschien is'ie gevlogen...
                <router-link to="/"
                             class="text-purple-700 hover:underline focus:underline focus:outline-none">
                    wil je terug naar de hoofdpagina?
                </router-link>
            </p>
        </div>

        <img src="@/assets/bg/mustache.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, -277px)' }"
             alt="mustache background image">

        <img src="@/assets/bg/mustache.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-411px, -511px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="mustache background image">

    </div>

</template>

<script>
import TurkeyIcon from '@/components/TurkeyIcon'

export default {
    name: 'NotFound',
    components: { TurkeyIcon }
}
</script>
