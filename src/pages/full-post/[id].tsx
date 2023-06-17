import NewsCardMore from "@/components/NewsCardMore/NewsCardMore";
import { useRouter } from "next/router";
import React from "react";

const FullPostPage = () => {
  const router = useRouter();
  console.log(router);

  if (router.query.id) {
    return <NewsCardMore id={router.query.id} />;
  }
};

export default FullPostPage;
