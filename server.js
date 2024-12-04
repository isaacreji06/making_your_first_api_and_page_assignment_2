// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/status-info",(req,res)=>{
  let code=req.query.code
  if (code==200){
    let obj={
      "status": code,
      "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
    }
    return res.send(obj)
  }
  else if (code==201){
    let obj={
      "status":code,
      "message":"request has been successfully fulfilled and has resulted in the creation of a new resource"
    }
    return res.send(obj)
  }
  else if (code==204){
    let obj={
      "status":code,
      "message":"server has successfully processed the request, but there is no content to send in the response body"
    }
    return res.send(obj)
  }
  else if (code==400){
    let obj={
      "status": code,
      "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
    }
    return res.send(obj)
  }
  else if (code==401){
     let obj={ "status": code,
      "message":"request has not been applied because it lacks valid authentication credentials or the provided credentials are invalid."
     }
     return res.send(obj)
  }
  else if (code==403){
    let obj={ "status": code,
      "message":" the server understands the request but refuses to authorize it"
     }
     return res.send(obj)
  }
  else if (code==405){
    let obj={ "status": code,
      "message":"the server recognizes the request's HTTP method but does not support it for the targeted resource"
     }
     return res.send(obj)
  }
  else if (code==429){
    let obj={ "status": code,
      "message":"the client has sent too many requests in a given amount of time"
     }
     return res.send(obj)
  }
  else if (code==502){
    let obj={ "status": code,
      "message":"the server, while acting as a gateway or proxy, received an invalid response from an upstream server"
     }
     return res.send(obj)
  }
  else if (code==503){
    let obj={ "status": code,
      "message":"the server is currently unable to handle the request"
     }
     return res.send(obj)
  }
  else if (code==504){
    let obj={ "status": code,
      "message":"he server, while acting as a gateway or proxy, did not receive a timely response from the upstream server needed to complete the request"
     }
     return res.send(obj)
  }
  else if (code ==404){
    let obj={
      "status": code,
      "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
    }
    return res.send(obj)
  }
  else if (code==500){
    obj={
      "status": code,
      "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
    }
    return res.send(obj)
  }
  else{
    return res.send("404")
  }
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
