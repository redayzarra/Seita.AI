import React from "react";
import SubmitButton from "./SubmitButton";

const DemoPage = () => {
  return (
    <form onSubmit={() => null}>
      <div className="mb-3">
        <label htmlFor="IG_Username" className="form-label">
          Instagram Username:{" "}
        </label>
        <input
          id="IG_Username"
          type="text"
          className="input input-bordered w-full max-w-xs mt-1"
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default DemoPage;
