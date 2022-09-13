import { UserCompressed } from "../../dto/UserCompressed"

export interface DatingPageProps {
    user: UserCompressed
}

export function DatingPage({ user }: DatingPageProps) {
    return (
        <h1> There will be some dating features </h1>
    )
}