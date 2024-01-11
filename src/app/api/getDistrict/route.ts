import { NextRequest } from "next/server";
import { areaData } from "../getCity/data";

export async function GET(request: NextRequest) {

  const url = new URL(request.url)
  const city = url.searchParams.get('city')
  if (!city) throw new Error('city not found')
  if (city === '-1') return Response.json(null)

  const data: string[] = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = areaData.find(item => item.city === city)
      if (!result) reject('data not found')
      resolve(result!.district)
    }, 500)
  })

  return Response.json(data)
};

