// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { student_main_data_json } from "../../API_DATA_MAIN/STUDENT_API";
export default function handler(req, res) {
  res.status(200).json(student_main_data_json);
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
