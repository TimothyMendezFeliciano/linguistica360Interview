import React, {cloneElement, isValidElement, ReactElement} from 'react'

interface PropTypes {
    children: ReactElement[],
    currentIndex: number,
    onNext: any,
    onPrev: any
}

export default function ControlledFlow({children, currentIndex, onNext, onPrev}: PropTypes): JSX.Element {

    const current = React.Children.toArray(children)[currentIndex]
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