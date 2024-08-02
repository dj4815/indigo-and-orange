import React from "react";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import SmallHeading from "./SmallHeading";
import Paragraph from "./Paragraph";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";
import ButtonOther from "./ButtonOther";
import Link from "./Link";
import HomeHeroImage from "./HomeHeroImage";

export default function HomeHeader() {
  const linktext = "unde laborum ullam";
  const linktext2 = "ipsum dolor";
  const linktext3 = "Voluptas cum illo aliquam";
  const buttonMainText = "I am button.";
  const buttonSecondaryText = "Secondary button.";
  const buttonOtherText = "Other button.";
  const text1 = (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
      optio quibusdam earum eum ipsam iure repudiandae, itaque, dicta natus quam
      corporis <Link linktext={linktext} /> nulla! Adipisci quae quo doloribus
      ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae debitis
      architecto minus aliquid, officia sequi ducimus recusandae, at cum qui
      impedit culpa quod aut quis officiis tenetur nihil voluptates eos?
    </p>
  );

  const text2 = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      consequuntur quae ea natus tempora non, dolore unde modi. In, officiis
      praesentium. Voluptas cum illo aliquam ut inventore sed, aspernatur
      architecto? Lorem, <Link linktext={linktext2} /> sit amet consectetur
      adipisicing elit. Dolorum, corrupti ex. Eius aliquam tempore asperiores
      quidem tempora ullam perspiciatis, facere obcaecati impedit. Temporibus
      hic voluptatibus aliquam cupiditate itaque eaque dolorem.
    </p>
  );

  const text3 = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      consequuntur quae ea natus tempora non, dolore unde modi. In, officiis
      praesentium. <Link linktext={linktext3} /> ut inventore sed, aspernatur
      architecto? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Dolorum, corrupti ex. Eius aliquam tempore asperiores quidem tempora ullam
      perspiciatis, facere obcaecati impedit. Temporibus hic voluptatibus
      aliquam cupiditate itaque eaque dolorem.
    </p>
  );

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-x-8 pb-16 lg:m-8 2xl:mt-8 2xl:mb-8 2xl:ml-64 2xl:mr-64">
        <div className="flex flex-col flex-1 xl:flex-[2] p-4 pb-32 lg:pb-32 lg:p-8 xl:p-16 order-2 xl:order-1 bg-indigo-500 rounded-bl-[200px]">
          <SmallHeading text="React and Tailwind" />
          <Heading1 text="Indigo and Orange" />
          <Paragraph children={text1} />
          <Paragraph children={text2} />
          <div className="flex flex-col lg:flex-row gap-4">
            <ButtonMain text={buttonMainText} />
            <ButtonSecondary text={buttonSecondaryText} />
          </div>
        </div>
        <div className="flex-1 xl:flex-[3]">
          <HomeHeroImage />
        </div>
      </div>
    </>
  );
}
