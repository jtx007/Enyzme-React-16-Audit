import React, { Fragment } from "react";

const FragmentComponent = () => {
  return (
    <Fragment key="1">
      <div className="fragment-child">Child 1</div>
      <div className="fragment-child">Child 2</div>
      <div className="fragment-child">Child 3</div>
    </Fragment>
  );
};

export default FragmentComponent