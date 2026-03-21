const { useState } = React;

export const ColorPicker = () => {
  // Step 2-5: Initialize state using useState and array destructuring
  const [color, setColor] = useState("#ffffff");

  // Step 11 & 14: Handle change
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    // Step 6-7: Container with dynamic background
    <div
      id="color-picker-container"
      style={{
        backgroundColor: color,
        padding: "20px",
        borderRadius: "8px",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Step 8-13: Color input field */}
      <input
        id="color-input"
        type="color"
        value={color}
        onChange={handleChange}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
