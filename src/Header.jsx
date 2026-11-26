import { useFlagsmith } from 'flagsmith/react';

export function Header() {
  const flagsmith = useFlagsmith();
  return (
    <header>
      {flagsmith.hasFeature('holiday_banner') && <HolidayBanner text="50% off this week!" />}
      <Logo />
      <nav></nav>
    </header>
  );
}
