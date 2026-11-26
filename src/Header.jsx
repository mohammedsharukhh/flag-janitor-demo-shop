import { useFlagsmith } from 'flagsmith/react';

export function Header() {
  const flagsmith = useFlagsmith();
  return (
    <header>
      <Logo />
      <nav></nav>
    </header>
  );
}
