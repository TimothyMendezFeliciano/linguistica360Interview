import {useRouter} from "next/router";

const routes = [
    {
        name: 'Patterns',
        link: '/'
    },
    {
        name: 'HangMan',
        link: '/hangman'
    },
    {
        name: 'Finale',
        link: '/finale'
    },
]

export default function Header() {
    const router = useRouter()



    return (<header>
        <ul className="flex border-b">
            {routes.map(({name, link}, index) => (
                <li key={index} className={`${router.pathname === link ? '-mb-px' : ''} mr-1`}>
                    <a className={`bg-white inline-block py-2 px-4 font-semibold ${router.pathname === link ? 'text-blue-700 border-l border-t border-r rounded-t' : 'text-blue-500 hover:text-blue-800'}`}
                        href={link}>{name}</a>
                </li>
            ))}
        </ul>
    </header>)
}