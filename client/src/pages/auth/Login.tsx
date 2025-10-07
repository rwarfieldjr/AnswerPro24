import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMessage(error ? error.message : 'Logged in successfully!')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
