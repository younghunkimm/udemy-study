/**
 * Callback
 */
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

// 이러한 콜백지옥 때문에 Promise 가 나옴
fakeRequestCallback('books.com/page1',
function(response) {
    console.log("IT WORKED!!!!");
    console.log(response);
    fakeRequestCallback('books.com/page2',
        function (response) {
            console.log("IT WORKED AGAIN!!!!");
            console.log(response);
            fakeRequestCallback('books.com/page3',
                function (response) {
                    console.log("IT WORKED AGAIN (3rd req)!!!!");
                    console.log(response);
                },
                function (err) {
                    console.log("ERROR (3nd req)!!!", err);
                }
            )
        },
        function (err) {
            console.log("ERROR (2nd req)!!!", err);
        }
    )
}, function(err) {
    console.log(err);
});