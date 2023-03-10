export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: "1px solid lightgray",
        padding: 20,
        margin: 20,
      }}
    >
      {children}
    </div>
  );
}
