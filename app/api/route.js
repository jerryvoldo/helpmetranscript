import client from "../model/Client";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    
    const email = formData.get('email');

    await connectDB();

    try {
        const data = client.find({email:email}).select('nama nowa');
        console.log(await data.exec());
    } catch (e) {
        console.log(e);
    }

    return Response.json({});
}