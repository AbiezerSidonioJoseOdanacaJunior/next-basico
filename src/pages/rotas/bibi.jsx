import router, { useRouter } from "next/router"

export default function Bibi() {
    return (
        <div>
            <h1>Quem é você? </h1>
            <ul>
                <li>Bibi Junior</li>
                <li>I am from Bissau-Gienneam</li>
                <li>I am developement</li>
                <li>I love play football!</li>
            </ul>
            <div>
                <button onClick={() => router.push("/rotas")} >back</button>
            </div>
        </div>
    )
}