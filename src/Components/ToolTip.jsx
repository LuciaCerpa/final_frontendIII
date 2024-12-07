const Tooltip = ({ children, text }) => {
    return (
      <div className="tooltip-container">
        {children}
        <span className="tooltip-text">{text}</span>
      </div>
    );
  };


  export default Tooltip;