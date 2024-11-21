const appControllers = {
    about: (req, res) => {
        res.json("hello Welcome to our Borrow Microservce");
    },

    default: (req, res) => {
        res.json("Hello !!! Welcome to library Service");
    }
}

export default appControllers;