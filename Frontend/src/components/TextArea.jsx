import React from "react";

function TextArea() {
  return (
    <div className="grid gap-6">
      <h1 className="text-xl">How Can We Improve ...</h1>
      <textarea
        name="Feedback"
        id="Feedback"
        placeholder="Type Here ...."
        className="w-full h-48 outline-none border-2 p-2 resize-none"
      ></textarea>
    </div>
  );
}

export default TextArea;
