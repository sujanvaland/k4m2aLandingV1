

  export default function EyebrowPill({ text, link }) {
    const Inner = () => (
      <div className="eyebrow-pill-inner">
        <div>{text}</div>
      </div>
    )
  
    return (
      <div className="eyebrow-pill">
        {link ? (
          <a href={link} className="eyebrow-pill-inner w-inline-block">
            <Inner />
          </a>
        ) : (
          <Inner />
        )}
        <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
      </div>
    )
  }
  
  