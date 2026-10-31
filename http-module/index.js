const http = require('http');
const { read_file, write_file } = require('./file-system/file-sys');

const app = http.createServer((req, res) => {
  // GET
  if (req.method === 'GET' && req.url === '/posts') {
    let fileData = read_file("posts.json")

    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(fileData));
  }

  // POST
  if(req.method === "POST" && req.url === "/add_post") {
    req.on("data", (chunk) => {
      const bodyData = JSON.parse(chunk);
      let fileData = read_file("posts.json")

      fileData.push(bodyData)
      write_file("posts.json", fileData)
      res.writeHead(201, {"content-type": "application/json"})
      res.end(JSON.stringify({
        message: "added new post"
      }))
    })
  }

  // GET
  if (req.method === 'GET' && req.url === '/cars') {
    let fileData = read_file("cars.json")

    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(fileData));
  }

  // POST
  if(req.method === "POST" && req.url === "/add_car") {
    req.on("data", (chunk) => {
      const bodyData = JSON.parse(chunk);
      let fileData = read_file("cars.json")

      fileData.push(bodyData)
      write_file("cars.json", fileData)
      res.writeHead(201, {"content-type": "application/json"})
      res.end(JSON.stringify({
        message: "added new car"
      }))
    })
  }

  // GET
  if (req.method === 'GET' && req.url === '/students') {
    let fileData = read_file("students.json")

    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(fileData));
  }

  // POST
  if(req.method === "POST" && req.url === "/add_student") {
    req.on("data", (chunk) => {
      const bodyData = JSON.parse(chunk);
      let fileData = read_file("students.json")

      fileData.push(bodyData)
      write_file("students.json", fileData)
      res.writeHead(201, {"content-type": "application/json"})
      res.end(JSON.stringify({
        message: "added new student"
      }))
    })
  }

  // GET
  if (req.method === 'GET' && req.url === '/teachers') {
    let fileData = read_file("teachers.json")

    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(fileData));
  }

  // POST
  if(req.method === "POST" && req.url === "/add_teacher") {
    req.on("data", (chunk) => {
      const bodyData = JSON.parse(chunk);
      let fileData = read_file("teachers.json")

      fileData.push(bodyData)
      write_file("teachers.json", fileData)
      res.writeHead(201, {"content-type": "application/json"})
      res.end(JSON.stringify({
        message: "added new teacher"
      }))
    })
  }

  // GET
  if (req.method === 'GET' && req.url === '/products') {
    let fileData = read_file("products.json")

    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(fileData));
  }

  // POST
  if(req.method === "POST" && req.url === "/add_product") {
    req.on("data", (chunk) => {
      const bodyData = JSON.parse(chunk);
      let fileData = read_file("products.json")

      fileData.push(bodyData)
      write_file("products.json", fileData)
      res.writeHead(201, {"content-type": "application/json"})
      res.end(JSON.stringify({
        message: "added new product"
      }))
    })
  }
});


app.listen(3000, () => {
  console.log('Server 3000-Portda ishladi');
});
