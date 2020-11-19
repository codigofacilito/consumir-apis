// Peticiones AJAX

/*
 action { type: , payload:  }
*/

const path = "todos";
const endpoint = "https://jsonplaceholder.typicode.com";

export default (action)=> {
  let options = {
    method: getMethod(action)
  }

  return fetch(endpoint + getPath(action), options).then( r => r.json());
}

let getMethod = (action) => {
  switch(action.type){
    case "create":
      return "POST"
    case "update":
      return "PUT"
    case "destroy":
      return "DELETE"
    case "list":
      return "GET"
    case "listAll":
      return "GET"
  }
}

let getPath = (action) => {
  switch (action.type) {
    case "create":
      return `/${path}`
    case "update":
      return `/${path}/${action.payload.id}`
    case "destroy":
      return `/${path}/${action.payload.id}`
    case "list":
      return `/${path}/${action.payload.id}`
    case "listAll":
      return `/${path}?_limit=20`
  }
}