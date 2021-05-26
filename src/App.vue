<template>
    <div lang="nl"
         :class="{ 'h-auto': store.state.messageRead || store.state.messageReadApril || store.state.messageReadMay, 'h-screen': !store.state.messageRead || !store.state.messageReadApril || !store.state.messageReadMay }"
         class="relative text-gray-900 bg-yellow-400 min-h-screen hyphens-auto overflow-hidden">

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

        return { store }
    }
}
</script>
