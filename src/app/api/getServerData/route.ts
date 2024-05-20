// import { ShoppingItem } from "@/types";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.utils";

export async function GET(): Promise<Response> {

  const shoppingList = await getCategoriesAndDocuments()

  // console.log("🚀 ~ GET ~ shoppingList:", shoppingList)

  return Response.json(shoppingList)
};

// async function convertUrlToStaticFile(url: string) {
//   let response = await fetch(url)
//   let data = await response.blob();
//   let metadata = {
//     type: 'image/jpeg'
//   };
//   let file = new File([data], "", metadata);
//   return file
// }