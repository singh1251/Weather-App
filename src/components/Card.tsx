export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 py-2 px-4 my-2 rounded-2xl text-[#03045e]">
      {children}
    </div>
  );
}
