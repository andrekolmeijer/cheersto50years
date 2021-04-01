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

            <AccommodationIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">

                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Accommodatie
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-4 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Als feestlocatie is gekozen voor
                            <a href="https://www.boerderij-mossel.nl/" class="text-purple-700 font-semibold" target="_blank">
                            <span class="hover:underline">Boerderij Mossel</span>.
                            </a>
                            Welke is gelegen op één van de mooiste en stilste plaatsen van ons land. &#128027; &#128029; &#129419;
                        </p>
                        <p class="text-base mx-6 text-center text-gray-800 font-semibold leading-7">
                            "Vanuit de boerderij wandelt u zo het wild tegemoet en op de velden er omheen kunt u onder andere wilde zwijnen, edelherten, reeën, dassen en vossen tegenkomen."
                        </p>
                        <p>
                            De boerderij heeft o.a. een gezellige woonkamer met eethoek en een aantal zitjes rondom de houtkachel. Vanuit de woon&shy;kamer is er zicht op een ruime tuin, de weilanden en het bos. &#128023; &#129420; &#129428;
                        </p>
                    </div>
                    <div class="mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg flex justify-center items-center">
                        <img src="@/assets/boerderij.jpg"
                             class="border-2 border-solid border-black rounded-xl shadow-md w-full sm:w-3/4"
                             alt="Boerderij Mossel">
                    </div>
                </div>

                <h2 class="mt-9 font-cursive text-xl xs:text-2xl font-semibold">
                    Toegankelijkheid
                </h2>
                <div class="md:flex items-center">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg flex justify-center items-center">
                        <img src="@/assets/boerderij-vos.jpg"
                             class="border-2 border-solid border-black rounded-xl shadow-md w-full sm:w-3/4"
                             alt="Vos">
                    </div>
                    <div class="mt-6 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Voor gasten is het toegestaan om met de auto naar de boerderij te komen. Verder is het gebied alleen toegankelijk voor voetgangers, fietsers en mensen te paard.
                        </p>
                        <p class="italic text-base">
                            Gebruik de
                            <router-link :to="{ name: 'Routebeschrijving' }"
                                         class="text-purple-700 font-semibold">
                                <span class="hover:underline">
                                    Routebeschrijving
                                </span>
                            </router-link>
                            om je weg te vinden naar dit stukje pracht en praal.
                        </p>
                    </div>
                </div>

                <h2 class="mt-9 font-cursive text-xl xs:text-2xl font-semibold">
                    Overnachting &#129417;
                </h2>
                <div class="md:flex items-center">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Voor diegene die blijven overnachten is het belangrijk om te weten dat het volgende zelf dient te worden meegeno&shy;men:
                        </p>
                        <ul class="text-center text-base font-semibold">
                            <li>Hoeslaken</li>
                            <li>Dekbed overtrek</li>
                            <li>Kussensloop</li>
                            <li>Handdoek</li>
                        </ul>
                        <p>
                            Het is ook mogelijk een linnen- en/of handdoekpakket te huren. De kosten hiervoor zijn €10 en €7,50 respectieve&shy;lijk.
                        </p>
                        <p class="font-semibold text-base">
                            Als je hier gebruik van wil maken, graag even van te voren aan mij (Bjorn) doorgeven a.j.b.
                        </p>
                    </div>
                    <div class="mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg flex justify-center items-center">
                        <img src="@/assets/boerderij-schuur.jpg"
                             class="border-2 border-solid border-black rounded-xl shadow-md w-full sm:w-3/4"
                             alt="Boerderij Mossel">
                    </div>
                </div>

            </div>

        </div>

        <img src="@/assets/bg/concert.svg"
             class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-115px, 480px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/concert.svg"
             class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-115px, 400px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/concert.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-325px, -200px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import AccommodationIcon from '@/components/AccommodationIcon'

export default {
    name: 'Accommodatie',
    components: { ArrowIcon, AccommodationIcon }
}
</script>
