import { Photo } from "./Photo";

export class UserCompressed {
    name: string
    avatar?: Photo

    constructor(name: string, avatar: Photo | undefined = undefined) {
        this.name = name
        this.avatar = avatar
    }
}