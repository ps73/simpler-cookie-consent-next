export function Button({ children, onClick }: {
  children: React.ReactNode,
  onClick: () => void,
}) {
  return (
    <button className="bg-black px-3 py-1.5 rounded text-white" onClick={onClick}>
      {children}
    </button>
  )
}