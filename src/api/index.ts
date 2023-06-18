import ky from "ky";

const strapiApi = ky.create({
  prefixUrl: "http://localhost:1337/api",
});

export const uploadFile = async (file: any) => {
  return await strapiApi.post("upload", { body: file }).json();
};

export const sendReport = (data: any) => {
  return strapiApi.post("reports", { json: { data: { data } } }).json();
};
