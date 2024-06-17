import { Document, Model } from "mongoose";

const deleteAllItems = async (Model: Model<any>) => {
  try {
    await Model.deleteMany({});
    console.log("Records deleted");
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting records");
  }
};

const findItemBy = async (Model: Model<any>, key: string, value: string) => {
  try {
    return await Model.find({ [key]: value }).select("-__v");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching item from database");
  }
};

const findItemById = async (Model: Model<any>, id: string) => {
  try {
    return await Model.findById(id).select("-__v");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching item from database");
  }
};

const fetchAllItems = async (Model: Model<any>) => {
  try {
    return await Model.find({}).sort({ artistName: 1 }).select("-__v");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const fetchAllItemsBy = async (
  Model: Model<any>,
  key: string,
  value: string
) => {
  try {
    return await Model.find({ [key]: value })
      .sort({ artistName: 1 })
      .select("-__v");
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

export {
  deleteAllItems,
  findItemBy,
  findItemById,
  fetchAllItems,
  fetchAllItemsBy,
  saveItem,
  saveItems,
};
