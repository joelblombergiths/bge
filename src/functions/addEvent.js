import { useState, useEffect } from "react"
import { useNavigate, useActionData } from 'react-router-dom'

export default function AddEvent() {
    const data = useActionData()
    data.date = data.date.replace('T', ' ')

    const navigate = useNavigate()
    const [result, setResult] = useState({})

    useEffect(() => {
        const add = async () => {
            const req = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const res = await fetch('http://localhost:3001/event/', req)
            if (res.ok) {
                setResult({ type: 'success', message: 'Created event successfully' })
            }
            else {
                setResult({ type: 'danger', message: `${res.statusText}` })
            }
        }
        add()
    }, [data])

    return (
        <>
            <div className={`alert alert-${result.type}`} role="alert">
                <div>{result.message}</div>
            </div>
            <script>
                {setTimeout(() => {
                    navigate('/')
                }, 2500)}
            </script>
        </>
    )
}