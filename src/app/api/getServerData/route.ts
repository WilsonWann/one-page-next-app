import { ShoppingItem } from "@/types";
import { shoppingList } from "./data";

export async function GET(request: Request): Promise<Response> {
  const data: ShoppingItem[] = await new Promise(resolve => {
    // setTimeout(() => {
    resolve(shoppingList)
    // }, 2000)
  })

  return Response.json(data)
};

