import client from "../model/Client";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    const nama = formData.get('nama');
    const alamat = formData.get('alamat');
    const notlpn = formData.get('notlpn');
    const nowa = formData.get('nowa');
    const email = formData.get('email');

    const objClient = {
        nama:nama,
        alamat:alamat,
        notlpn:notlpn,
        nowa:nowa,
        email:email
    };
    
    await connectDB();

    const client = new client(objClient)

    await client.save();

    return Response.json(objClient);
}