export default function DateTime() {
  return (
    <p className="text-center mt-4">
      {new Date().toLocaleString()}
    </p>
  );
}
 