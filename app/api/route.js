import user from "../model/User";
import connectDB from "../lib/connectdb";

export async function POST(request)
{
    await connectDB();

    const {name, age} = request.body;

    console.log(JSON.parse(request.body));

    const person = new user({
        name:name,
        age:age
    })

    await person.save();
    console.log("inside api ", name, age);
}