import { ReactNode } from "react"

export interface AuthedLayoutProps {
    element: ReactNode
}

export function AuthedLayout({ element }: AuthedLayoutProps) {
    return (
        <div>
            { element }
        </div>
    )
}
