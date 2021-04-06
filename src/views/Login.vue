<template>

    <div class="relative">

        <div class="flex justify-center items-center flex-col space-y-4 p-6 min-h-screen">
            <h1 class="z-10 font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold text-center">
                Cheers to 50 years !
            </h1>
            <p class="z-10 text-center text-lg">
                Voer de code van je uitnodiging in om toegang te krijgen tot de site.
            </p>
            <form @submit.prevent="submitAccessCode"
                  class="z-10 w-full max-w-sm">
                <input type="password"
                        name="accessCode"
                        id="accessCode"
                        v-model="state.accessCodeInput"
                        class="mb-3 w-full bg-gray-100 border-transparent rounded-lg shadow-sm focus:border-purple-400 focus:ring-purple-400 text-center">
                <button type="submit"
                        :disabled="characterCheck"
                        :tabindex="characterCheck ? -1 : 0"
                        :class="{ 'bg-purple-400 hover:bg-purple-400 cursor-not-allowed': characterCheck, 'bg-purple-600 hover:bg-purple-500 cursor-pointer': !characterCheck }"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white focus:bg-purple-500 focus:outline-none active:bg-purple-600">
                    Let's party!
                </button>
            </form>
        </div>

        <BalloonsIcon class="absolute top-0 left-0 mt-48 sm:mt-28 px-6 z-0 w-full max-h-3/4 opacity-30" />

    </div>

</template>

<script>
import BalloonsIcon from '@/components/BalloonsIcon'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useRouter } from "vue-router";

export default {
  name: 'Login',
  components: { BalloonsIcon },
  setup() {
      const store = useStore()
      const router = useRouter()
      const md5 = require('md5')

      const state = reactive({
          accessCodeInput: '',
      })

      const characterCount = computed(() => state.accessCodeInput.length)
      const characterCheck = computed(() => characterCount.value < 6)

      function submitAccessCode() {
          if (state.accessCodeInput) {
              const input = state.accessCodeInput
              const inputHashed = md5(input)

              store.dispatch('setAccessCode', inputHashed)
              state.accessCodeInput = ''
              router.push({ path: '/' })
          }
      }

      return { state, characterCheck, submitAccessCode }
  }

}
</script>
