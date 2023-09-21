<template>
    <div class="w-full h-screen flex items-center justify-center">
        <div class="relative w-full h-1/3 rounded-2xl text-4xl text-base-100 font-bold flex items-center flex-col bg-accent"
            :class="bg">
            <p class="text-lg absolute left-2 bottom-2 font-normal">{{ this.current.name }} : {{ this.current.role }}</p>
            <p v-if="this.current.role != 'undercover' && this.current.role != 'white'">Your Word: {{ word }}</p>
            <p v-if="this.current.role == 'undercover'">Your Word: {{ word2 }}</p>
            <p v-if="this.current.role == 'white'" class="text-6xl">Mr. WHITE</p>

            <button class="btn btn-primary absolute bottom-2 right-2" @click="this.next">Next</button>
        </div>
        <button class="absolute bottom-0 btn btn-secondary btn-outline"
            @click="{ this.create(); this.game.playing = false }">Restart</button>
    </div>
</template>
<script>
import { game } from "../utils/GameHandler"
export default {
    methods: {
        next() {
            let tmp = this.remaining.pop()
            this.current.name = tmp.name
            this.current.role = tmp.role
            console.log(this.remaining)
            console.log(this.current)
            if (this.current.role == "white") {
                this.bg = "bg-white"
            }
            if (this.current.role == "black") {
                this.bg = "bg-primary"
            }
            if (this.current.role == "undercover") {
                this.bg = "bg-secondary"
            }
        },
        create() {
            this.remaining = JSON.parse(JSON.stringify(game.players))
            console.log(this.remaining)
            this.remaining.sort(() => Math.random() - 0.5);
            this.current.name = this.remaining.pop().name
            let whiteNumber = Math.floor(Math.random() * this.remaining.length)
            let blackNumber = Math.floor(Math.random() * this.remaining.length)
            while (blackNumber == whiteNumber) {
                blackNumber = Math.floor(Math.random() * this.remaining.length)
            }
            let undercoverNumber = Math.floor(Math.random() * this.remaining.length)
            if (this.remaining.length > 2) {
                while (undercoverNumber == whiteNumber || undercoverNumber == blackNumber) {
                    undercoverNumber = Math.floor(Math.random() * this.remaining.length)
                }
            }

            let i = 0
            for (let player of this.remaining) {
                if (i == whiteNumber) {
                    player.role = "white"
                }

                if (i == blackNumber) {
                    player.role = "black"
                }

                if (i == undercoverNumber) {
                    player.role = "undercover"
                }

                i -= -1
            }
            let wordy = this.wordList[Math.floor(Math.random() * this.wordList.length)]
            this.word = wordy[0]
            this.word2 = wordy[1]
        }
    },
    data() {
        return {
            game: game,
            current: { name: "Piet", role: "innocent" },
            word: "",
            word2: "",
            wordList: [["Apfel", "Birne"], ["Baum", "Blume"]],
            remaining: [],
            bg: "bg-accent"
        }
    },
    created() {
        this.create()
    }
}
</script>