import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About({count}) {
    const navigate = useNavigate()
  return (
    <div>
        About page Count: {count}
    </div>
  )
}