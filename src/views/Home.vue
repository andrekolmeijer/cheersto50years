<template>

  <div :class="{ 'h-auto': store.state.messageRead || store.state.messageReadApril, 'h-screen': !store.state.messageRead || !store.state.messageReadApril }"
       class="relative min-h-screen p-12 flex flex-col items-center overflow-hidden">

    <!-- Original message -->
    <div v-if="store.state.messageRead === false"
         class="z-50 sm:mt-12 absolute inset-0 flex justify-center items-start">
        <div class="p-12 sm:py-8 max-w-2xl h-screen sm:h-auto bg-blue-400 sm:rounded-xl shadow-lg">
            <h2 class="font-cursive text-center text-xl xs:text-2xl sm:text-3xl font-semibold">
                Attentie
            </h2>
            <div class="mt-4 space-y-3 text-base xs:text-lg">
                <p>
                    Op dit moment is het nog onduidelijk of het feest kan doorgaan i.v.m. Corona. Mocht het feest niet doorgaan, dan wordt het gewoon verzet naar een moment dat het wel verantwoord is om bij elkaar te zijn.
                </p>
                <p class="text-center sm:hidden">
                    <span class="not-italic">
                        &#127880;
                    </span>
                </p>
                <p class="italic font-bold text-center">
                    <span class="not-italic hidden sm:inline">
                        &#127880;
                    </span>
                    Houd voor eventuele wijzigingen de website in de gaten.
                </p>
                <div class="flex justify-center items-center">
                    <button @click="messageRead"
                            class="mt-3 w-full sm:w-auto flex justify-center py-2 px-6 border-2 border-black rounded-lg shadow-sm text-base font-bold text-black bg-green-400 hover:bg-green-500 focus:bg-green-500 focus:outline-none active:bg-green-400 cursor-pointer">
                        Ik begrijp het!
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Message April 18th, 2021 -->
    <div v-if="store.state.messageRead">
        <div v-if="store.state.messageReadApril === false"
             class="z-40 sm:mt-12 absolute inset-0 flex justify-center items-start">
            <div class="p-12 sm:py-8 max-w-2xl h-screen sm:h-auto bg-blue-400 sm:rounded-xl shadow-lg">
                <h2 class="font-cursive text-center text-xl xs:text-2xl sm:text-3xl font-semibold">
                    Feest verplaatst
                </h2>
                <div class="mt-4 space-y-3 text-base xs:text-lg">
                    <p>
                        Zoals velen van jullie inmiddels al wel vernomen zullen hebben is het feest verplaatst. De nieuwe datum is:
                    </p>
                    <p class="font-bold text-center">
                        {{ store.state.Date.eventDate }}
                    </p>
                    <p>
                        De indeling m.b.t. de activiteiten blijft in principe hetzelfde. <span class="font-bold">Graag even opnieuw doorgeven of je dan ook kunt.</span>
                    </p>
                    <p class="italic">
                        Uiteraard zou je ook op een andere dag kunnen komen als dat beter uitkomt.
                    </p>
                    <div class="flex justify-center items-center">
                        <button @click="messageReadApril"
                                class="mt-3 w-full sm:w-auto flex justify-center py-2 px-6 border-2 border-black rounded-lg shadow-sm text-base font-bold text-black bg-green-400 hover:bg-green-500 focus:bg-green-500 focus:outline-none active:bg-green-400 cursor-pointer">
                            Ik begrijp het!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main body -->
    <div class="flex flex-col items-center max-w-5xl">

        <div class="z-10 mt-6">
            <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                Cheers to 50 years !
            </h1>
            <div class="md:flex">
                <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                    <p>
                        Op 26 mei 1971 heb ik voor het eerst het levenslicht gezien. Nu, 50 jaar later, wil ik dit graag vieren samen met jou! Het is feest in het weekend van:
                    </p>
                    <p class="font-bold text-center">
                        {{ store.state.Date.eventDate }}
                    </p>
                </div>
                <div class="mt-3 md:mt-6 text-lg w-full md:w-1/2 max-w-lg">
                    <p>
                        De feestlocatie is bijzonder en midden in de natuur. Op de Veluwe heb ik een boerderij afgehuurd, om er een feestweekend van te maken. &#127881; &#127881; &#127881;
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-20 mx-auto px-6 min-h-34">
            <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-12">
                <router-link to="/accommodatie">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <AccommodationIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Accommodatie
                        </span>
                    </div>
                </router-link>
                <router-link to="/cadeau">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <PresentIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Cadeau tip
                        </span>
                    </div>
                </router-link>
                <router-link to="/corona">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <CoronaIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Corona
                        </span>
                    </div>
                </router-link>
                <router-link to="/activiteiten">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <ScheduleIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Activiteiten
                        </span>
                    </div>
                </router-link>
                <router-link to="/aanwezigheid">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <PeopleIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Aanwezigheid
                        </span>
                    </div>
                </router-link>
                <router-link to="/routebeschrijving">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <DirectionsIcon class="z-10 w-24 sm:w-36 h-24 sm:h-36" />
                        <span class="font-bold text-center">
                            Routebeschrijving
                        </span>
                    </div>
                </router-link>
            </div>
        </div>

    </div>

    <img src="@/assets/bg/balloon.svg"
         class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
         :style="{ transform: 'translate(-65px, -797px)' }"
         alt="balloon background image">

    <img src="@/assets/bg/balloon.svg"
         class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
         :style="{ transform: 'translate(-65px, -482px)' }"
         alt="balloon background image">

    <img src="@/assets/bg/balloon.svg"
         class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
         :style="{ transform: 'translate(-683px, -336px)', maxHeight: 'calc(70vh - 8rem)' }"
         alt="balloon background image">

  </div>

</template>

<script>
import AccommodationIcon from '@/components/AccommodationIcon'
import CoronaIcon from '@/components/CoronaIcon'
import DirectionsIcon from '@/components/DirectionsIcon'
import PeopleIcon from '@/components/PeopleIcon'
import PresentIcon from '@/components/PresentIcon'
import ScheduleIcon from '@/components/ScheduleIcon'
import { useStore } from 'vuex'

export default {
    name: 'Home',
    components: { AccommodationIcon, CoronaIcon, DirectionsIcon, PeopleIcon, PresentIcon, ScheduleIcon },
    setup() {
        const store = useStore()

        function messageRead() {
            store.dispatch('setMessageRead')
        }

        function messageReadApril() {
            store.dispatch('setMessageReadApril')
        }

        return { store, messageRead, messageReadApril }
    }
}
</script>
