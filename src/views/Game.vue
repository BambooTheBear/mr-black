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
        <button class="absolute bottom-0 btn btn-secondary btn-outline scale-[2]"
            @click="{ this.create(); this.game.playing = false }">Restart</button>
    </div>
</template>
<script>
import { game } from "../utils/GameHandler"
export default {
    methods: {
        next() {
            this.x++
            if (this.x%2==0) {
                 let tmp = {name: "Give next player", role: "next"}
            }
            else {
            let tmp = this.remaining.pop()}
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
            if (this.current.role == "next") {
                this.bg = "bg-white"
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
            wordList: [
  ["Apple", "Banana"],
  ["Dog", "Cat"],
  ["Coffee", "Tea"],
  ["Chair", "Stool"],
  ["Car", "Truck"],
  ["Moon", "Sun"],
  ["Shirt", "Blouse"],
  ["Book", "Magazine"],
  ["Laptop", "Tablet"],
  ["Pizza", "Pasta"],
  ["Guitar", "Violin"],
  ["Ocean", "Lake"],
  ["Hat", "Cap"],
  ["Tree", "Bush"],
  ["House", "Mansion"],
  ["Bird", "Butterfly"],
  ["Movie", "TV Show"],
  ["Elephant", "Rhino"],
  ["Watch", "Clock"],
  ["Flower", "Plant"],
  ["Fork", "Spoon"],
  ["Beach", "Desert"],
  ["Bridge", "Tunnel"],
  ["Hammer", "Screwdriver"],
  ["Jacket", "Coat"],
  ["Camera", "Camcorder"],
  ["Butterfly", "Dragonfly"],
  ["Train", "Subway"],
  ["Lemon", "Lime"],
  ["Ring", "Bracelet"],
  ["Soccer", "Basketball"],
  ["Piano", "Organ"],
  ["Butterfly", "Moth"],
  ["Rainbow", "Aurora"],
  ["Dolphin", "Whale"],
  ["Hat", "Beanie"],
  ["Dog", "Wolf"],
  ["Tiger", "Cheetah"],
  ["Key", "Lock"],
  ["Bike", "Scooter"],
  ["Apple", "Cherry"],
  ["Cloud", "Fog"],
  ["Mountain", "Hill"],
  ["Rose", "Tulip"],
  ["Shirt", "T-shirt"],
  ["Car", "Motorcycle"],
  ["Sun", "Star"],
  ["Cat", "Leopard"],
  ["Chicken", "Duck"],
  ["Chair", "Sofa"],
  ["Pizza", "Burger"],
  ["Pen", "Pencil"],
  ["Turtle", "Tortoise"],
  ["Moon", "Planet"],
  ["Hat", "Helmet"],
  ["Guitar", "Guitarra"],
  ["Ocean", "Sea"],
  ["Lion", "Panther"],
  ["Door", "Window"],
  ["Clock", "Watch"],
  ["Candle", "Lamp"],
  ["Beach", "Shore"],
  ["Coffee", "Espresso"],
  ["Butterfly", "Caterpillar"],
  ["Phone", "Smartphone"],
  ["Dog", "Poodle"],
  ["Tree", "Palm"],
  ["Rose", "Daisy"],
  ["Bird", "Parrot"],
  ["Jacket", "Sweater"],
  ["Pizza", "Calzone"],
  ["Cup", "Mug"],
  ["Boat", "Ship"],
  ["Sun", "Moonlight"],
  ["Hat", "Fedora"],
  ["Flower", "Daisy"],
  ["Mountain", "Volcano"],
  ["Guitar", "Ukulele"],
  ["Lemon", "Orange"],
  ["Book", "Novel"],
  ["Chair", "Bench"],
  ["Dog", "Puppy"],
  ["Butterfly", "Ladybug"],
  ["Key", "Keychain"],
  ["Cake", "Muffin"],
  ["Tree", "Oak"],
  ["Shirt", "Polo"],
  ["Car", "Convertible"],
  ["Sun", "Sunshine"],
  ["Fish", "Shark"],
  ["Moon", "Crescent"],
  ["Hat", "Top hat"],
  ["Rose", "Rosebud"],
  ["Bird", "Eagle"],
  ["Jacket", "Blazer"],
  ["Guitar", "Banjo"],
  ["Ocean", "River"],
  ["Cloud", "Sky"],
  ["Shoe", "Sandal"],
  ["Apple", "Pineapple"]
],
            remaining: [],
            bg: "bg-accent",
            x:0,
        }
    },
    created() {
        this.create()
    }
}
</script>
