function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white   ">
        {title}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
