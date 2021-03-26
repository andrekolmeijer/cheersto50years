<template>

    <div class="relative min-h-screen p-12 flex flex-col items-center overflow-hidden">

        <a @click="$router.go(-1)"
           class="self-start cursor-pointer">
            <div class="flex flex-col mb-12">
                <ArrowIcon class="z-10 w-12 h-12 transform -rotate-90 -translate-y-3.5" />
                <span class="font-semibold text-sm text-center -mt-5">
                    Home
                </span>
            </div>
        </a>

        <div class="flex flex-col items-center max-w-5xl min-h-full">

            <DirectionsIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36 my-6" />

            <div class="z-10 mt-6">
                <h1 class="font-cursive text-2xl xs:text-3xl sm:text-4xl font-semibold">
                    Routebeschrijving
                </h1>
                <div class="md:flex">
                    <div class="sm:mr-6 mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Zoals gezegd ligt de feestlocatie op een bijzondere locatie. Dit betekent dat het een ontzettend mooie locatie is, maar ook dat hij ietwat moeilijker te bereiken is. &#128690; &#128665; &#128722;
                        </p>
                    </div>
                    <div class="mt-3 md:mt-6 space-y-3 text-lg w-full md:w-1/2 max-w-lg">
                        <p>
                            Navigatie op GPS werkt dan ook gewoon lekker niet. Daarbij is er maar één officiële route die gebruikt mag worden,
                            <span class="font-semibold">
                                dus graag onderstaande routebeschrijving gebruiken.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <img src="@/assets/bg/punch.svg"
             class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, 175px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/punch.svg"
             class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, 120px)' }"
             alt="beer crate background image">

        <img src="@/assets/bg/punch.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-625px, -150px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="beer crate background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import DirectionsIcon from '@/components/DirectionsIcon'

export default {
    name: 'Routebeschrijving',
    components: { ArrowIcon, DirectionsIcon }
}
</script>
