import { getPlaiceholder } from "plaiceholder"

// type ImagesResults = {
//   photo: Photo[]
// }

// type Photo = {
//   src: {
//     large: string
//   }
//   blurredDataUrl?: string
// }

// export async function getBase64(imageUrl: string) {
//   try {
//     const res = await fetch(imageUrl)

//     if (!res.ok) {
//       throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
//     }

//     const buffer = await res.arrayBuffer()

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer))

//     //console.log(`base64: ${base64}`)

//     return base64

//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack)
//   }
// }

// export async function addBlurredDataUrls(images: ImagesResults): Promise<Photo[]> {

//   // Make all requests at once instead of awaiting each one - avoiding waterfall
//   const base64Promises = images.photo.map(photo => getBase64(photo.src.large))

//   // Resolve all requests in order
//   const base64Results = await Promise.all(base64Promises)

//   const photosWithBlur: Photo[] = images.photo.map((photo, i) => {
//     photo.blurredDataUrl = base64Results[i]
//     return photo
//   })

//   return photosWithBlur
// }

export default async function getBase64(imageUrl: string) {

  try {

    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const {
      metadata: { height, width },
      base64
    } = await getPlaiceholder(Buffer.from(buffer))

    return {
      base64,
      imageUrl,
      height,
      width,
    };
  } catch (e) {
    if (e instanceof Error) console.log(e.stack)
  }
  // finally {
  //     return {
  //       imageUrl,
  //     }
  //   }
};
