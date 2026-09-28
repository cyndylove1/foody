interface TitleProps {
  text?: string;
  className?: string;
}
export default function Title({ text, className }: TitleProps) {
  return (
    <>
      <div className={`space-y-2 flex flex-col ${className}`}>
        <h2 className="text-2xl md:text-3xl font-semibold  text-gray-900 tracking-tight text-center">
          {text}
        </h2>
      </div>
    </>
  );
}
