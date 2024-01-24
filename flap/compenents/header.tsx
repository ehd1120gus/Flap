import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <div className="flex h-full  ">
      <Link className="bg-red-400" href="/">
        <Logo />
      </Link>
    </div>
  );
}
