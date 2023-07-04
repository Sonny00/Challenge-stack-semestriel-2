import { useEffect } from "react";
import useRequest from "../hooks/use-request";
import Router from "next/router";

const Signout = () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Vous êtes déconnecté</div>;
};

export default Signout;
