<template>

    <Messages />

    <div class="relative min-h-screen p-12 flex flex-col items-center overflow-hidden">

        <router-link :to="{ name: 'Home' }"
                     class="self-start cursor-pointer">
            <div class="flex flex-col mb-12">
                <ArrowIcon class="z-10 w-12 h-12 transform -rotate-90 -translate-y-3.5" />
                <span class="font-semibold text-sm text-center -mt-5">
                    Home
                </span>
            </div>
        </router-link>

        <div class="flex flex-col items-center max-w-5xl min-h-full">

            <CoronaIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Corona
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            In overleg met <span class="font-semibold">Boererij Mossel</span> is besloten om het feest door te laten gaan. &#127881; &#127881; &#127881;
                        </p>
                        <p>
                            Hierbij worden de
                            <a href="https://www.rijksoverheid.nl/binaries/rijksoverheid/documenten/publicaties/2021/05/11/beeldsamenvatting-coronamaatregelen/beeldsamenvatting-coronaregels-20210517.pdf"
                               class="text-purple-700 font-semibold"
                               target="_blank">
                                <span class="hover:underline">coronaregels</span>
                            </a>
                            in acht genomen. Het feest zal hoofdzakelijk buiten plaatsvinden en er zijn voldoende parasols en tenten om ook bij regen buiten te kunnen zitten. <span class="italic">Neem eventueel een extra trui mee.</span>
                        </p>
                        <p>
                            M.b.t. de slaapplekken willen we mensen die samen komen bij elkaar op de kamer indelen. Gezien er een aantal afmeldingen zijn denken we daar onderling wel aan uit te komen.
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p class="font-semibold">
                            Voor diegene die het niet zien zitten om te blijven slapen mag er vanwege Corona ook na zonsondergang over het zandpad naar de openbare weg gereden worden.
                        </p>
                        <p>
                            Uiteraard ben je zelf verantwoordelijk voor je eigen veiligheid. Dus probeer zelf in te schatten of naar huis toe rijden wellicht verstandiger is... safety first! 🦺 🥽 ⛑️
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <img src="@/assets/bg/champagne.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, -25px)' }"
             alt="champagne bottle background image">

        <img src="@/assets/bg/champagne.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-325px, -211px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="champagne bottle background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import CoronaIcon from '@/components/CoronaIcon'
import Messages from '@/components/Messages'
import { useStore } from 'vuex'

export default {
    name: 'Corona',
    components: { ArrowIcon, CoronaIcon, Messages },
    setup() {
        const store = useStore()

        return { store }
    }
}
</script>
