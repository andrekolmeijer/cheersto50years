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

            <PresentIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Cadeau tip
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Maak je vooral niet druk over een cadeau om te geven. Een opblaasbare Abraham, lied of andere activiteiten hoeven ook al niet. Dat jij er bent is voor mij het mooiste geschenk! &#127873;
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Wel wil ik jullie vragen om een kleine vergoeding, omdat het hele weekend wordt verzorgd met eten, drinken en overnachting. &#127829; &#127866; &#128719;
                        </p>
                        <p class="italic text-base">
                            Tijdens het feest staat er een fooienpot klaar. Daar mag je naar eigen inzicht wat in doen.
                            <span class="not-italic">
                                &#128591;
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <img src="@/assets/bg/beer.svg"
             class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-220px, 175px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/beer.svg"
             class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-250px, 80px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/beer.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-925px, -211px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import PresentIcon from '@/components/PresentIcon'
import Messages from '@/components/Messages'

export default {
    name: 'Cadeau',
    components: { ArrowIcon, PresentIcon, Messages }
}
</script>
