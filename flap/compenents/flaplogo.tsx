import Image from 'next/image';

export default function FlapLogo() {
  return (
    <div>
      <Image
        src="/image/flaplogo.png"
        width="140"
        height="140"
        alt="flaplogo"
      />
    </div>
  );
}
