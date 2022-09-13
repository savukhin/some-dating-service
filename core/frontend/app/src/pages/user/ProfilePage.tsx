import { useState } from "react"
import { UserCompressed } from "../../dto/UserCompressed"
import { UserProfile } from "../../dto/UserPage"

export interface UserPageProps {
    user: UserCompressed
}

// interface UserPageState {
//     user: UserProfile
// }

export function ProfilePage({ user }: UserPageProps) {
    const [profile] = useState<UserProfile | undefined>(undefined)

    function generateLoading() {
        return <h1> Loading </h1>
    }

    function generateUserProfile(profile: UserProfile) {
        return (
            <div>
            { profile.photos.length == 0 ?  
                <img src="./img/blank-profile-picture.webp"></img>
            :
            profile.photos.map(photo => {
                    return photo.url
                })
            }

            <li>
                <ul> Name: { profile.name }</ul>
                <ul> Age: { profile.age }</ul>
            </li>
            </div>
        )
    }

    return (
        <div>
            { profile ? generateUserProfile(profile) : generateLoading() }
        </div>
    )
}