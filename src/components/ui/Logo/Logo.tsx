import EMAIL_COLORS from "./emailColors";
import hashString from "./hashString";
import "./Logo.css";

type Props = {
  email: string;
};

export function Logo({ email }: Props) {
  const letter = email.trim()[0]?.toUpperCase() || "";
  const hash = hashString(email || "default");
  const [from, to] = EMAIL_COLORS[hash % EMAIL_COLORS.length];

  return (
    <div
      className="logo"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      aria-label={`Avatar for ${email}`}
    >
      <span className="logo__letter">{letter}</span>
      <span className="logo__sparkle" />
    </div>
  );
}
