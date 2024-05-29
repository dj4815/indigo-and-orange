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
      <div className="flex xl:flex-row flex-col gap-x-8 bg-indigo-50">
        <div className="flex flex-col flex-1 items-left justify-center p-4 lg:p-8 order-2 xl:order-1">
          <SmallHeading text="React and Tailwind" />
          <Heading1 text="Indigo and Orange" />

          <Paragraph children={text1} />

          <Paragraph children={text2} />

          <Paragraph children={text3} />
          <div className="flex flex-col lg:flex-row items-left gap-4">
            <ButtonMain text={buttonMainText} />
            <ButtonSecondary text={buttonSecondaryText} />
            <ButtonOther text={buttonOtherText} />
          </div>
        </div>

        <HomeHeroImage />
      </div>
    </>
  );
}
