import { Document, Model } from "mongoose";

const deleteAllItems = async (Model: Model<any>) => {
  try {
    await Model.deleteMany({});
    console.log("Records deleted");
  } catch (error) {
    console.error(`Error deleting records, error: ${error}`);
  }
};

const fetchAllItems = async (Model: Model<any>, sortKey: string) => {
  try {
    return await Model.find({})
      .sort({ [sortKey]: 1 })
      .select("-__v -createdAt -updatedAt");
  } catch (error) {
    console.error(`Error fetching items from database, error: ${error}`);
    return [];
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
    console.error(`Error fetching items from database, error: ${error}`);
    return [];
  }
};

const fetchItemBy = async (Model: Model<any>, key: string, value: string) => {
  try {
    const items = await Model.find({ [key]: value }).select(
      "-__v -createdAt -updatedAt"
    );
    return items[0];
  } catch (error) {
    console.error(`Error fetching item from database, error: ${error}`);
    return null;
  }
};

const saveItem = async (item: Document) => {
  try {
    const savedItem = await item.save();
    console.log("Item saved");
    return savedItem;
  } catch (error) {
    console.error(`Error saving item to database, error: &{error}`);
    return null;
  }
};

const saveItems = async (Model: Model<any>, items: Record<string, any>[]) => {
  try {
    const savedItems = await Model.insertMany(items);
    console.log("Items saved");
    return savedItems;
  } catch (error) {
    console.error(`Error saving items to database, error: &{error}`);
    return [];
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
    console.error(`Error fetching items from database, error: ${error}`);
    return [];
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
    console.error(`Error updating item in database, error: ${error}`);
    return null;
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
