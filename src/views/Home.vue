<template>

    <Messages />

    <div class="min-h-screen p-12 flex flex-col items-center">

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
import Messages from '@/components/Messages'
import { useStore } from 'vuex'

export default {
    name: 'Home',
    components: { AccommodationIcon, CoronaIcon, DirectionsIcon, PeopleIcon, PresentIcon, ScheduleIcon, Messages },
    setup() {
        const store = useStore()

        return { store }
    }
}
</script>
