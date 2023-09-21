<script setup>
    import { game } from './utils/GameHandler';
    import AddPlayers from './views/AddPlayers.vue';
    import Game from "./views/Game.vue"
</script>

<template>
    <Game v-if="game.playing"></Game>
    <AddPlayers v-else></AddPlayers>
</template>