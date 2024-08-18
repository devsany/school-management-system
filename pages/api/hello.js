// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { student_main_data_json } from "../../COMPONENT/API_DATA_MAIN/STUDENT_API";
export default function handler(req, res) {
  res.status(200).json(student_main_data_json);
}
