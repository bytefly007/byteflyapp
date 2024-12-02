import { signInWithRedirect, getCurrentUser, fetchUserAttributes, signOut } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      setUser(userAttributes);
    } catch (error) {
      console.log('未登录', error);
      setUser(null);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect({
        provider: 'Google',
        options: {
          redirectSignIn: 'http://localhost:5173',
          redirectSignOut: 'http://localhost:5173'
        }
      });
    } catch (error) {
      console.error('Google登录失败:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('退出登录失败:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Hello from Amplify</h1>
        
        {user ? (
          <div>
            <p>欢迎, {user.name}</p>
            <p>邮箱: {user.email}</p>
            <img 
              src={user.picture} 
              alt="用户头像" 
              style={{ width: 50, height: 50, borderRadius: '50%' }}
            />
            <button onClick={handleSignOut}>
              退出登录
            </button>
          </div>
        ) : (
          <button onClick={handleGoogleSignIn}>
            使用Google登录
          </button>
        )}
      </header>
    </div>
  );
}

export default App;