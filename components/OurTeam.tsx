import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import SectionTitle from "./common/SectionTitle";

function OurTeam() {
  const teamMembers = [
    {
      name: "Abebe Kebede",
      img: "/images/team.jpg",
      title: "CEO",
    },
    {
      name: "Abebe Kebede",
      img: "/images/team.jpg",
      title: "CTO",
    },
    {
      name: "Abebe Kebede",
      img: "/images/team.jpg",
      title: "CMO",
    },
  ];
  return (
    <section className="py-12 ">
      <SectionTitle
        title="Meet Our Expert Team"
        description=" Dedicated professionals committed to optimizing your business performance and driving exceptional results"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((feature, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow duration-300 p-0 m-0"
          >
            <CardHeader className="p-0 m-0">
              <Image
                src={feature.img}
                alt={feature.name}
                width={1000}
                height={1000}
                className="rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="pb-4 px-4">
              <CardDescription className=" space-y-2">
                <h3 className="text-lg dark:text-white text-black font-bold">
                  {feature.name}
                </h3>
                <p className="text-sm dark:text-white text-black">
                  {feature.title}
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
