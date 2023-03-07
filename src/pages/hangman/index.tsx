import {useEffect, useState} from "react";

export default function Hangman(props) {
    const {character} = props.data

    const [attemptsLeft, setAttemptsLeft] = useState<number>(3)
    const [lettersToFind, setLettersToFind] = useState<Map<string, boolean>>(new Map())

    const checkValue = (userInput) => {
        const resultMap: typeof lettersToFind = new Map(lettersToFind)
        for (let index in userInput) {
            // @ts-ignore
            let lowerCasedLetter = userInput[index].toLowerCase()
            if (!!lettersToFind.has(lowerCasedLetter)) {
                resultMap.set(lowerCasedLetter, true)
            }
        }
        setLettersToFind(resultMap)

    }

    useEffect(() => {
        if (character) {
            const letterMap = new Map()
            for (let letter in character) {
                letterMap.set(character[letter].toLowerCase(), false)
            }
            setLettersToFind(letterMap)
        }
    }, [character])

    return (
        <div className={'m-4'}>
            <h1 className={'text-2xl'}>Time to Play Dragon Ball Hangman</h1>
            {Array.from(lettersToFind.keys()).map((letter, index) => (
                    <div key={index}>
                        {/*Only display the letter if it has been found*/}
                        <p>{lettersToFind.get(letter) ? letter : '_'}</p>
                    </div>
                )
            )}
            <label>Guess the Character</label>
            <input type={'text'}
                   className='input'
                   onChange={(e) => checkValue(e.target.value)}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const result = await fetch("http://localhost:3000/api/generate-word")
    const data = await result.json()
    return {
        props: {
            data
        }
    }
}