import { useState } from 'react'

function UserLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      setIsSubmitted(true)
      console.log('Login attempt:', { email, password })
    }
  }

  if (isSubmitted) {
    return (
      <div className="login-success">
        <p>Welcome, {email}!</p>
        <button onClick={() => {
          setIsSubmitted(false)
          setEmail('')
          setPassword('')
        }}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default UserLoginForm
