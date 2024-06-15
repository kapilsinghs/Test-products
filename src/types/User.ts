export type TUserContext = {
    user: User
    setUserDetail: (user: User) => void;
}

export type User = {
    id: number,
  name: string,
  department: string,
  avatar: string
}