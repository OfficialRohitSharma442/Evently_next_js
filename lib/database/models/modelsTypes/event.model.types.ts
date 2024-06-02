import { Document, Types } from "mongoose";

interface IEvent extends Document {
  _id: string,
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category?: { _id: string, name: string };
  organaizer?: { _id: string, firstName: string, lastName: string };
}

export default IEvent;
