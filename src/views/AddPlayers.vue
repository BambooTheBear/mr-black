<script >
import { game } from '../utils/GameHandler';
export default {
  data() {
    return {
      inModal: false,
      game: game,
      selection: "",
    }
  }
}
</script>

<template>
  <img src="../assets/penguin.png" class="mt-2">
  <div class="w-screen flex space-y-2 flex-row justify-around flex-wrap items-center p-4">
    <div v-for="player in game.players" class="px-4 border-primary border-2 rounded-full flex justify-center p-1">{{
      player.name }}</div>
  </div>

  <div class="absolute bottom-32 flex justify-center items-center w-screen px-10">
    <button class="btn btn-primary btn-circle" @click="() => { game.playing = true }">
      <div class="scale-[2]">🐼</div>
    </button>
  </div>

  <div v-if="this.inModal" class="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
    <div class="w-4/5 rounded-3xl p-2 bg-primary relative h-1/4 flex items-center justify-center">
      <input class="input input-bordered w-full max-w-xs" placeholder="Piet" :value="Piet"
        @input="event => this.selection = event.target.value">
      <div class="absolute z-20 bottom-3 flex justify-center w-full">
        <button class="btn btn-secondary"
          @click="() => { game.players = [...game.players, { name: this.selection }]; this.inModal = false }">
          Add Player
        </button>
      </div>
    </div>
  </div>

  <div class="fixed z-20 bottom-3 flex justify-center w-screen">
    <button class="btn" @click="() => { inModal = true }">
      Add Player
    </button>
  </div>
</template>