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

            <a download="Routebeschrijving de Mossel.pdf"
               :href="`${publicPath}routebeschrijving.pdf`"
               class="z-10 w-full sm:max-w-md mt-6 p-6 border border-gray-900 rounded-xl">
                <div class="flex flex-col justify-center items-center hyphens-none">
                    <DownloadIcon class="z-10 w-20 xs:w-24 sm:w-36 h-20 xs:h-24 sm:h-36" />
                    <div class="mt-6 font-bold text-center text-lg">
                        Download Routebeschrijving
                    </div>
                    <div class="font-light text-center">
                        Kan enkele seconden duren (4,5 MB).
                    </div>
                </div>
            </a>

            <div class="z-10 mt-3 text-center">
                <div class="sm:hidden">
                    <p>
                        Printen? Download de
                    </p>
                    <p class="text-base font-light">
                        <a download="Routebeschrijving de Mossel (Print).pdf"
                            :href="`${publicPath}routebeschrijving-print.pdf`"
                            class="font-normal text-purple-700">
                            <span class="hover:underline">Routebeschrijving voor Print</span>.
                        </a>
                    </p>
                </div>
                <p class="text-base font-light hidden sm:inline">
                    Printen? Download de
                        <a download="Routebeschrijving de Mossel (Print).pdf"
                           :href="`${publicPath}routebeschrijving-print.pdf`"
                           class="font-normal text-purple-700">
                            <span class="hover:underline">Routebeschrijving voor Print</span>.
                        </a>
                </p>
            </div>

        </div>

        <img src="@/assets/bg/punch.svg"
             class="max-w-none w-full xs:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-120px, 315px)' }"
             alt="punch background image">

        <img src="@/assets/bg/punch.svg"
             class="max-w-none w-full hidden xs:block sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-130px, 220px)' }"
             alt="punch background image">

        <img src="@/assets/bg/punch.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-625px, -150px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="punch background image">

    </div>

</template>

<script>
import ArrowIcon from '@/components/ArrowIcon'
import DirectionsIcon from '@/components/DirectionsIcon'
import DownloadIcon from '@/components/DownloadIcon'
import Messages from '@/components/Messages'

export default {
    name: 'Routebeschrijving',
    components: { ArrowIcon, DirectionsIcon, DownloadIcon, Messages },
    setup() {
        const publicPath = process.env.BASE_URL

        return { publicPath }
    }
}
</script>
