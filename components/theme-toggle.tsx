export function ThemeToggle() {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-muted hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Theme toggle (disabled)</span>
    </button>
  )
}
