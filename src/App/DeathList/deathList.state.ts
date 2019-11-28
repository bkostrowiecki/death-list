export interface DeathListState {
  [key: number]: DeathListItem;
}

export interface DeathListItem {
  id: string;
  name: string;
  isDead: boolean;
}
