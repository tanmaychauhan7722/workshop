const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello World!");
    res.end();
});

server.listen(3000, () => {
     console.log("Server running at http://localhost:3000");
});
function App() {
    return {
        <div>
        <h1>welcome</h1>
        <p>This is my first React Application</p>
        </div>
    };
}