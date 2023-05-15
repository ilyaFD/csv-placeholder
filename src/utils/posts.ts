import { IPost, TAnyObj, TAnyObjWithID } from "../types"

const completeObj = (CSVPost: TAnyObj, suppliedPost: TAnyObj): TAnyObj => {
  for (const key in CSVPost) {
    if (suppliedPost.hasOwnProperty(key)) {
      CSVPost[key] = suppliedPost[key];
    }
  }
  return CSVPost;
};

export const getCompletedPosts = (CSVPosts: IPost[], suppliedPosts: IPost[]): IPost[] => {
  return CSVPosts.map(
    CSVPost => {
      const suppliedPost = suppliedPosts.find((suppliedPost: IPost) => Number(suppliedPost.id) === Number(CSVPost.id))

      return suppliedPost ? completeObj(CSVPost, suppliedPost) : CSVPost
    }
  ) as IPost[]
}

export const generateQueryByIDs = (data: TAnyObjWithID[]) => {
  const IDsArray = data.map((item: TAnyObjWithID) => item.id)
  return `id=${IDsArray.join('&id=')}`
}