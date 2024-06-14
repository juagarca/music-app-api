import { writeFile } from "fs";

const saveToFile = (filePath: string, data: any[]) => {
  writeFile(filePath, JSON.stringify(data), (error) => {
    if (error) throw error;
    console.log("Data saved to file");
  });
};

export { saveToFile };
