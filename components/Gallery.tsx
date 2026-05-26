export default function Gallery() {

  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
  ];

  return (

    <section
      id="gallery"
      className="bg-[#02021a] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-16">
          Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-8 gap-2">
          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-xl bg-[#0f173d] p-1"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}