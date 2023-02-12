import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'

export default function DeleteEvent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [result, setResult] = useState({})

  useEffect(() => {
    console.log(id)
    const del = async () => {
      const req = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await fetch(`http://localhost:3001/event/${id}`, req)
      if (res.ok) {
        setResult({ type: 'success', message: 'Removed event successfully' })
      }
      else {
        setResult({ type: 'danger', message: `${res.statusText}` })
      }
    }
    del()
  }, [id])

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