import { useState } from 'react';
import './Card.css'

export default function Card({ url, id, isVisible, isFinished, onCardClick }) {

    const handleClick = () => {
        onCardClick(id)
    }

    const classCard = `card 
    ${isVisible ? 'card-show' : ''} 
    ${isFinished ? 'card-finish' : ''}`
    return (
        <div className={classCard} onClick={handleClick}>
            <img src={url} alt="кошка1" />
        </div>
    )
}