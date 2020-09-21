import {ReactNode} from "react";

export default function TwoCol({children, label, mobileLabel, className}:
    {
        children: ReactNode,
        label: string,
        mobileLabel?: boolean,
        className?: string
    }
) {
    return (
        <div className={`lg:flex lcl-container ${className}`}>
            <div className="w-24 flex-shrink-0">
                <div className={`${mobileLabel ? "mb-8 lg:mb-0" : "hidden lg:block"}`}>
                    {label === "logo" ? (
                        <img src="/logo-new-white.svg" className="h-8" alt="LCL Logo"/>
                    ) : (
                        <span className="lcl-bold-uppercase">{label}</span>
                    )}
                </div>
            </div>
            <div className="flex-grow-1">
                {children}
            </div>
        </div>
    )
}