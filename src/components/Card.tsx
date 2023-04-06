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
                "Card rounded-xl border-[rgb(var(--color))] border-[1px] border-solid shadow-[0_0_1rem_1rem_rgba(var(--color),0.4)] p-8 " +
                className
            }
        >
            <h3 className="text-[rgb(var(--color))]">{title}</h3>
            {children}
        </div>
    );
};

export default Card;
