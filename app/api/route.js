import client from "../model/Client";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    
    const email = formData.get('email');

    await connectDB();

    const consult = new client();

    try {
        const data = consult.find({}).exec();
    } catch (e) {
        console.log(e);
    }

    return Response.json({});
}