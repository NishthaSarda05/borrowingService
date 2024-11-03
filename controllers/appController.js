const controllers = {
    about: (req, res) => {
        res.json("hello Welcome to our Microservce");
    },

    default: (req, res) => {
        res.json("this is defalut Screen");
    }
}

export default controllers;