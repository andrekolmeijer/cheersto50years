<template>

    <div class="relative min-h-screen p-6 flex flex-col justify-center items-center overflow-hidden">

        <div class="z-10 text-center">
            Routebeschrijving
        </div>

        <img src="@/assets/bg/mustache.svg"
             class="max-w-none w-full sm:hidden absolute inset-16 top-1/2"
             :style="{ transform: 'translate(-100px, -277px)' }"
             alt="mustache background image">

        <img src="@/assets/bg/mustache.svg"
             class="max-w-none h-full hidden sm:block absolute inset-16 left-1/2 top-1/2"
             :style="{ transform: 'translate(-411px, -511px)', maxHeight: 'calc(100vh - 8rem)' }"
             alt="mustache background image">

    </div>

</template>

<script>
export default {
    name: 'Routebeschrijving',
}
</script>
