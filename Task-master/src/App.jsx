import React, { useState } from "react";
import "./index.css";

function LabTest() {
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [subTests, setSubTests] = useState([]);

  const addSubTest = () => {
    setSubTests([...subTests, { name: "", subCategories: [] }]);
  };

  const deleteSubTest = (index) => {
    setSubTests(subTests.filter((_, i) => i !== index));
  };

  const updateSubTestName = (index, value) => {
    const updated = [...subTests];
    updated[index].name = value;
    setSubTests(updated);
  };

  const addSubCategory = (stIndex) => {
    const updated = [...subTests];
    updated[stIndex].subCategories.push({ name: "", options: [] });
    setSubTests(updated);
  };

  const deleteSubCategory = (stIndex, scIndex) => {
    const updated = [...subTests];
    updated[stIndex].subCategories = updated[stIndex].subCategories.filter((_, i) => i !== scIndex
    );
    setSubTests(updated);
  };

  const updateSubCategoryName = (stIndex, scIndex, value) => {
    const updated = [...subTests];
    updated[stIndex].subCategories[scIndex].name = value;
    setSubTests(updated);
  };

  const addOption = (stIndex, scIndex) => {
    const updated = [...subTests];
    updated[stIndex].subCategories[scIndex].options.push({ name: "" });
    setSubTests(updated);
  };

  const deleteOption = (stIndex, scIndex, opIndex) => {
    const updated = [...subTests];
    updated[stIndex].subCategories[scIndex].options =
      updated[stIndex].subCategories[scIndex].options.filter(
        (_, i) => i !== opIndex
      );
    setSubTests(updated);
  };

  const updateOptionName = (stIndex, scIndex, opIndex, value) => {
    const updated = [...subTests];
    updated[stIndex].subCategories[scIndex].options[opIndex].name = value;
    setSubTests(updated);
  };

  const submitHandler = () => {
    const TestData = { testName, description, subTests };
    console.log("Submitted TestData:", TestData);
    alert("Check console for TestData");
  };

  return (
    <div className="lab-container">
      <h2>Add Lab Test</h2>

      <input
        className="lab-input"
        placeholder="Test Name"
        value={testName}
        onChange={(event) => setTestName(event.target.value)}
      />

      {subTests.map((subTest, stIndex) => (
        <div key={stIndex} className="sub-test">
          <input
            className="lab-input"
            placeholder="Enter Sub Test"
            value={subTest.name}
            onChange={(event) => updateSubTestName(stIndex, event.target.value)}
          />

          <button
            className="btn btn-add"
            onClick={() => addSubCategory(stIndex)}>
            Sub Category
          </button>

          <button
            className="btn btn-delete"
            onClick={() => deleteSubTest(stIndex)}>
            delete
          </button>

          {subTest.subCategories.map((subCategory, scIndex) => (
            <div key={scIndex} className="sub-category">
              <input
                className="lab-input"
                placeholder="Enter Sub Category"
                value={subCategory.name}
                onChange={(event) =>
                  updateSubCategoryName(stIndex, scIndex, event.target.value)
                }
              />

              <button
                className="btn btn-add"
                onClick={() => addOption(stIndex, scIndex)}
              >Option
              </button>

              <button
                className="btn btn-delete"
                onClick={() => deleteSubCategory(stIndex, scIndex)}
              >delete
              </button>

              {subCategory.options.map((option, opIndex) => (
                <div key={opIndex} className="option">
                  <input
                    className="lab-input"
                    placeholder="Enter Option"
                    value={option.name}
                    onChange={(event) =>
                      updateOptionName(
                        stIndex,
                        scIndex,
                        opIndex,
                        event.target.value
                      )
                    }
                  />

                  <button
                    className="btn btn-delete"
                    onClick={() =>
                      deleteOption(stIndex, scIndex, opIndex)
                    }
                  >delete
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      <button className="btn btn-main" onClick={addSubTest}>
        Add Sub Test
      </button>

      <textarea
        className="lab-textarea"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button className="btn btn-main" onClick={submitHandler}>
        Add Lab Test
      </button>
    </div>
  );
}

export default LabTest;