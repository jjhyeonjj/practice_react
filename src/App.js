import React from 'react';
import CheckGroupBox from './CheckGroupBox';

function App() {
  return (
    <div>
      <CheckGroupBox title="[서원수학] 2학년 수학 A반 (10명)" />
      <CheckGroupBox title="[서원과학] 1학년 과학 B반 (8명)" />
      {/* 추가적인 CheckGroupBox들 */}
    </div>
  );
}

export default App;
