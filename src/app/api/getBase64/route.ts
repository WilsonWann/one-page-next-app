import { getPlaiceholder } from "plaiceholder"
import { type NextRequest } from 'next/server'
import Error from "next/error"

export async function GET(request: NextRequest): Promise<Response> {

  const searchParams = request.nextUrl.searchParams
  const imageUrl = searchParams.get('imageUrl') as string
  try {

    const res = await fetch(imageUrl)

    const buffer = await res.arrayBuffer()

    const {
      metadata: { height, width },
      base64
    } = await getPlaiceholder(Buffer.from(buffer))

    return Response.json({
      base64,
      imageUrl,
      height,
      width,
    });

  } catch (error) {
    return new Response(`get blurred image error: ${error}`, {
      status: 400,
    })
  }
};
