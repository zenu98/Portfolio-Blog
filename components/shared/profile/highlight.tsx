const Highlight = ({
  children,
  color = "black",
  bold = true,
}: {
  children: React.ReactNode;
  color?: "black" | "orange" | "blue" | "green";
  bold?: boolean;
}) => {
  const colorClasses = {
    orange: "text-orange-500",
    blue: "text-blue-600",
    green: "text-green-600",
  };

  return (
    <span className={`${bold ? "font-bold" : ""} ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

export default Highlight;
