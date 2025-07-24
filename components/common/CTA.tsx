import Link from "next/link";

function CTA({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-primary py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-blue-100 mb-8">{description}</p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
        >
          Schedule Assessment
        </Link>
      </div>
    </section>
  );
}

export default CTA;
