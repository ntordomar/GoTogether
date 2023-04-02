// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fsPromises from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'my-user.json')


export default function handler(req, res) {
  // console.log(dataFilePath);
  // const jsonData = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(jsonData);
  res.status(200).json(objectData);
}

