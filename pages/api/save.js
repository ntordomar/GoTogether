// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fsPromises from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'my-user.json')


export default async function handler(req, res) {
  await fsPromises.writeFile(dataFilePath, JSON.stringify(req.body));
    res.status(200).json({message: 'success'});
}
