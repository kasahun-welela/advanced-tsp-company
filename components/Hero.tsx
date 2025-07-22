// import { PhoneIcon } from "lucide-react";
// import { Button } from "./ui/button";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[url(/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat">
//       {/* Overlay for better contrast */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70 z-0" />
//       {/* Glassmorphism text container */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl py-12 border border-white/20">
//         <p className="text-lg md:text-2xl text-white/80 font-medium tracking-wide animate-fade-in-up">
//           Not your typical managed IT services provider.
//         </p>
//         <h1 className="text-4xl md:text-7xl font-extrabold text-white mt-4 drop-shadow-xl animate-fade-in-up animate-delay-100">
//           Excellent IT with <br />{" "}
//           <span className="text-primary">a solution in mind</span>
//         </h1>
//         <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
//           The best Managed IT Services are customized, technically sound and
//           fully efficient. At Atlantic Technology Services, our mission is to
//           ensure your IT needs are met.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up animate-delay-300">
//           <Button
//             size="lg"
//             className="text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform"
//           >
//             Schedule a Consultation
//           </Button>
//           <Button
//             variant="secondary"
//             className="bg-white/90 text-black px-6 py-4 rounded-lg shadow-lg flex items-center gap-2 hover:bg-white"
//           >
//             <PhoneIcon className="w-5 h-5" />
//             100-2222-2222
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" w-full h-screen flex gap-3 items-center justify-center overflow-hidden bg-[url(/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat ">
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
  );
};

export default Hero;
