import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL)
{
    throw new Error("Mongodb URL is required");

}

let cached  = global.mongoose;
if(!cached)
{
    cached = global.mongoose = {con:null,promise:null}
}

const dbConnect = async()=> {
    if (cached.conn) {
        return cached.conn;
    }


    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose;
        })

    }

    try {
        cached.conn = await cached.promise;

    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}
export default dbConnect;