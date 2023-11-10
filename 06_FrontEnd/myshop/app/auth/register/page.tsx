'use client'
import { getAntdFieldRequiredRule } from '@/app/helpers/validation';
import { Button, Form, message } from 'antd'
import Link from 'next/link'
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface userType {
    name: string;
    email: string;
    password: string;
}

function Register() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const onRegister = async (values: userType) => {
        try {
            setLoading(true);
            await axios.post("/api/auth/register", values);
            message.success("Registration successful, please login to continue");
            router.push("/auth/login");
        } catch (error: any) {
            message.error(error.response.data.message);

        } finally {
            setLoading(false);
        }

    };

    return (
        <div className='grid grid-cols-2 min-h-screen'>
            <div className='h-full bg-black flex items-center justify-center'>
                <h1 className='text-7xl font-bold text-red-500'>MY</h1>
                <h1 className='text-7xl font-bold text-gray-500'>-</h1>
                <h1 className='text-7xl font-bold text-yellow-700'>SHOP</h1>

            </div>
            <div className='flex items-center justify-center h-full'>
                <Form className='w-[500px] gap-5' layout='vertical' onFinish={onRegister} >
                    <h1 className='text-2x1 font-bold'>Register</h1>
                    <hr />
                    <br />

                    <Form.Item name="name" label="Name" rules={getAntdFieldRequiredRule('Please input your name')}>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={getAntdFieldRequiredRule('Please input your email')}>
                        <input type='email' />
                    </Form.Item>
                    <Form.Item name="password" label="password" rules={getAntdFieldRequiredRule('Please input your password')}>
                        <input type='password' />
                    </Form.Item>

                    <Button type='primary' htmlType='submit' block loading={loading}>
                        Register
                    </Button>

                    <Link href="/auth/login" className='text-black'>Already have an account? Login</Link>

                </Form>
            </div>

        </div>
    )
}

export default Register