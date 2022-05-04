const app = require("./server/app.server");

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`web scrapping Server: listening on port ${port}`);
});

