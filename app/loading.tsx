import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[75vh] flex flex-col gap-2 items-center justify-center">
      <Image src="music.gif" alt="loading music" />
      Where words fail, music speaks.
    </div>
  );
}
