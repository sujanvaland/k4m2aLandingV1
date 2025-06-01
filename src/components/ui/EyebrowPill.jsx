import PropTypes from "prop-types";


export default function EyebrowPill({ text, link }) {
  const Inner = () => (
    <div>
      <div>{text}</div>
    </div>
  )

  return (
    <div className="eyebrow-pill" style={{marginBottom: '20px'}}>
      {link ? (
        <a href={link} className="eyebrow-pill-inner w-inline-block">
          <Inner />
        </a>
      ) : (
        <Inner />
      )}
      <div className="eyebrow-pill-bg u-rainbow u-blur-perf"/>
    </div>
  )
}

// ✅ Add PropTypes for validation
EyebrowPill.propTypes = {
  text: PropTypes.string.isRequired, // Ensures text is required
  link: PropTypes.string.isRequired // Ensures link is required
};
