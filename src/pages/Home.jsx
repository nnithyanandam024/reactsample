import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home({count}) {
    const navigate = useNavigate()
  return (
    <div>
        Home page Count: {count}
    </div>
  )
}
