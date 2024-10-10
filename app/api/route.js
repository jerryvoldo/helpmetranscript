import user from "../model/User";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const res = await request.json();
    console.log(res);

    return Response.json({ done:true })
}