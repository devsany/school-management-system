// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { help_api } from "../../../HELP_API/HELP_API_DATA";
export default function handler(req, res) {
  res.status(200).json(help_api);
}
// export default function handler(req, res) {
//   const { id } = req.query;

//   if (req.method === 'GET') {
//     const student = student_main_data_json.find(student => student.id === parseInt(id));
//     if (student) {
//       res.status(200).json(student);
//     } else {
//       res.status(404).json({ message: 'Student not found' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
