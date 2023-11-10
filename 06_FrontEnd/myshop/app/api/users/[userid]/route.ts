import { NextRequest, NextResponse } from "next/server";


interface Params {
    userid: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const userid = params.userid;
    return NextResponse.json({
        success: true,
        data: {
            id: userid,
            name: 'Antonio Bucchiarone'
        },
    });
}