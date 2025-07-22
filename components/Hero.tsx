// import { PhoneIcon, ChartNoAxesCombined } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <>
      <section className="md:mt-16 w-full h-screen flex gap-3 items-center justify-center overflow-hidden bg-[url(/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-2xl  text-white">
            Not your typical managed IT services provider.{" "}
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold  text-white mt-4 uppercase">
            Excellent IT with <br /> a solution in mind
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto">
            The best Managed IT Services are customized, technically sound and
            fully efficient. At Atlantic Technology Services, our mission is to
            ensure your IT needs are met.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
            >
              Schedule a Consultation
            </Link>
            <Link href="tel:100-2222-2222">
              <Button className="bg-white text-black px-4 py-2 rounded-md">
                <PhoneIcon className="w-4 h-4" />
                100-2222-2222
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950 -mt-20 ">
        <Tabs defaultValue="assess" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="assess">
              <ChartNoAxesCombined className="w-4 h-4" />
              Assess
            </TabsTrigger>
            <TabsTrigger value="password">Password Management</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section> */}
    </>
  );
};

export default Hero;
