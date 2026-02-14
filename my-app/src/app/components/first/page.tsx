import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">
        Welcome to the Number Guessing Game!
      </h1>

      <Link
        href="./components/level"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
      >
        Play
      </Link>

      <br></br>


      <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-sm space-y-3 text-sm text-gray-700">
  <h3 className="text-lg font-semibold text-gray-900">
    Game Instructions
  </h3>
  <p>• A random number is generated within the selected range.</p>
  <p>• Enter your guess and click Confirm.</p>
  <p>• You will receive feedback after each attempt.</p>
  <p>• The game ends when you guess correctly or run out of attempts.</p>
  <p>• Use Restart to start a new round.</p>
</div>
    </div>
  );
}
