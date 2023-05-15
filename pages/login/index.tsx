import { useState } from 'react';

import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 执行登录逻辑，发送 POST 请求到后端进行身份验证
    try {
      const response = await fetch('https://opchen.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // 登录成功，重定向到受保护的页面
        router.push('/');
      } else {
        // 登录失败，显示错误信息
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Error occurred during login:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="ad-container">
        <img
          className="ad-image"
          src="/path/to/ad-image.jpg"
          alt="Advertisement"
        />
      </div>
      <div className="form-container">
        <h1>输入账号和密码登录</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">登录</button>
        </form>
      </div>
      <style jsx>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .ad-container {
          display: flex;
          justify-content: center;
          margin-right: 2rem;
        }

        .ad-image {
          max-width: 100%;
          display: ${typeof window !== 'undefined' && window.innerWidth < 640
            ? 'none'
            : 'block'};
        }

        .form-container {
          max-width: 400px;
          padding: 2rem;
          background-color: #f5f5f5;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
          margin-top: 0;
          margin-bottom: 35px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 0.5rem;
        }

        input {
          padding: 0.5rem;
          margin-bottom: 1rem;
        }

        button {
          padding: 0.5rem 1rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
