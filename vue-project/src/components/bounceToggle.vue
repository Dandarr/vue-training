<!-- Toggle.vue -->
<template>
<div>
    <!-- wrap the built-in Transition component -->
    <button @click="show = !show">Toggle</button>
    <Transition name="bounce">
        
        <slot v-if="show"></slot>
        <!-- pass down slot content -->
    </Transition>
    </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(true);
</script>
<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>