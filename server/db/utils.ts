import { Document, Model } from "mongoose";

const fetchAllItems = async (Model: Model<any>) => {
  try {
    return await Model.find({}).select("-__v");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const saveItem = async (item: Document) => {
  try {
    const savedItem = await item.save();
    console.log("Item saved");
    return savedItem;
  } catch (error) {
    console.error(error);
    throw new Error("Error saving item to database");
  }
};

const deleteAllItems = async (Model: Model<any>) => {
  try {
    await Model.collection.drop();
    console.log("Collection dropped");
  } catch (error) {
    console.error(error);
    throw new Error("Error dropping collection");
  }
};

export { fetchAllItems, saveItem, deleteAllItems };
