import React, { useState } from "react";

type Props = {
  header: (active: boolean) => React.ReactNode;
  children: React.ReactNode;
};

const Accordion = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div onClick={() => setActive((prev) => !prev)}>
        {props.header(active)}
      </div>
      {active && props.children}
    </>
  );
};

export { Accordion };
