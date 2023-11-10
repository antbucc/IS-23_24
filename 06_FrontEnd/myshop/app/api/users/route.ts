import { connectDB } from "@/configs/dbConfig";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
    return NextResponse.json({
        success: true,
        data: [
            {
                id: 1,
                name: "Antonio Bucchiarone"
            },

        ],
    });
}