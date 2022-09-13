import { Photo } from "./Photo";

export class UserProfile {
    name: string
    age: number
    photos: Photo[]

    constructor(name: string, age: number, photos: Photo[]) {
        this.name = name
        this.age = age
        this.photos = photos
    }
}
