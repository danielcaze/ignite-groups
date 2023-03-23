export type Group = {
  id: string,
  title: string,
  players: Player[]
}

export type Player = {
  id: string
  name: string
  team: string
}