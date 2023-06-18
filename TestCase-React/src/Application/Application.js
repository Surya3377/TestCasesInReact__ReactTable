import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fiels are mandatory</p>
      <span title="close">close</span>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUQxFrocIi9rte_eNvRee_Ql7EgtVTy5fag&usqp=CAU"
        alt="a person with a laptop"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="vishwas"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select Country</option>
            <option value="IN">India</option>
            <option value="AUS">Australia</option>
            <option value="ENG">England</option>
            <option value="NZ">Newzelans</option>
            <option value="CA">Canada</option>
            <option value="US">United States</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree terms and conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};

export default Application;
