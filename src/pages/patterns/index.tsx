import ControlledFlow from "@/pages/components/ControlledFlow";
import {useState} from "react";
import UncontrolledFlow from "@/pages/components/UncontrolledFlow";

export default function Patterns() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const onNext = () => {
        if (currentIndex % 2 === 0) {
            window.alert('Divisible By two')
        }
        setCurrentIndex(currentIndex + 1)
    }
    const onPrev = () => {
        if (currentIndex % 2 === 0) {
            window.alert('Divisible By two')
        }
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <>
            <h1>Controlled Example</h1>
            <ControlledFlow currentIndex={currentIndex} onNext={onNext} onPrev={onPrev}>
                <><h1>Step 1</h1></>
                <><h1>Step 2</h1></>
                <><h1>Step 3</h1></>
                <><h1>Step 4</h1></>
            </ControlledFlow>

            <br/>
            <br/>
            <h1>Uncontrolled Example</h1>
            <UncontrolledFlow>
                <><h1>Step 1</h1></>
                <><h1>Step 2</h1></>
                <><h1>Step 3</h1></>
                <><h1>Step 4</h1></>
            </UncontrolledFlow>
        </>
    )
}