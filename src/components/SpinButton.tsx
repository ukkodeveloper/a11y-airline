import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';
import VoiceOver from './VocieOver';

interface SpinButtonProps {
  name: string;
}

const SpinButton = ({ name }: SpinButtonProps) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const tooltipMessage = '최대 인원수는 3명까지 가능합니다';

  const increment = () => {
    if (count > 2) {
      setMessage(`${name}을 추가할 수 없습니다. ${name} 승객은 최대 3명까지입니다.`);
      return;
    }
    setCount((prevCount) => prevCount + 1);
    setMessage(`${name} 승객 추가 ${count + 1}`);
  };

  const decrement = () => {
    if (count <= 0) {
      setMessage(`${name}을 감소시킬 수 없습니다. ${name} 승객은 최소 0명입니다.`);
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setMessage(`${name} 승객 감소 ${count - 1}`);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <div className="spinButtonLabel">
          <label tabIndex={0} aria-label={`${name}인원 선택`}>
            {name}
          </label>
          <div
            tabIndex={0}
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            aria-label={tooltipMessage}
          >
            ?
            {isTooltipVisible && (
              <span className="tooltip" tabIndex={0}>
                {tooltipMessage}
              </span>
            )}
          </div>
        </div>
        <button
          aria-label={`${name} 탑승자 한명 줄이기`}
          onClick={decrement}
          className="spinButton"
        >
          -
        </button>
        <input
          id={name}
          type="number"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-label={`${name} ${count}`}
        />
        <button
          aria-label={`${name} 탑승자 한명 늘리기`}
          onClick={increment}
          className="spinButton"
        >
          +
        </button>
        <VoiceOver message={message} />
      </div>
    </section>
  );
};

export default SpinButton;
