<template>

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

            <ScheduleIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Activiteiten
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Gedurende het weekend zijn er meerdere activiteiten gepland. Hieronder vind je daar een overzicht van. Onder
                            <router-link :to="{ name: 'Aanwezigheid' }"
                                         class="text-purple-700 font-semibold">
                                <span class="hover:underline">
                                    Aanwezigheid
                                </span>
                            </router-link>
                            kun je zien wat je doorgegeven hebt met betrekking tot wanneer je komt.
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Wil je eerder komen om bijvoorbeeld een wandeling door de natuur te maken? Dat kan!
                            <span class="font-semibold">
                                Houd er echter wel rekening mee dat je het natuurgebied niet meer mag betreden na zons&shy;onder&shy;gang.
                            </span>
                        </p>
                    </div>
                </div>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-12 text-lg w-full md:w-1/2 max-w-lg">
                        <h2 class="font-bold">
                            Burgers, Beer and BBQ &#127828; &#127866; &#129385;
                        </h2>
                        <h3 class="text-base mb-3 font-light">
                            Vrijdag 30 april 19:00 uur
                        </h3>
                        <p class="text-base">
                            Deze avond staat in het teken van bier en BBQ. Mogelijk maken we ook een kampvuurtje. Dat is afhankelijk van het weer.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-12 text-lg w-full md:w-1/2 max-w-lg">
                        <h2 class="font-bold">
                            Coffee and Cake &#9749; &#127856;
                        </h2>
                        <h3 class="text-base mb-3 font-light">
                            Zaterdag 1 mei 13:00 uur
                        </h3>
                        <p class="text-base">
                            Tussen 13:00 en 15:00 uur staat er koffie en gebak klaar. Je bent natuurlijk vrij om eerder te komen en/of langer te blijven.
                        </p>
                    </div>
                </div>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 text-lg w-full md:w-1/2 max-w-lg">
                        <h2 class="font-bold">
                            Wining and Dining &#127863; &#127869;
                        </h2>
                        <h3 class="text-base mb-3 font-light">
                            Zaterdag 1 mei 17:00 uur
                        </h3>
                        <p class="text-base">
                            Naast gezelligheid wordt de avond aangekleed met lekkere wijn en culinaire gerechten. We eten om 19:00 uur.
                        </p>
                    </div>
                    <div class="mt-6 text-lg w-full md:w-1/2 max-w-lg">
                        <h2 class="font-bold">
                            Bikes and Beers &#128690; &#127867;
                        </h2>
                        <h3 class="text-base mb-3 font-light">
                            Zondag 2 mei 13:00 uur
                        </h3>
                        <p class="text-base">
                            Op zondag gaan we fietsen over de Veluwe en stoppen we ergens voor een drankje. Als je wil kun je een fiets reserveren bij Guill.
                        </p>
                        <p class="text-base mt-6 italic">
                            Voor een fles wijn kun je bij
                            <a href="https://guillvandevenfietsen.nl/" class="text-purple-700 font-semibold" target="_blank">
                            <span class="hover:underline">Guill van de Ven</span>
                            </a>
                            een fiets (of tandem!) reserveren. Uiterlijk 29 april doorgeven alsjeblieft.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <img src="@/assets/bg/hamburger.svg"
             class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-220px, -490px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/hamburger.svg"
             class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-220px, -460px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/hamburger.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(15px, -200px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import ScheduleIcon from '@/components/ScheduleIcon'

export default {
    name: 'Activiteiten',
    components: { ArrowIcon, ScheduleIcon }
}
</script>
