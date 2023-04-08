import React from "react";

interface CardProps {
    rgb: string;
    title: string;
    className: string;
    icon: string;
    children: JSX.Element[] | JSX.Element;
}

const Card = ({ rgb, title, children, icon, className }: CardProps) => {
    return (
        <div
            style={{ "--color": rgb } as React.CSSProperties}
            className={
                "border-[rgb(var(--color))] brightness-[0.9] shadow-[rgb(var(--color))] border-solid p-8 text-white rounded-md border-[1px] " +
                className
            }
        >
            <h3 className="text-[rgb(var(--color))] brightness-[1.2] flex justify-between font-semibold mb-4 text-lg">{title} <i className={`bi bi-${icon}`}></i></h3>
            {children}
        </div>
    );
};

export default Card;
