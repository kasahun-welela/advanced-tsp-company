function SubServiceHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubServiceHero;
