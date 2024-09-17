import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen ">
      <form className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <input
          type="text"
          placeholder="Name"
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button className="w-3/4 p-2 bg-gray-800 text-white rounded-md">
          Send
        </button>
      </form>

      <Image
        src={"/contact.png"}
        className="object-cover w-full lg:w-1/2 lg:h-screen"
        alt="Contact"
        width={1000}
        height={1000}
      />
    </section>
  );
}
