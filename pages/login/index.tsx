import { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../styles/login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 执行登录逻辑，发送 POST 请求到后端进行身份验证
    try {
      const response = await fetch('/api/customerLogin', {
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
    <div className="flex flex-col h-screen bg-gray-100">
      <Head>
        <title>登录</title>
      </Head>
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-4/12 2xl:w-4/12 
                px-6 py-10 sm:px-20 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            请输入用户名和密码进行登录
          </h2>
          <form className="mt-10" onSubmit={handleLogin}>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              用户名
            </label>
            <input
              id="username"
              type="username"
              name="username"
              placeholder="username"
              autoComplete="username"
              className="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              密码
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              登录
            </button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="#" className="flex-2 underline">
                忘记密码？
              </a>

              <p className="flex-1 text-gray-500 text-md mx-2 my-1 sm:my-auto">
                或者
              </p>

              <a href="#" className="flex-2 underline">
                创建一个新账户
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
