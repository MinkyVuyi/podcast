import React, { useState } from 'react';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const { user } = await supabase.auth.signUp({
        email,
        password
      });

      console.log(user);
    
      if (error) {
        setError("Incorrect email or password"); // Set custom error message
      } else {
        setSignedIn(true);
      }
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const setError = useState(null);


    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password
      });

      console.log(user);

      if (error) {
        setError("Incorrect email or password"); // Set custom error message
      } else {
        setSignedIn(true);
      }
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  const toggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div>
      {isSigningUp ? (
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      )}
      <a href="#" onClick={toggleSignUp}>
        {isSigningUp ? 'Sign In' : 'Sign Up'}
      </a>
    </div>
  );
};

export default AuthPage;