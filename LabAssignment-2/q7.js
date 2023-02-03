

    function getMonth(month) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (!months.includes(month)) {
            throw new Error(`Month ${month} not found in the list of months`);
        }
        return month;
    }

    function checkMonth() {
        try {
            const monthInput = document.getEle
            document.write(`The month entered is: ${result}`);
        } catch (error) {
            alert(error.message);
        }
    }