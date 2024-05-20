import { ShoppingItem } from "@/types";
import { addCollectionAndDocuments } from "@/utils/firebase/firebase.utils";

export async function GET(): Promise<Response> {


  // await addCollectionAndDocuments("categories", SHOPPING_LIST)
  // const shoppingListPromises = SHOPPING_LIST
  // .map(async (item: ShoppingItem): Promise<ShoppingItem> => {
  //   const { image, ...rest } = item
  //   if (!image) return { ...rest }

  //   const { src } = image
  //   const { base64, img } = await getImage(src)
  //   return {
  //     ...rest,
  //     image: {
  //       ...image,
  //       blurDataURL: base64,
  //       height: img.height,
  //       width: img.width
  //     }
  //   };
  // })

  // const data = await Promise.all(shoppingListPromises)

  // console.log("🚀 ~ GET ~ data:", data)

  return Response.json(SHOPPING_LIST)
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