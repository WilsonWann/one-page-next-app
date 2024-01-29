import { AddressType } from "@/types";
import { areaData } from "./data";

export async function GET(request: Request): Promise<Response> {

  const data: string[] = await new Promise(resolve => {
    setTimeout(() => {
      const result = areaData.map(item => item.city)
      resolve(result)
    }, 500)
  })

  return Response.json(data)
};

