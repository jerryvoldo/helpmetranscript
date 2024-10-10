import user from "../model/User";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    const formData = await request.formData();
    const name = formData.get('name');
    const age = formData.get('age');
    
    await connectDB();

    const person = new user({
        name:name,
        age:age
    })

    await person.save();
    console.log("inside api ", name, age);

    return Response.json({name, age});
}