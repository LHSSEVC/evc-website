import React from "react";
import "./Card.scss";

interface CardProps {
    rgb: string;
    title: string;
    className: string;
    children: JSX.Element[] | JSX.Element;
}

const Card = ({ rgb, title, children, className }: CardProps) => {
    return (
        <div
            style={{ "--color": rgb } as React.CSSProperties}
            className={
                "Card border-[rgb(var(--color))] border-solid p-8 " +
                className
            }
        >
            <h3 className="text-[rgb(var(--color))] brightness-[3] font-bold mb-4 text-xl">{title}</h3>
            {children}
        </div>
    );
};

export default Card;
