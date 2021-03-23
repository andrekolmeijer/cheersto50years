<template>
  <div lang="nl" class="text-gray-900 bg-yellow-400 min-h-screen hyphens-auto">
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

        // window.onresize = function() {
        //     console.log('window resized');
        //     document.body.height = window.innerHeight
        //     console.log(window.innerHeight);
        //     console.log(document.body.height);
        // }

        // window.onresize()
    }
}
</script>
