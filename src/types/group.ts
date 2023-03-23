export type Group = {
  id: string,
  title: string,
  players: Team[]
}

export type Team = {
  players: string[]
}