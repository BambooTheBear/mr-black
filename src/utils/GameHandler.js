import { reactive } from "vue"

export const game = reactive({
    playing: false,
    players: [{ name: "Tom" }, { name: "Pufid" }, { name: "Pufid2" }, { name: "Pufid3" }],
})