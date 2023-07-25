const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port : ' + port);
})


const bcrypt = require('bcrypt');

const myFunction = async () => {
    const password = "Check123!";
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare("Check123!", hashedPassword);
    //const isMatch = await bcrypt.compare("check123!", hashedPassword);
    console.log(isMatch);
}

myFunction();