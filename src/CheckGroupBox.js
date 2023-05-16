import React, { useState } from 'react';

function CheckGroupBox({ title }) {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`CheckGroupBox ${isActive ? 'active' : ''}`}>
      <div className="checkGroupTitle" onClick={handleButtonClick}>
        <p>{title}</p>
        <button type="button" className="btnArrow">
          <span className="hidden">열기</span>
        </button>
      </div>
      <div className="checkGroupCont">
        <ul className="checkGrouplist">
          <li>
            <label className="radioBox">
              <input type="radio" name="studants" />
              <span className="radioLabel"><em>김유정</em></span>
            </label>
          </li>
          <li>
            <label className="radioBox">
              <input type="radio" name="studants" />
              <span className="radioLabel"><em>김소현</em></span>
            </label>
          </li>
          <li>
            <label className="radioBox">
              <input type="radio" name="studants" />
              <span className="radioLabel"><em>구준표</em></span>
            </label>
          </li>
          {/* 내용 */}
        </ul>
      </div>
    </div>
  );
}

export default CheckGroupBox;
