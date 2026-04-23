export default function InputText({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="rounded-2xl p-4 h-10">
      <input className="w-full h-full outline-none bg-gray-200" {...props} />
    </div>
  );
}
