import rawData from "./rawData";

// eslint-disable-next-line no-unused-vars
export default async function getData(url) {
    //обычно как то так выглядит получение данных из API
    // const token =  process.env.API_TOKEN
    // let response = await fetch(url, {
    //     headers: {
    //         Authentication: `Bearer ${token}`
    //     }
    // });
    // return await response.json();
  await new Promise((resolve) => setTimeout(resolve, 300));
    return rawData
}