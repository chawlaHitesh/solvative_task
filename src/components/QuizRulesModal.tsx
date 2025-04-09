const QuizRulesModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 md:p-8 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/70 hover:text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#2f294d] mb-6">Quiz rules</h2>

        {/* Rule Section */}
        <div className="mb-4">
          <div className="bg-[#f5f5e6] font-semibold px-3 py-2 rounded-sm text-[#2f2f2f]">
            10-Second Timer
          </div>
          <ul className="mt-2 list-disc list-inside text-sm md:text-base text-[#1f1f1f] space-y-1">
            <li>Each question comes with a 10-second timer.</li>
            <li>
              If you don’t answer within the time limit, the app will
              automatically move to the next question.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="bg-[#f5f5e6] font-semibold px-3 py-2 rounded-sm text-[#2f2f2f]">
            Manual Navigation
          </div>
          <ul className="mt-2 list-disc list-inside text-sm md:text-base text-[#1f1f1f] space-y-1">
            <li>
              You can navigate to the next question manually before the timer
              expires.
            </li>
            <li>
              Use the "Next" button to move ahead if you’re ready before the
              timer runs out.
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-[#f5f5e6] font-semibold px-3 py-2 rounded-sm text-[#2f2f2f]">
            Final Score and Performance Message
          </div>
          <ul className="mt-2 list-disc list-inside text-sm md:text-base text-[#1f1f1f] space-y-1">
            <li>
              After all questions are answered, your final score will be
              displayed.
            </li>
            <li>
              Based on your performance, you will receive a personalized
              message:
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  <span className="font-medium">Great job!</span>: If you score{" "}
                  <strong>above 80%</strong>.
                </li>
                <li>
                  <span className="font-medium">Well done!</span>: If you score{" "}
                  <strong>between 60% and 80%</strong>.
                </li>
                <li>
                  <span className="font-medium">Keep practicing!</span>: If you
                  score <strong>below 60%</strong>.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizRulesModal;
