import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section flex justify-center items-center bg-[#353f37] text-white" style={{height: '100svh'}} >
      <Image width={400} height={400} src="/images/logo_background.png" alt="backgournd_image" className="absolute w-full lg:w-3/5 z-0 "></Image>
      <div className="p-4 md:p-8 text-sm md:text-base border w-11/12 md:w-4/5 z-10">
        <div className="flex justify-end">
          <p style={{ writingMode: 'vertical-rl' }}>
            「とねり【舎人】」とは古語であり、<br/>
            王宮などで主人に使える使用人を意味する。<br/>
            我々は皆様の素敵なポーカー体験のため尽力いたします。
          </p>
        </div>
        <div className="mt-8">
          <p>
            &ldquo;Toneri&rdquo; is an ancient Japanese term means servants in royal courts for their master.<br/>
            We are committed to your great poker experience.
          </p>
        </div>
      </div>
    </section>
  )
}