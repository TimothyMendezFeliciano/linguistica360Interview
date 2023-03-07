import React, {cloneElement, isValidElement, ReactElement, useState} from "react";

interface PropTypes {
    children: ReactElement[]
}

export default function UncontrolledFlow({children}: PropTypes) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const current = React.Children.toArray(children)[currentIndex]

    const onPrev = () => {
        setCurrentIndex((prevIndex) => Math.abs((prevIndex-3)%4))
    }

    const onNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex+3)%4)
    }

    if (isValidElement(current)) {
        return (
            <>
                {cloneElement(current)}
                <button className={'bg-red-500 text-white rounded m-1'} onClick={onPrev}>Previous</button>
                <button className={'bg-blue-500 text-white rounded m-1'} onClick={onNext}>Next</button>
            </>
        )
    }

    return <>current</>
}