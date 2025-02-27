

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
      <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
    </div>
  )
}

