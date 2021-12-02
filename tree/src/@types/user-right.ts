export interface UserRights {
  id: number,
  parentId: number, 
  name: string,
  checked: boolean
}
export interface ModUserRights extends UserRights {
  children: UserRights[]
}