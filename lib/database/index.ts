import mongoose from "mongoose"
const MONGODB_URI = process.env.MONGODB_URI
let cashed = (global as any).mongoose || { conn: null, promise: null }
export const connectToDatabase = async () => {
  if (cashed.conn)
    return cashed.conn

  if (!MONGODB_URI) throw new Error("MongoDB URI is Missing")

  cashed.promise = cashed.promise || mongoose.connect(MONGODB_URI, {
    dbName: "evently",
    bufferCommands: false
  })
  cashed.conn = await cashed.promise;
  if (cashed.conn) {
    console.log("Rohit Database Connnect Successfully", cashed)
  }
  return cashed.conn

}