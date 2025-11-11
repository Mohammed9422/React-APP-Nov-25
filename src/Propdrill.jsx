import React from "react";

// Parent component that holds the message and passes it down
function Parent() {
    const message = "Hello from Parent";
    return (
        <div>
            <Child message={message} />
        </div>
    );
}

function Child({ message }) {
    return (
        <div>
            <Grandchild message={message} />
        </div>
    );
}

function Grandchild({ message }) {
    return (
        <div>
            <p>Message: {message}</p>
        </div>
    );
}

 function Propdrill() {
    return (
        <div>
            <Parent />
        </div>
    );
}

export default Propdrill;