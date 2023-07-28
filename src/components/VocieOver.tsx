interface VoiceOverProps {
  message: string;
}

const VoiceOver = ({ message }: VoiceOverProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      aria-live="assertive"
      aria-atomic="true"
    >
      {message}
    </div>
  );
};

export default VoiceOver;
