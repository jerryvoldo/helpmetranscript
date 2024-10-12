import client from "../model/Client";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    
    const email = formData.get('email');

    await connectDB();

    const consult = new client();

    const data = await consult.find({nama:email}).exec();

    return Response.json(data);
}