import queryString from "query-string";

export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "7948b777e34e4a39f237535444ae8eef";

export const API_KEY_4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ4Yjc3N2UzNGU0YTM5ZjIzNzUzNTQ0NGFlOGVlZiIsInN1YiI6IjYwZGRlMDE5ZDk1NDIwMDA1ZDMyZWYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIc4NPNsXK-5MDLJUafpnC0IbDByNkeoZP5UXII-oIU";

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(response => {
        response.json().then(error => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params
    };
  
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
  }
  static post(url, options = {}) {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
  }
}