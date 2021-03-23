<template>

    <div class="relative min-h-screen p-12 flex flex-col items-center overflow-hidden">

        <a @click="$router.go(-1)"
           class="self-start cursor-pointer">
            <div class="flex flex-col mb-12">
                <ArrowIcon class="z-10 w-12 h-12 transform -rotate-90 -translate-y-3.5" />
                <span class="font-semibold text-sm text-center -mt-5">
                    Home
                </span>
            </div>
        </a>

        <div class="flex flex-col items-center max-w-5xl min-h-full">

            <CoronaIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Corona
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Een feest midden in een pandemie, kan dat wel? &#129300;
                            <span class="font-bold">
                                Het feest kan alleen doorgaan als het ook veilig kan.
                            </span>
                            Hierbij gaan we uit van de richtlijnen van het RIVM. Vooralsnog staat het feest gepland voor het weekend van:
                        </p>
                        <p class="text-center font-bold">
                            30 april t/m 2 mei
                        </p>
                        <p class="italic text-base text-center">
                            <span class="not-italic">
                                &#127880;
                            </span>
                            Houd voor eventuele wijzigingen de website in de gaten.
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Mocht het uiteindelijk onverantwoord zijn om het feest door te laten gaan, dan wordt er een nieuwe datum gezocht en wordt het feest op een ander moment gevierd… safety first! 🦺 🥽 ⛑️
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <img src="@/assets/bg/champagne.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, -25px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/champagne.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-325px, -211px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import CoronaIcon from '@/components/CoronaIcon'

export default {
    name: 'Corona',
    components: { ArrowIcon, CoronaIcon }
}
</script>
