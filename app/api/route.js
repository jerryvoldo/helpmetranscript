import client from "../model/Client";
import connectDB from "../lib/connectdb";
 
import { redirect } from 'next/navigation'

export async function POST(request)
{
    const formData = await request.formData();
    
    const email = formData.get('email');

    await connectDB();

    try {
        const data = client.find({email:email}).select('asosiasi_perusahaan');
        const perusahaans = await data.exec();
        console.log(perusahaans);
    } catch (e) {
        console.log(e);
    }

    redirect('/');
    
}