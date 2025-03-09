import FuzzyText from "@/components/reactbits/FuzzyText";

export default async function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.12} enableHover={true}>
        404
      </FuzzyText>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.12} enableHover={true} fontSize={50}>
        Not Found
      </FuzzyText>
    </div>
  );
}
