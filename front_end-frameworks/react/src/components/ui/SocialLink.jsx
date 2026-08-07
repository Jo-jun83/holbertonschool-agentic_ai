function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
    >
      {icon ? icon : null}
    </a>
  );
}

export default SocialLink;
