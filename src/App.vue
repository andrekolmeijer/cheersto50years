<template>
    <div lang="nl"
         :class="{ 'h-auto': store.state.messageRead || store.state.messageReadApril, 'h-screen': !store.state.messageRead || !store.state.messageReadApril }"
         class="relative text-gray-900 bg-yellow-400 min-h-screen hyphens-auto overflow-hidden">

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

        <router-view/>

    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'App',
    setup() {
        const store = useStore()

        store.dispatch('initialiseStore')

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
