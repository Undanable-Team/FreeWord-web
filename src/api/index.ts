import ky from "ky";

const strapiApi = ky.create({
  prefixUrl: "https://freeword-api.onrender.com/api",
});

export const uploadFile = async (file: any) => {
  return await strapiApi.post("upload", { body: file }).json();
};

export const sendReport = (data: any) => {
  return strapiApi.post("reports", { json: { data: { data } } }).json();
};
export const getData = () => {
  return strapiApi.get("reports?populate=deep").json();
};
