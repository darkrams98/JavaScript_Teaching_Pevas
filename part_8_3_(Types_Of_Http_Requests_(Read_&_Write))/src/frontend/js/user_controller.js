

var userController = {
    // getUserById: function (id) {

    //     //      method_1
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.response)
    //     }
    //     xhttp.open('GET', "/user/55136")
    //     xhttp.send()

    // },
    //      async method 
    getUserById_2: async function () {

        //      method_2
        const response = await fetch("/user/55136");
        const data = await response.json();
        console.log(data);
        return(data)
    }

}


export { userController }