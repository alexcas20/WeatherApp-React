import "./styles/LoadingStyle.css";

export const Loading = () => {
  return (
    <div className="container-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
