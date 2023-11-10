"use client";
import { getAntdFieldRequiredRule } from "@/app/helpers/validation";
import { Button, Form, message } from "antd";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface userType {
    email: string;
    password: string;
}

function Login() {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const onLogin = async (values: userType) => {
        try {
            setLoading(true);
            await axios.post("/api/auth/login", values);
            message.success("Login successful");
            router.push("/");
        } catch (error: any) {
            message.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div className="h-full bg-black hidden md:flex items-center justify-center">
                <h1 className="text-7xl font-bold text-red-500">Shey</h1>
                <h1 className="text-7xl font-bold text-gray-500">-</h1>
                <h1 className="text-7xl font-bold text-yellow-500">Shop</h1>
            </div>

            <div className="flex items-center justify-center h-full">
                <Form
                    className="w-[400px] flex flex-col gap-5"
                    layout="vertical"
                    onFinish={onLogin}
                >
                    <h1 className="text-2xl font-bold">Login</h1>

                    <hr />

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={getAntdFieldRequiredRule("Please input your email!")}
                    >
                        <input type="email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={getAntdFieldRequiredRule("Please input your password!")}
                    >
                        <input type="password" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block loading={loading}>
                        Login
                    </Button>

                    <Link href="/auth/register" className="text-primary">
                        Dont have an account? Register
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;