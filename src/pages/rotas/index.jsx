import router, { useRouter } from "next/router"
import Link from "next/link"


export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    return (
        <div>
            <h1>Rotas teste</h1>
            <ul>
                <Link href="/rotas/params?id=1233&nome=BIBI">
                    <li>Params</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start",}}>
                <button onClick={() => router.push("/rotas/params")}>Rotas</button>
                <button onClick={() => navegacaoSimples("/rotas/bibi")}>Quer Saber?</button>
            </div>
        </div>
    )
}