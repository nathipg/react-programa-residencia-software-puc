import { createContext, useState } from 'react';

const FlashMsgContext = createContext({
  flashMsg: {
    isVisible: false,
    msg: '',
  },
  showHandler: msg => {},
  hideHandler: () => {},
});

export const FlashMsgContextProvider = ({ children }) => {
  const [flashMsg, setFlashMsg] = useState({
    isVisible: false,
    msg: '',
  });
  
  const showHandler = msg => {
    setFlashMsg({
      isVisible: true,
      msg,
    });
  };

  const hideHandler = () => {
    setFlashMsg({
      isVisible: false,
      msg: '',
    });
  };

  return (
    <FlashMsgContext.Provider value={{ flashMsg, showHandler, hideHandler }}>
      {children}
    </FlashMsgContext.Provider>
  )
};

export default FlashMsgContext;
