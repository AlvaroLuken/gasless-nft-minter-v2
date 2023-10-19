export default function Loader({ loadingMessage }: any) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
      <h1 className="font-mono mt-5 animate-text font-black">
        {loadingMessage}
      </h1>
    </div>
  );
}
