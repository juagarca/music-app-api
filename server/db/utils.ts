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

const saveItems = async (Model: Model<any>, items: Record<string, any>[]) => {
  try {
    const savedItems = await Model.insertMany(items);
    console.log("Items saved");
    return savedItems;
  } catch (error) {
    console.error(error);
    throw new Error("Error saving items to database");
  }
};

const deleteAllItems = async (Model: Model<any>) => {
  try {
    await Model.deleteMany({});
    console.log("Records deleted");
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting records");
  }
};

export { fetchAllItems, saveItem, saveItems, deleteAllItems };