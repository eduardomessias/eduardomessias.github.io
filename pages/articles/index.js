import Link from 'next/link'

export default function Articles() {
    return (
        <>
            <h1>Article index page</h1>
            <ul>
                <Link href='/articles/first-article'><li>First article</li></Link>
            </ul>
        </>
    )
}