import Head from 'next/head'
import {Inter} from 'next/font/google'
import Patterns from "@/pages/patterns";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Patterns/>
    )
}
