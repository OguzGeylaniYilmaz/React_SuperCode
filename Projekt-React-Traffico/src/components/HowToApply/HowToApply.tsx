import "./HowToApply.css";
import Photo from "../../assets/images/illustrations.png";

const HowToApply = () => {
  return (
    <div className="how-to-apply">
      <div className="apply-pic">
        <img src={Photo}></img>
      </div>

      <div className="how-to-apply-content">
        <h2>How To Apply</h2>
        <p>
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </p>
      </div>
    </div>
  );
};

export default HowToApply;
