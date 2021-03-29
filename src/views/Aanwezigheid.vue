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

            <PeopleIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Aanwezigheid
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Op deze pagina houden we bij wanneer iedereen komt. Ook kun je hier zien of je aangegeven hebt van een linnenpakket en/of fiets gebruik te willen maken.
                        </p>
                        <p>
                            Voor data en tijden, kun je terecht op de
                            <router-link :to="{ name: 'Activiteiten' }"
                                         class="text-purple-700 font-semibold">
                                <span class="hover:underline">
                                    Activiteiten
                                </span>
                            </router-link>
                            pagina.
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Mocht je nog bepaalde dieet wensen hebben (vegetarisch, allergieën of andere zaken), ook dat kun je aan me doorgeven. &#127814; &#127805; &#127789;
                        </p>
                    </div>
                </div>
            </div>

            <div class="md:flex justify-center w-full">

                <!-- Table 1 - Burgers, Beer and BBQ -->
                <div class="flex justify-start w-full">
                    <div class="sm:mr-6 mt-12 flex flex-row w-full lg:w-3/4 hyphens-none">
                        <table class="min-w-full">
                            <caption class="text-left text-sm">
                                <div class="flex items-baseline">
                                    <h2 class="font-semibold">
                                        Burgers, Beer and BBQ
                                        <span class="font-light">
                                            ({{ store.state.Attendees.burgersBeerAndBBQ.length }})
                                        </span>
                                    </h2>
                                </div>
                            </caption>
                            <thead class="border-b-2 border-gray-900">
                                <th scope="col" class="relative sm:pl-6 py-3 w-1/3">
                                    <span class="sr-only">
                                        Name
                                    </span>
                                </th>
                                <th scope="col" class="py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Linnen
                                </th>
                                <th scope="col" class="sm:pr-6 py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Dieet
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="(person, index) in store.state.Attendees.burgersBeerAndBBQ" :key="index">
                                    <td class="sm:pl-6 pt-4 w-1/3 align-baseline">
                                        {{ person.name }}
                                    </td>
                                    <td class="pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.linnen === 'ja' || person.linnen === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.linnen === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.linnen === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.linnen !== 'ja' && person.linnen !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.linnen }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="sm:pr-6 pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.diet === 'ja' || person.diet === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.diet === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.diet === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.diet !== 'ja' && person.diet !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.diet }}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Table 2 - Coffee and Cake -->
                <div class="flex justify-start w-full">
                    <div class="mt-12 flex flex-row w-full lg:w-3/4 hyphens-none">
                        <table class="min-w-full">
                            <caption class="text-left text-sm">
                                <div class="flex items-baseline">
                                    <h2 class="font-semibold">
                                        Coffee and Cake
                                        <span class="font-light">
                                            ({{ store.state.Attendees.coffeeAndCake.length }})
                                        </span>
                                    </h2>
                                </div>
                            </caption>
                            <thead class="border-b-2 border-gray-900">
                                <th scope="col" class="relative sm:pl-6 py-3 w-1/3">
                                    <span class="sr-only">
                                        Name
                                    </span>
                                </th>
                                <th scope="col" class="py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Dieet
                                </th>
                                <th scope="col" class="sm:pr-6 py-3 w-1/3"></th>
                            </thead>
                            <tbody>
                                <tr v-for="(person, index) in store.state.Attendees.coffeeAndCake" :key="index">
                                    <td class="sm:pl-6 pt-4 w-1/3 align-baseline">
                                        {{ person.name }}
                                    </td>
                                    <td class="pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.diet === 'ja' || person.diet === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.diet === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.diet === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.diet !== 'ja' && person.diet !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.diet }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="sm:pr-6 pt-4 w-1/3 align-baseline"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div class="md:flex justify-center w-full">

                <!-- Table 3 - Wining and Dining -->
                <div class="flex justify-start w-full">
                    <div class="sm:mr-6 mt-12 flex flex-row w-full lg:w-3/4 hyphens-none">
                        <table class="min-w-full">
                            <caption class="text-left text-sm">
                                <div class="flex items-baseline">
                                    <h2 class="font-semibold">
                                        Wining and Dining
                                        <span class="font-light">
                                            ({{ store.state.Attendees.winingAndDining.length }})
                                        </span>
                                    </h2>
                                </div>
                            </caption>
                            <thead class="border-b-2 border-gray-900">
                                <th scope="col" class="relative sm:pl-6 py-3 w-1/3">
                                    <span class="sr-only">
                                        Name
                                    </span>
                                </th>
                                <th scope="col" class="py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Linnen
                                </th>
                                <th scope="col" class="sm:pr-6 py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Dieet
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="(person, index) in store.state.Attendees.winingAndDining" :key="index">
                                    <td class="sm:pl-6 pt-4 w-1/3 align-baseline">
                                        {{ person.name }}
                                    </td>
                                    <td class="pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.linnen === 'ja' || person.linnen === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.linnen === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.linnen === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.linnen !== 'ja' && person.linnen !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.linnen }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="sm:pr-6 pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.diet === 'ja' || person.diet === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.diet === 'ja'"
                                                            class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.diet === 'nee'" class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.diet !== 'ja' && person.diet !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.diet }}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Table 4 - Bikes and Beers -->
                <div class="flex justify-start w-full">
                    <div class="sm:mr-6 mt-12 flex flex-row w-full lg:w-3/4 hyphens-none">
                        <table class="min-w-full">
                            <caption class="text-left text-sm">
                                <div class="flex items-baseline">
                                    <h2 class="font-semibold">
                                        Bikes and Beers
                                        <span class="font-light">
                                            ({{ store.state.Attendees.bikesAndBeers.length }})
                                        </span>
                                    </h2>
                                </div>
                            </caption>
                            <thead class="border-b-2 border-gray-900">
                                <th scope="col" class="relative sm:pl-6 py-3 w-1/3">
                                    <span class="sr-only">
                                        Name
                                    </span>
                                </th>
                                <th scope="col" class="py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Huren
                                </th>
                                <th scope="col" class="sm:pr-6 py-3 w-1/3 text-center text-sm font-light uppercase tracking-wider">
                                    Tandem
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="(person, index) in store.state.Attendees.bikesAndBeers" :key="index">
                                    <td class="sm:pl-6 pt-4 w-1/3 align-baseline">
                                        {{ person.name }}
                                    </td>
                                    <td class="pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.rental === 'ja' || person.rental === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.rental === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.rental === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.rental !== 'ja' && person.rental !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.rental }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="sm:pr-6 pt-4 w-1/3 align-baseline">
                                        <div class="flex justify-center items-center">
                                            <div v-if="person.tandem === 'ja' || person.tandem === 'nee'"
                                                 class="h-4 w-4">
                                                <CheckIcon v-if="person.tandem === 'ja'"
                                                           class="z-10 h-4 w-4" />
                                                <CrossIcon v-if="person.tandem === 'nee'"
                                                           class="z-10 h-4 w-4" />
                                            </div>
                                            <div v-if="person.tandem !== 'ja' && person.tandem !== 'nee'"
                                                 class="font-light text-sm w-full h-full text-center">
                                                {{ person.tandem }}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>

        <img src="@/assets/bg/party-hat.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(75px, -625px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/cupcake.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-30px, 725px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/party-hat.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(25px, -711px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/cupcake.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-325px, 611px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import PeopleIcon from '@/components/PeopleIcon'
import CheckIcon from '@/components/CheckIcon'
import CrossIcon from '@/components/CrossIcon'
import { useStore } from "vuex"

export default {
    name: 'Aanwezigheid',
    components: { ArrowIcon, PeopleIcon, CheckIcon, CrossIcon },
    setup() {
        const store = useStore()

        return { store }
    }
}
</script>
