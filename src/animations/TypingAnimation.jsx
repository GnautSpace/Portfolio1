import TypingAnimation from "@/components/magicui/typing-animation";

export async function TextReveal() {
  return (
    <TypingAnimation
      className="text-4xl font-bold text-black dark:text-white"
      text="Typing Animation"
    />
  );
}
