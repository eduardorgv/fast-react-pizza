const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 px-5 text-center md:px-3">
      <h1 className="w-full border-b border-stone-600 pb-4 text-5xl font-semibold sm:text-6xl md:text-7xl">
        About us
      </h1>
      <img
        className="h-80 w-full object-cover"
        src="/pizzeria.jpg"
        alt="about us"
      />
      <p className="text-md text-justify md:text-xl">
        At PIZZA <span className="text-green-300">RUSH.</span> we believe that
        pizza is more than just food. It's an experience that brings people
        together. That's why we're committed to offering delicious pizzas made
        with fresh, high-quality ingredients. Our menu offers a variety of
        flavors for all tastes, from classic pizzas like Margherita,
        Capricciosa, Romana, Diavola and much more.
        <br />
        <br />
        We also offer a variety of options for take-out or dining in our warm
        and inviting restaurant.
        <br />
        Come try our pizzas and discover why we're the best pizzeria in town!
      </p>
    </div>
  );
};

export default AboutUs;
