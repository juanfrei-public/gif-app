import PropTypes from "prop-types";

export const Item = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
