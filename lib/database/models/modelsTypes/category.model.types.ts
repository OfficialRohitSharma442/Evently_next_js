import { Document } from "mongoose";


interface ICategory extends Document {
  _id: string,
  name: string,
}
export default ICategory