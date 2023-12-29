import path from "path";
import fsPromises from "fs/promises";

export async function getSettings() {
  const filePath = path.join(process.cwd(), "config/config.json");
  const jsonData = await fsPromises.readFile(filePath);
  const settings = JSON.parse(jsonData);
}
