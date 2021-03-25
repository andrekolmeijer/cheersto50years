<template>

    <div class="relative min-h-screen p-12 flex flex-col items-center overflow-hidden">

        <a @click="$router.go(-1)"
           class="self-start cursor-pointer">
            <div class="flex flex-col justify-center items-center mb-12">
                <ArrowIcon class="z-10 w-12 h-12 transform -rotate-90 -translate-y-3.5" />
                <span v-if="store.state.previousRouteName"
                      class="font-semibold text-sm text-center -mt-5">
                    {{ store.state.previousRouteName }}
                </span>
                <span v-else
                      class="font-semibold text-sm text-center -mt-5">
                    Terug
                </span>
            </div>
        </a>

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
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Mocht je nog bepaalde dieet wensen hebben (vegetarisch, allergieën of andere zaken), geef het door. Dan noteren we dat. &#127814; &#127805; &#127789;
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-12 flex flex-row hyphens-none">
                <table class="min-w-full divide-y-2 divide-gray-900">
                    <thead>
                        <th scope="col" class="relative px-3 xs:px-6 py-3">
                            <span class="sr-only">
                                Name
                            </span>
                        </th>
                        <th scope="col" class="px-3 xs:px-6 py-3 text-center text-sm font-light uppercase tracking-wider">
                            Linnen
                        </th>
                        <th scope="col" class="px-3 xs:px-6 py-3 text-center text-sm font-light uppercase tracking-wider">
                            Dieet
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(person, index) in state.burgersBeerBBQ" :key="index"
                            class="capitalize">
                            <td class="px-3 xs:px-6 pt-4 whitespace-nowrap">
                                {{ person.name }}
                            </td>
                            <td class="px-3 xs:px-6 pt-4 whitespace-nowrap">
                                <div class="flex justify-center items-center">
                                    <div class="flex-shrink-0 h-4 w-4">
                                        <CheckIcon v-if="person.linnen === 'ja'"
                                                   class="z-10 h-4 w-4" />
                                        <CrossIcon v-if="person.linnen === 'nee'" class="z-10 h-4 w-4" />
                                    </div>
                                </div>
                            </td>
                            <td class="px-3 xs:px-6 pt-4 whitespace-nowrap">
                                <div class="flex justify-center items-center">
                                    <div class="flex-shrink-0 h-4 w-4">
                                        <CheckIcon v-if="person.diet === 'ja'"
                                                   class="z-10 h-4 w-4" />
                                        <CrossIcon v-if="person.diet === 'nee'" class="z-10 h-4 w-4" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
import PeopleIcon from '@/components/PeopleIcon'
import CheckIcon from '@/components/CheckIcon'
import CrossIcon from '@/components/CrossIcon'
import { useStore } from "vuex"
import { reactive } from '@vue/reactivity'

export default {
    name: 'Indeling',
    components: { ArrowIcon, PeopleIcon, CheckIcon, CrossIcon },
    setup() {
        const store = useStore()

        const state = reactive({
            burgersBeerBBQ: [
                { name: 'bjorn', linnen: 'ja', diet: 'nee' },
                { name: 'eline', linnen: 'ja', diet: 'nee' },
                { name: 'Tim D.', linnen: 'nee', diet: 'ja' },
                { name: 'Johan', linnen: '', diet: '' },
                { name: 'Jos', linnen: '', diet: '' },
            ],

        })

        return { store, state }
    }
}
</script>
