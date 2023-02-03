
    let addButton = document.querySelector("#addButton");
    addButton.addEventListener("click", function () {
        let input1 = document.querySelector("#input1").value;
        let input2 = document.querySelector("#input2").value;
        try {
            if (isNaN(input1) || isNaN(input2)) {
                throw new Error("Both inputs must be numbers.");
            }
            let result = parseInt(input1) + parseInt(input2);
            document.write("Result: " + result);
        } catch (error) {
            alert(error.message);
        }
    });