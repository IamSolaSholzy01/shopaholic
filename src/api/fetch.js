/*eslint-disable */

import axios from 'axios';



const URL = "https://shopaholic-api.herokuapp.com";




// export let Access_token = Cookies.get(ModuleName + '_AppToken') || Cookies.get('token');


export const Login = async (username, password, callbackfunction) => {
  
  const response = axios.post(`${URL}/users/login`, {username, password}, {
    headers: {
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    },
  });

  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const GetwithQueryString = async (method, data, callbackfunction) => {
  const { name, value } = data;

  const response = axios.get(`${URL}${method}?${name}=${value}`, {
    headers: {
     
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
    },
  });

  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const PostwithQueryParam = async (method, data, callbackfunction) => {
  // const { name, value } = data;

  console.log('logging method', method);
  const response = axios.post(`${URL}${method}${data}`, {
    headers: {
      crossorigin: true,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
    },
  });

  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const PostWithNoToken = async (data, method, callbackfunction) => {
  const response = axios.post(URL + method, data, {
    headers: {
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((err) => {
      callbackfunction(err);
    });
};

export const GetWithoutToken = async (data, method, callbackfunction) => {
  const response = axios.get(URL + method, data);
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((err) => {
      callbackfunction(err);
    });
};

export const GetWithData = async (method, data, callbackfunction) => {
  let Access_token = localStorage.getItem("token")
  const response = axios.get(URL + method, {params:data}, {
    headers: {
      Authorization: `Bearer ${Access_token}`,
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((err) => {
      callbackfunction(err);
    });
};

export const GetWithoutData = async (method, callbackfunction) => {
  const response = axios.get(URL + method, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      withCredentials: true,
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'GET',
      'content-type': 'application/json',
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((err) => {
      callbackfunction(err);
    });
};

export const Post = async (data, method, callbackfunction) => {
 
  console.log('post data', data);
  const response = axios.post(URL + method, data, {
    headers: {
      // Authorization: `Bearer ${Access_token}`,
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};



export const PostWithoutData = async (method, callbackfunction) => {
  const response = axios.post(URL + method);
  // console.log('Logging response', response);
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const Get = async (method, callbackfunction) => {
  const response = axios.get(`${URL}${method}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'GET',
      'content-type': 'application/json',
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const GetWithToken = async (method, data, callbackfunction) => {
  
  console.log(localStorage.getItem("token"))
  const response = axios.get(`${URL}${method}`, {
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const Put = async (data, method, callbackfunction) => {
  Access_token = Cookies.get(ModuleName + '_AppToken') || Cookies.get('token');
  const response = axios.put(`${URL}${method}`, data, {
    headers: { Authorization: `Bearer ${Access_token}` },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export const Delete = async (method, callbackfunction) => {
  Access_token = Cookies.get(ModuleName + '_AppToken') || Cookies.get('token');
  const response = axios.delete(URL + method, {
    headers: { Authorization: `Bearer ${Access_token}` },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};

export default {
  Post,
  Get,
  Put,
  Delete,
  PostWithoutData,
  PostWithNoToken,
  GetWithoutToken,
  GetwithQueryString,
  PostwithQueryParam,
  GetWithData,
};
