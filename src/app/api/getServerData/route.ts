import { ShoppingItem } from "@/types";
// import { shoppingList } from "./data";

export async function GET(request: Request): Promise<Response> {

  const shoppingList = await fetch('http://localhost:4200/api/product')
    .then((res) => res.json())
  console.log("🚀 ~ GET ~ shoppingList:", shoppingList)

  // const data = await Promise.all(
  //   shoppingList.map(async (item: ShoppingItem): Promise<ShoppingItem> => {
  //     console.log("🚀 ~ shoppingList.map ~ item:", item)
  //     const imageFile = await convertUrlToStaticFile(item.imageSrc)
  //     return {
  //       ...item,
  //       image: imageFile
  //     };
  //   })
  // )

  // console.log("🚀 ~ GET ~ data:", data)

  return Response.json(shoppingList)
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