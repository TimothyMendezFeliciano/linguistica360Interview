import {NextApiRequest, NextApiResponse} from "next";
import {sleep} from "@/utils/sleep";
import {getRandomIntBetween} from "@/utils/getRandomInt";

const characterList = [
    "Gohan",
    "Goku",
    "Piccolo",
    "Vegeta",
    "Goten",
    "Trunks",
    "Yamcha",
    "Tien",
    "Frieza",
    "Cell",
    "Beerus",
    "Whis",
    "Bulma"
]

export default async function (req: NextApiRequest, res: NextApiResponse) {

    await sleep(2000)
    const randomIndex = getRandomIntBetween(0, characterList.length-1)
    return res.json({
        character: characterList[randomIndex]
    })
}