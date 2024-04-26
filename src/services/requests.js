import { api } from "./api";

export async function Request(
  url,
  body,
  ...options
) {
  try {
    const createResponse = await fetch(url, {
      body,
      ...options
    })

    console.log("createResponse", createResponse)

    // return createResponse.data
  } catch (error) {
    console.log(error);
    // return error.response.message
  }
}