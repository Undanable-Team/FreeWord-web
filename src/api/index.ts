import ky from "ky";

const strapiApi = ky.create({
  prefixUrl: "localhost:1337/api",
});

export const uploadFile = async (file: any) => {
  return await strapiApi.post("upload", { body: file }).json();
};

export const sendReport = async (data: any) => {
  return await strapiApi.post("reports", { json: data }).json();
};
