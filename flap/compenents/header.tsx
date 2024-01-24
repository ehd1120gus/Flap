import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <div className="flex h-full">
      <Link className="" href="/">
        <Logo />
      </Link>
    </div>
  );
}
