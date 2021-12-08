import Link from "next/link"

export default function rotas() {
    return (
        <div>
            <h1>Rotas teste</h1>
            <ul>
                <Link href="/rotas/params?id=1233&nome=BIBI">
                    <li>Params</li>
                </Link>
            </ul>
        </div>
    )
}