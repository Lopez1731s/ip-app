import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = ({ data }) => {
    updateData({
      pending: true,
      data: undefined,
      error: undefined,
    });

    axios
      .get("https://ipinfo.io/" + data.ip + "?token=" + process.env.React_App_ACCESS_TOKEN_IP)
      .then((response) => {
        updateData({
          pending: false,
          data: response.data,
          error: undefined,
        });
      })
      .catch((error) => {
        updateData({
          pending: false,
          data: undefined,
          error: error.response.data.error,
        });
      });
  };

  return { ...postData, execute };
};

export default useFetch;
