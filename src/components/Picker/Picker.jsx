import React from 'react';

export default function Picker({
  face,
  onFaceChange,
  top,
  onTopChange,
  bottom,
  onBottomChange,
  newCatchphrase,
  setCatchphrase,
  handleClick,
}) {
  const facePics = ['smiley', 'shy', 'observing'];
  const topPics = ['tank', 'jersey', 'polo'];
  const bottomPics = ['shorts', 'pants', 'skirt'];

  return (
    <div>
      <label>
        Face
        <select value={face} onChange={(e) => onFaceChange(e.target.value)}>
          {facePics.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Top
        <select value={top} onChange={(e) => onTopChange(e.target.value)}>
          {topPics.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Bottom
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
          {bottomPics.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        New Catchphrase:
        <input
          type="text"
          value={newCatchphrase}
          onChange={(e) => setCatchphrase(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Add Catchphrase!
      </button>
    </div>
  );
}
