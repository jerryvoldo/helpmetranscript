import user from "../model/User";
import connectDB from "../lib/connectdb";

export async function POST(request, response)
{
    await connectDB();

    const {name, age} = request.body;

    const person = new user({
        name:name,
        age:age
    })

    await person.save();
    console.log("inside api ", name, age);
    response.status(200).json({done: true});
}