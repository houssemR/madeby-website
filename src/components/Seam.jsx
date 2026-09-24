/* The running stitch that joins two bands.
   Every store page has this thread running across it, tying the mascot to
   the cut-out card to the chips. Here it does the same job between sections:
   the next band's colour rises along a soft curve and the stitch is sewn
   along the join. */
export default function Seam({ to, dark = false }) {
  const curve = 'M0,26 C 300,74 560,-8 900,30 C 1180,62 1330,12 1440,42';
  return (
    <div className="seam seam--bottom" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path d={`${curve} L1440,72 L0,72 Z`} fill={to} />
        <path
          d={curve}
          fill="none"
          stroke={dark ? 'rgba(251,246,236,0.5)' : 'rgba(31,51,38,0.28)'}
          strokeWidth="2.5"
          strokeDasharray="10 8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
