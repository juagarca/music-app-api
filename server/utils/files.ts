import { writeFile } from "fs";
import { v4 as uuidv4 } from "uuid";

const addToFile = (collection: object[], newItem: object, filepath: string) => {
  const id = uuidv4();
  collection.push({ id, ...newItem });

  writeFile(filepath, JSON.stringify(collection), (err) => {
    if (err) throw err;
    console.log(`Favourite with id: ${id} added`);
  });
};

export { addToFile };
