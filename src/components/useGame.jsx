import { useState } from "react"
import images from "../data.json"

export default function useGame(images) {
    //список отгаданных карточек
    const [finishedItems, setFinishedItems] = useState([])
    //счетчик шагов
    const [stepsCount, setStepsCount] = useState(0)
    //функция сравнения двух открытых карточек
    const checkItems = (firstItem, secondItem) => { 
        //находим первую картинку в массиве
        const firstImage = images.find(({id})=> id == firstItem )
        //находим вторую картинку в массиве
        const secondImage = images.find(({id})=> id == secondItem )

        if(firstImage.url == secondImage.url){ //если картинки одинаковые
            //добавляем отгаданные карточки в массив откгаданных карточек
            setFinishedItems((items)=>[...items, firstItem, secondItem] )
        }
        //увеличиваем счётчик шагов на 1
        setStepsCount(stepsCount+1)
    }
    //функция сброса игры
    const handleReset = () => {
        setFinishedItems([]) //очищаем массив с отгадаными карточками
        setStepsCount(0) //обнуляем счётчик шагов
    }

    //проверка конца игры
    const isWin = finishedItems.length == images.length

    return {
        finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems
    }
}