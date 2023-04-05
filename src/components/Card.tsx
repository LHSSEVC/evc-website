import React from "react";
import "./Card.scss";

interface CardProps {
    color: string;
    title: string;
    children: JSX.Element[] | JSX.Element;
}

function Card({ color, title, children }: CardProps) {
    return (
        <div
            className="Card rounded-xl border-[color:var(--color)] border-2 shadow-[color:var(--color)] shadow-lg"
            style={{ "--color": color } as React.CSSProperties}
        >
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default Card;
