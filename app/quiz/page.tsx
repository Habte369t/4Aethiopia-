export default function QuizPage() {
  const subjects = [
    'Anthropology', 'Inclusive Education', 'Math', 'Biology',
    'History', 'Sociology', 'Civic', 'Accounting',
    'English', 'Chemistry', 'Physics', 'IT', 'Law',
    'Economics', 'Statistics', 'Management'
  ]

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Choose a Subject to Take Quiz</h1>
      <ul className="grid grid-cols-2 gap-4">
        {subjects.map(subject => (
          <li key={subject} className="border p-3 rounded hover:bg-gray-100 cursor-pointer">
            {subject}
          </li>
        ))}
      </ul>
    </main>
  )
    }
