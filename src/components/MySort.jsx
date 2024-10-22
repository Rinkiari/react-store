import { useState } from 'react';
import '../scss/components/sort.scss';

const MySort = () => {
  const [open, setOpen] = useState(false);
  const [chose, setChoice] = useState(0);
  const spisok = ['Popular', 'Price', 'Name'];

  const megaFunc = (i) => {
    setChoice(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <span onClick={() => setOpen(!open)}>{spisok[chose]}</span>
      </div>

      {open && (
        <div className="sort__popup">
          <ul>
            {spisok.map((el, i) => (
              <li key={i} className={chose === i ? 'active' : ''} onClick={() => megaFunc(i)}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MySort;
