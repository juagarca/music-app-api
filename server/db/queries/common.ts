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

const fetchAllItems = async (Model: Model<any>, sortKey: string) => {
  try {
    return await Model.find({})
      .sort({ [sortKey]: 1 })
      .select("-__v -createdAt -updatedAt");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const fetchAllItemsBy = async (
  Model: Model<any>,
  key: string,
  value: string,
  sortKey: string
) => {
  try {
    return await Model.find({ [key]: value })
      .sort({ [sortKey]: 1 })
      .select("-__v -createdAt -updatedAt");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const fetchItemBy = async (Model: Model<any>, key: string, value: string) => {
  try {
    const items = await Model.find({ [key]: value }).select(
      "-__v -createdAt -updatedAt"
    );
    return items[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching item from database");
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

const searchItemsBy = async (
  Model: Model<any>,
  key: string,
  value: string,
  sortKey: string
) => {
  try {
    const regex = new RegExp(value, "i");
    return await Model.find({ [key]: { $regex: regex } })
      .sort({ [sortKey]: 1 })
      .select("-__v -createdAt -updatedAt");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const updateItem = async (Model: Model<any>, item: Document) => {
  try {
    const updatedItem = await Model.findByIdAndUpdate(item._id, item, {
      new: true,
    });
    console.log("Item updated");
    return updatedItem;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating item in database");
  }
};

export {
  deleteAllItems,
  fetchAllItems,
  fetchAllItemsBy,
  fetchItemBy,
  saveItem,
  saveItems,
  searchItemsBy,
  updateItem,
};
