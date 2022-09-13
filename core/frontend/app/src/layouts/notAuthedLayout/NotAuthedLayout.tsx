import { ReactNode } from "react"

export interface NotAuthedLayoutProps {
    element: ReactNode
}

export function NotAuthedLayout({ element }: NotAuthedLayoutProps) {
    return (
        <div>
            { element }
        </div>
    )
}
