import { ShoppingItem } from "@/types";
import { shoppingList } from "./data";
import { getImage } from "@/lib/getLocalBase64";

export async function GET(): Promise<Response> {

  const shoppingListPromises = shoppingList.map(async (item: ShoppingItem): Promise<ShoppingItem> => {
    const { image, ...rest } = item
    if (!image) return { ...rest }

    const { src } = image
    const { base64, img } = await getImage(src)
    return {
      ...rest,
      image: {
        ...image,
        blurDataURL: base64,
        height: img.height,
        width: img.width
      }
    };
  })

  const data = await Promise.all(shoppingListPromises)

  // console.log("🚀 ~ GET ~ data:", data)

  return Response.json(data)
};

async function convertUrlToStaticFile(url: string) {
  let response = await fetch(url)
  let data = await response.blob();
  let metadata = {
    type: 'image/jpeg'
  };
  let file = new File([data], "", metadata);
  return file
}