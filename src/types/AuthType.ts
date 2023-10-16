export type UserType = {
    id: number
    name: string
    email: string
    password: ""
    phone: string
    birthday:string
    avatar: ""
    gender: boolean
    role: 'user' | 'admin'
    
}
export type AuthType = {
    user?: UserType
    token?: string
}


export type LocalUser ={
    id: string,
    userName:string
}