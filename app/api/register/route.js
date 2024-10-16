import client from "../../model/Client";
import connectDB from "../../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    const nama_client = formData.get('nama');
    const alamat = formData.get('alamat');
    const notlpn = formData.get('notlpn');
    const nowa = formData.get('nowa');
    const email = formData.get('email');

    const nama_perusahaan = formData.get('nama_perusahaan');
    const alamat_perusahaan = formData.get('alamat_perusahaan');
    const notlpn_perusahaan = formData.get('notlpn_perusahaan');
    const nowa_perusahaan = formData.get('nowa_perusahaan');
    const email_perusahaan = formData.get('email_perusahaan');

    const objClient = {
        nama:nama_client,
        alamat:alamat,
        notlpn:notlpn,
        nowa:nowa,
        email:email,
        asosiasi_perusahaan : 
        {
            nama:nama_perusahaan,
            alamat:alamat_perusahaan,
            notlpn:notlpn_perusahaan,
            nowa:nowa_perusahaan,
            email:email_perusahaan,
        }
    };
    
    await connectDB();

    const consult = new client(objClient)

    await consult.save();

    return Response.json(objClient);
}